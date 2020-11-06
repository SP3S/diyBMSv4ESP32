#include "PacketReceiveProcessor.h"



bool PacketReceiveProcessor::HasCommsTimedOut() {
  //We timeout the comms if we dont receive a packet within 5 times the normal
  //round trip time of the packets through the modules (minimum of 5 seconds to cater for low numbers of modules)
  uint32_t millisecondSinceLastPacket=millis()-packetLastReceivedMillisecond;
  return ((millisecondSinceLastPacket> 5*packetTimerMillisecond) && (millisecondSinceLastPacket > 5000));
}

bool PacketReceiveProcessor::ProcessReply(const uint8_t* receivebuffer,
                                          uint16_t sequenceToExpect) {


  packetsReceived++;

  // Copy to our buffer (probably dont need to do this)
  memcpy(&_packetbuffer, receivebuffer, sizeof(_packetbuffer));

  // Calculate the CRC and compare to received
  uint16_t validateCRC = CRC16::CalculateArray((uint8_t*)&_packetbuffer, sizeof(_packetbuffer) - 2);

  if (validateCRC == _packetbuffer.crc) {
      //Its a valid packet...
      packetLastReceivedMillisecond=millis();

      totalModulesFound=_packetbuffer.hops;

      if (ReplyWasProcessedByAModule()) {
        switch (ReplyForCommand()) {
          //case COMMAND::SetBankIdentity:
            //break;  // Ignore reply
          case COMMAND::ReadVoltageAndStatus:
            if (packetLastSentSequence==_packetbuffer.sequence) {
              //Record the number of milliseconds taken for this packet to go through the modules
              //we use this to later check for unusually large timeouts (indication of fault)
              packetTimerMillisecond=millis()-packetLastSentMillisecond;
            }
            ProcessReplyVoltage();
            break;
          case COMMAND::ReadBadPacketCounter:
            ProcessReplyBadPacketCount();
          break;
          case COMMAND::Identify:
            break;  // Ignore reply
          case COMMAND::ReadTemperature:
            ProcessReplyTemperature();
            break;
          case COMMAND::ReadSettings:
            ProcessReplySettings();
            break;
          case COMMAND::ReadBalancePowerPWM:
            ProcessReplyBalancePower();
            break;            
        }

        return true;
      } else {
        //Error count for a request that was not processed by any module
        totalNotProcessedErrors++;
        //Invalidate the whole bank if a module didn't process the request - something is a miss
        //or we have just configured a module to another bank
        //numberOfModules[0]=0;
      }

  } else {
    //crc error
    totalCRCErrors++;
  }

  //SERIAL_DEBUG.println("Failed ProcessReply");
  return false;
}

uint8_t PacketReceiveProcessor::ReplyLastAddress() {
  return _packetbuffer.start_address;
}

void PacketReceiveProcessor::ProcessReplyAddressByte() {
  // Only set if it was a reply from a broadcast message
/*
  if (broadcast > 0) {
    if (numberOfModules[ReplyFromBank()] != ReplyLastAddress()) {

      //SERIAL_DEBUG.println("Reset bank values");

      numberOfModules[ReplyFromBank()] = ReplyLastAddress();

      // if we have a different number of modules in this bank
      // we should clear all the cached config flags from the modules
      // as they have probably moved address
      for (size_t i = 0; i < maximum_cell_modules; i++) {
        cmi[ReplyFromBank()][i].settingsCached = false;
        cmi[ReplyFromBank()][i].voltagemVMin = 6000;
        cmi[ReplyFromBank()][i].voltagemVMax = 0;
      }
    }
  }
*/  
}


void PacketReceiveProcessor::ProcessReplyBadPacketCount() {
  // Called when a decoded packet has arrived in buffer for command
  ProcessReplyAddressByte();
  for (size_t i = 0; i < maximum_cell_modules; i++) {
    cmi[i].badPacketCount = _packetbuffer.moduledata[i];
  }
}

void PacketReceiveProcessor::ProcessReplyTemperature() {
  // Called when a decoded packet has arrived in buffer for command 3

  ProcessReplyAddressByte();
  // 40 offset for below zero temps
  for (size_t i = 0; i < maximum_cell_modules; i++) {
    cmi[i].internalTemp = ((_packetbuffer.moduledata[i] & 0xFF00) >> 8) - 40;
    cmi[i].externalTemp = (_packetbuffer.moduledata[i] & 0x00FF) - 40;
  }
}

void PacketReceiveProcessor::ProcessReplyBalancePower() {
  // Called when a decoded packet has arrived in _packetbuffer for command 1
  ProcessReplyAddressByte();

  for (uint8_t i = 0; i < maximum_cell_modules; i++) {
    cmi[i].PWMValue = _packetbuffer.moduledata[i];
  }
}


void PacketReceiveProcessor::ProcessReplyVoltage() {
  // Called when a decoded packet has arrived in _packetbuffer for command 1
  ProcessReplyAddressByte();

  for (uint8_t i = 0; i < maximum_cell_modules; i++) {
    // 3 top bits remaining
    // X = In bypass
    // Y = Bypass over temperature
    // Z = Not used

    cmi[i].voltagemV = _packetbuffer.moduledata[i] & 0x1FFF;
    cmi[i].inBypass = (_packetbuffer.moduledata[i] & 0x8000) > 0;
    cmi[i].bypassOverTemp = (_packetbuffer.moduledata[i] & 0x4000) > 0;

    if (cmi[i].voltagemV > cmi[i].voltagemVMax) {
      cmi[i].voltagemVMax = cmi[i].voltagemV;
    }

    if (cmi[i].voltagemV < cmi[i].voltagemVMin) {
      cmi[i].voltagemVMin = cmi[i].voltagemV;
    }
  }
}

void PacketReceiveProcessor::ProcessReplySettings() {

  uint8_t m = ReplyLastAddress();

  // TODO Validate b and m here to prevent array overflow
  cmi[m].settingsCached = true;

  FLOATUNION_t myFloat;

  myFloat.word[0] = _packetbuffer.moduledata[0];
  myFloat.word[1] = _packetbuffer.moduledata[1];

  // Arduino float (4 byte)
  cmi[m].LoadResistance = myFloat.number;
  // Arduino float(4 byte)
  myFloat.word[0] = _packetbuffer.moduledata[2];
  myFloat.word[1] = _packetbuffer.moduledata[3];
  cmi[m].Calibration = myFloat.number;

  // Arduino float(4 byte)
  myFloat.word[0] = _packetbuffer.moduledata[4];
  myFloat.word[1] = _packetbuffer.moduledata[5];
  cmi[m].mVPerADC = myFloat.number;
  // uint8_t
  cmi[m].BypassOverTempShutdown = _packetbuffer.moduledata[6] & 0x00FF;
  // uint16_t
  cmi[m].BypassThresholdmV = _packetbuffer.moduledata[7];
  // uint16_t
  cmi[m].Internal_BCoefficient = _packetbuffer.moduledata[8];
  // uint16_t
  cmi[m].External_BCoefficient = _packetbuffer.moduledata[9];
  // uint16_t
  cmi[m].BoardVersionNumber = _packetbuffer.moduledata[10];
}
