$("#home").text("Домой"); 
$("#modules").text("Модули");
$("#settings").text("Настройки");
$("#rules").text("Правила");
$("#more").text("Больше");
$("#integration").text("Интеграция");
$("#currentmonitor").text("diyBMS - токовый шунт");
$("#storage").text("Хранилище");
$("#avrprogrammer").text("AVR программатор");
$("#about").text("Инфо");
$("#modulesPage > h1").text("Модули");
$("#globalConfig > h2").text("Общая конфигурация");
$("#globalConfig > p").text("Конфигурация модуля");
$("#mpBank").text("Ячейка");
$("#mpModule").text("Модуль");
$("#mpVoltage").text("Напряжение");
$("#mpvmin").text("V. минимум");
$("#mptint").text("Внутренняя температура °C");
$("#mptext").text("Внешний датчик температуры °C");
$("#mpbypass").text("Байпас %");
$("#mpbpc").text("Поврежденные пакеты");
$("#mppktr").text("Полученные посылки");
$("#mpbal").text("Балансировка (mAh)");
$("#error1").text("У контроллера возникли проблемы со связью с модулем.");
$("#error3").text("Контроллер сконфигурирован с разными поддерживаемыми модулями.");
$("#error4").text("Ожидание ответа от модуля..");
$("#error5").text("Модуль зарегистрировал 0 вольт, пожалуйста, проверьте конфигурацию.");
$("#error6").text("В контроллере недостаточно места для хранения.");
$("#error7").text("Аварийная остановка");
$("#iperror").text("Связь с контроллером для обновления статуса невозможна.");
$("#jslibrary").text("Библиотека JavaScript была загружена неправильно, пожалуйста, обновите страницу.");
$("#saveerror").text("Настройки не были сохранены.");
$("#savesuccess").text("Сохраненные настройки");
$("#warning1").text("Внимание: байпасное напряжение модуля отличается от глобальной настройки");
$("#warning2").text("Внимание: температура байпаса модуля отличается от глобальной настройки");
$("#warning3").text("Внимание: модули имеют разные версии программного обеспечения, что может привести к нестабильности");
$("#warning4").text("Внимание: модули имеют разные версии оборудования");
$("#warning5").text("Внимание: логирование активировано, SD-карта не найдена");
$("#warning6").text("Внимание: некоторые функции отключены в режиме программирования AVR");
$("label[for='NTPServer']").text("NTP Сервер");
$("label[for='NTPZoneHour']").text("Часовой пояс (Часы)");
$("#rt1").text("DIYBMS поддерживает реле для безопасного переключения зарядных устройств, контакторов и потребителей. Приведенные ниже правила позволяют вам настроить их для вашей ситуации");
$("#rt2").text("Правила оцениваются от низкого к высокому (снизу вверх).  Управляйте реле с помощью опций. X означает игнорирование значения нижних строк");
$("#rt3").text("Правила становятся активными, когда значение превышает значение тревоги, и снова становятся неактивными, только когда значение становится ниже значения восстановления.  Это позволяет избежать нестабильных договоренностей.");
$("#rt4").text("Правила 'Таймер 1' и 'Таймер 2' позволяют регулировать время, правило становится активным, когда достигается количество минут после полуночи.  Например, таймер 1 активирует значение тревоги 495 и сбрасывает значение 555 в 08:15 и деактивирует в 21: 15. Это правило работает только при наличии подключения к Интернету (NTP).");
$("#rt5").text("Время после полуночи в минутах:");
$("#rt6").text("Аварийная остановка активируется через разъем J1, после активации контроллер должен быть сброшен");
$("#rf1").text("Правило");
$("#rf2").text("Значение сигнала тревоги");
$("#rf3").text("Значение сброса");
$("#rf4").text("Состояние реле");
$("label[for='rule1value']").text("Аварийная остановка");
//Internal BMS error 
$("label[for='rule1value']").text("Внутренняя ошибка BMS");
//Individual cell over voltage (mV)
$("label[for='rule3value']").text("Перенапряжение отдельной ячейки (мВ)");
//Cell under voltage (mV)
$("label[for='rule4value']").text("Пониженное напряжение ячейки (мВ)");
//Module over temperature (internal) °C
$("label[for='rule5value']").text("Максимальная температура модуля (внутренняя) °C");
//Module under temperature (internal)
$("label[for='rule6value']").text("Минимальная температура модуля (внутреняя)");
//Cell over temperature (external)
$("label[for='rule7value']").text("Максимальная температура ячейки (внешняя)");
//Cell under temperature (external)
$("label[for='rule8value']").text("Минимальная температура ячейки (внешняя)");
//Bank over voltage (mV)
$("label[for='rule9value']").text("Максимальное напряжение батареи (мВ)");
//Bank under voltage (mV)
$("label[for='rule10value']").text("Минимальное напряжение батареи (мВ)");
//Bank over voltage (mV)
//Bank under voltage (mV)
//Bank range/deviation (mV)
//Timer 2
$("label[for='rule14value']").text("Таймер 2");
//Timer 1
$("label[for='rule15value']").text("Таймер 1");
$("label[for='defaultvalue']").text("Реле по умолчанию");
$("label[for='relaytype']").text("Тип реле");
$("label[for='g1']").text("Максимальная температура байпаса");
$("label[for='g2']").text("Предельное значение байпаса mV");
$("#sent > span.x.t").text("Отправленные пакеты:");
$("#received > span.x.t").text("Полученные пакеты:");
$("#roundtrip > span.x.t").text("Туда и обратно (ms):");
$("#uptime > span.x.t").text("Время работы");
$("#qlen > span.x.t").text("Отправка Q длина:");
$("#ip1").text("Интеграция");
$("#ip2").text("Пароли должны быть введены повторно для активируемых или изменяемых сервисов.");
$("#ip3").text("После сохранения настроек контроллер необходимо перезапустить вручную");
$("#ip4").text("URI должен быть похож на mqtt://192.168.0.26:1833");
$("label[for='mqttEnabled']").text("Включить");
$("label[for='mqttTopic']").text("Топик");
$("label[for='mqttUri']").text("URI");
$("label[for='mqttPort']").text("Порт");
$("label[for='mqttUsername']").text("Логин");
$("label[for='mqttPassword']").text("Пароль");
$("#in2").text("API Версии 2.X");
$("#ap4").text("Помните, что это бесплатный продукт для личного использования.  Чтобы помочь проекту расти и развиваться, вы всегда можете поддержать его по ссылке Patreon ниже, даже небольшое пожертвование имеет большое значение.  Спасибо!");
$("#ap5").text("Предупреждение");
$("#ap6").text("Это самодельный продукт / решение, не используйте его в критически важных системах безопасности или в ситуации, когда это может быть опасно для жизни.");
$("#ap7").text("Никаких гарантий не дается, он может не соответствовать ожиданиям или вообще не работать");
$("#ap8").text("Использование этого проекта осуществляется исключительно на ваш страх и риск. Это может быть связано с электрическим напряжением, которое может привести к смерти - если вы сомневаетесь, обратитесь за помощью.");
$("#ap8a").text("Использование этого проекта может не соответствовать местному законодательству - если вы сомневаетесь, обратитесь за консультацией к профессионалу.");
$("#mb1").text("Модули и банки");
$("#mb2").text("DIYBMS поддерживает в общей сложности до 100 модулей.  Эти модули могут быть разделены на разные банки для параллельной конфигурации");
$("#mb3").text("Например: вы настроили 16 ячеек, 8 последовательно и 2 параллельно (8S2P)..");
$("#mb4").text("Только аппаратный модуль версии 4.4 или новее поддерживает более высокую скорость передачи данных. Вам нужно будет перезагрузить контроллер вручную, если вы измените скорость, а также убедиться, что все модули используют правильную прошивку.");
$("#globalSettingsButton").text("Сохранить настройки");
$("#diybmsCurrentMonitorPage > h1").text("Контроль тока и напряжения diyBMS");
$("#diybmsCurrentMonitorPage > div:nth-child(2) > h2").text("Подключение");
$("#b1").text("Настройте подключение MODBUS к контролю тока, используя приведенные ниже настройки.");
$("#b14").text("Устройство PZEM-017 использует 9600,8,None,2");
$("label[for='CurrentMonDev']").text("Устройство");
$("label[for='modbusAddress']").text("Modbus адрес");
$("#b2").text("Параметры конфигурации для интерфейса RS485. Связь осуществляется в полудуплексном режиме.");
$("label[for='rs485baudrate']").text("Скорость передачи в бодах");
$("label[for='rs485databit']").text("Биты данных");
$("label[for='rs485parity']").text("Биты данных");
$("label[for='rs485stopbit']").text("Стоп биты");
$("#avrprogPage > h1").text("AVR Программатор");
$("#aboutPage > h1").text("Об");
$("#power > span.x.t").text("Мощность");
$("#shuntv > span.x.t").text("Шунт В");
$("#current > span.x.t").text("Ток");
$("#range0 > span.x.t").text("Разница:0");
$("#b11").text("Емкость батареи и напряжение заряда / остаточный ток используются для расчета состояния заряда батареи SOC.");
$("#error2").text("Контроллер нашел");
$("#missingmodule1").text("модули, но настроен для");
$("#missingmodule2").text(".");
$("#genericerror").text("Ошибка контроллера");
$("#genericwarning").text("Предупреждение контроллера");
$("#warning7").text("Веб-страница не синхронизирована с контроллером, обновите веб-страницу (F5)");
$("#amphout > span.x.t").text("Ач выход:");
$("#amphin > span.x.t").text("Ач вход:");
$("#oos > span.x.t").text("O.O.S ошибок:");
$("#badcrc > span.x.t").text("CRC ошибок:");
$("#ignored > span.x.t").text("Проигнорированные запросы:");
$("#canfail > span.x.t").text("CAN ошибки:");
$("#cansent > span.x.t").text("CAN отправлено:");
$("#canrecd > span.x.t").text("CAN получено:");
$("#graphOptions > span.x.t").text("График:");
$("#settingConfig > h2").text("Настройка модуля");
$("#settingsForm > div > button").text("Сохранить");
$("#ap1").text("Прошивка и Печатная плата");
$("#ap2").text("Видео");
$("#ap9").text("Лицензия");
$("#b3").text("Убедитесь, что текущие параметры шунта соответствуют техническим характеристикам вашего конкретного шунтирующего резистора.");
$("#b4").text("Монитор тока DIYBMS использует максимальную шкалу 40,96 мВ, поэтому шунтирующие напряжения, превышающие эту шкалу, будут пропорционально уменьшены.");
$("#b15").text("PZEM-017 использует шунты напряжением 75 мВ, состояние заряда и аварийные сигналы на этом устройстве не поддерживаются. Поддерживаются только шунты 50, 100, 200, 300А.");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(2) > label").text("Выходное напряжение шунта (мВ)");
$("#RS485Form > div > button").text("Сохранить");
$("#diybmsCurrentMonitorForm1 > div > button").text("Сохранить");
$("#currentmonbasic > h2").text("Базовые настройки");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(3) > label").text("Емкость аккумулятора (Ач)");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(4) > label").text("Напряжение полного заряда");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(5) > label").text("Остаточный ток (Ампер)");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(6) > label").text("КПД заряда %");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(7) > label").text("Допустимые значения?");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(8) > label").text("Последнее сообщение (миллисекунды)");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(9) > label").text("Watchdog-счетчик");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(10) > label").text("Температура ядра процессора");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(11) > label").text("Значение тока шунта мВ");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(12) > label").text("Текущий размер LSB");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(13) > label").text("Сопротивление шунта");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(14) > label").text("Модель датчика");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(15) > label").text("Версия прошивки");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(16) > label").text("Дата прошивки");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(17) > label").text("Состояние реле");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(18) > label").text("Температура выше предельной");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(19) > label").text("Ток выше предела");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(20) > label").text("Ток ниже предела");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(21) > label").text("Напряжение выше предела");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(22) > label").text("Напряжение ниже предельного");
$("#diybmsCurrentMonitorForm2 > div > div:nth-child(23) > label").text("Мощность выше предела");
$("#diybmsCurrentMonitorForm2 > div > button:nth-child(24)").text("Сохранить");
$("#currentmonrefresh").text("Обновить");
$("#currentmonadvanced > h2").text("Расширенные настройки");
$("#victronForm1 > div > div:nth-child(1) > table > thead > tr > th:nth-child(1)").text("Когда?");
$("#victronForm1 > div > div:nth-child(1) > table > thead > tr > th:nth-child(2)").text("Предельное напряжение заряда (CVL)");
$("#victronForm1 > div > div:nth-child(1) > table > thead > tr > th:nth-child(3)").text("Предельный ток заряда (CCL)");
$("#victronForm1 > div > div:nth-child(1) > table > thead > tr > th:nth-child(4)").text("Предельный ток разряда (DCL)");
$("#victronForm1 > div > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(1)").text("По умолчанию");
$("#victronForm1 > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(1)").text("Балансировка");
$("#victronForm1 > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(1)").text("Ошибка");
$("#victronForm1 > div > div:nth-child(2) > label").text("Включить связь CANBUS BMS с устройствами Victron");
$("#victronForm1 > div > button").text("Сохранить");
$("#b5").text("Если вы хотите использовать управление реле на шунтирующем мониторе, установите параметры здесь. Обычно вам не нужно изменять значение калибровки.");
$("#b6").text("Ограничение по току предназначено для использования при разрядке аккумулятора, при зарядке используется ограничение по току, поэтому можно использовать разные ограничения по току разряда / заряда.");
$("#b7").text("Температурный предел зависит от температуры матрицы микросхемы, которая может не совпадать с температурой шунта. Поддерживается только положительный температурный коэффициент.");
$("#b8").text("Триггеры реле определяют, какие правила используются для перевода реле в замкнутое состояние.");
$("#diybmsCurrentMonitorForm3 > div > div:nth-child(1) > label").text("Калибровка");
$("#diybmsCurrentMonitorForm3 > div > div:nth-child(2) > label").text("Температурный предел");
$("#diybmsCurrentMonitorForm3 > div > div:nth-child(3) > label").text("Предел пониженного напряжения");
$("#diybmsCurrentMonitorForm3 > div > div:nth-child(4) > label").text("Предел перенапряжения");
$("#diybmsCurrentMonitorForm3 > div > div:nth-child(5) > label").text("Превышение предела тока");
$("#diybmsCurrentMonitorForm3 > div > div:nth-child(6) > label").text("Пониженный предел тока");
$("#diybmsCurrentMonitorForm3 > div > div:nth-child(7) > label").text("Превышение предела мощности");
$("#diybmsCurrentMonitorForm3 > div > div:nth-child(8) > label").text("Температурный коэффициент ppm");
$("#diybmsCurrentMonitorForm3 > div > button").text("Сохранить");
$("#b10").text("Настройки реле контроля тока и Температурного коэффициента");
$("#diybmsCurrentMonitorForm4 > div > div:nth-child(1) > label").text("Температурный коэффициент включен");
$("#diybmsCurrentMonitorForm4 > div > div:nth-child(2) > label").text("Срабатывание реле: Температура");
$("#diybmsCurrentMonitorForm4 > div > div:nth-child(3) > label").text("Срабатывание реле: Превышение тока");
$("#diybmsCurrentMonitorForm4 > div > div:nth-child(4) > label").text("Срабатывание реле: Ток пониженный");
$("#diybmsCurrentMonitorForm4 > div > div:nth-child(5) > label").text("Срабатывание реле: Превышение напряжения");
$("#diybmsCurrentMonitorForm4 > div > div:nth-child(6) > label").text("Срабатывание реле: Напряжение пониженное");
$("#diybmsCurrentMonitorForm4 > div > div:nth-child(7) > label").text("Срабатывание реле: Мощность");
$("#diybmsCurrentMonitorForm4 > div > button").text("Сохранить");
$("label[for='CurrentMonEnabled']").text("Активировать");
$("label[for='shuntmaxcur']").text("Максимальный ток шунтирования");
$("label[for='totalSeriesModules']").text("Количество последовательных ячеек (например, 8S)");
$("label[for='totalBanks']").text("Количество параллельных банок (например, 2P)");
$("label[for='baudrate']").text("Скорость связи");
$("label[for='interpacketgap']").text("Межпакетный разрыв (мс)");
$("label[for='NTPDST']").text("Переход на летнее время");
$("label[for='NTPZoneMin']").text("Часовой пояс (минута)");
$("label[for='Language']").text("Язык");
$("label[for='VoltageHigh']").text("Шкала напряжения графика (высокая)");
$("label[for='VoltageLow']").text("Шкала напряжения графика (низкая)");
$("label[for='ModuleId']").text("Идентификатор модуля");
$("label[for='Version']").text("Версия модуля");
$("label[for='BypassOverTempShutdown']").text("шунт превышение температуры");
$("label[for='BypassThresholdmV']").text("Порог шунта, мВ");
$("label[for='Calib']").text("Калибровочный множитель");
$("label[for='ActualVoltage']").text("Калькулятор - Фактическое измеренное напряжение");
$("#CalculateCalibration").text("Вычислить");
$("label[for='ExtBCoef']").text("Коэффициент внешней температуры");
$("label[for='IntBCoef']").text("Коэффициент внутренней температуры");
$("label[for='LoadRes']").text("Сопротивление нагрузки");
$("label[for='mVPerADC']").text("мВ на показания АЦП");
$("#rulesPage > h1").text("Правила");
$("#settingsPage > h1").text("Настройки");
$("#settingsPage > div:nth-child(3) > h2").text("Протокол сетевого времени");
$("#b9").text("Время устанавливается через NTP, если ваш контроллер не подключен к Интернету. Правила, основанные на времени, будут неверными. Это не приводит к автоматической корректировке перехода на летнее время.");
$("#banksForm > div > button").text("Сохранить");
$("#ntpForm > div > button").text("Сохранить");
$("#settingsPage > div:nth-child(4) > h2").text("Отображение");
$("#displaySettingForm > div > button").text("Сохранить");
$("#settingsPage > div:nth-child(5) > h2").text("Сброс счетчика");
$("#resetCountersForm > div > button").text("Сброс счетчика");
$("#settingsPage > div:nth-child(6) > h2").text("Перезапуск контроллера");
$("#restartControllerForm > div > button").text("Перезапуск контроллера");
$("label[for='rule0value']").text("Аварийная остановка");
$("#in4").text("Поддерживается только HTTP, для локальных серверов используется IP-адрес, а не доменное имя.");
$("#in5").text("Версия API 1.X");
$("#in7").text("Чтобы это сработало, используйте имя пользователя и пароль v1 в качестве токена в формате");
$("#in7 > i").text("Логин:Пароль");
$("#in8").text("Организация не используется, просто установите значение слова организация.");
$("#in9").text("URL-адрес такой же, как и в приведенном выше примере версии v2.");
$("#influxForm > div > div:nth-child(1) > label").text("Включить");
$("#mqttForm > div > button").text("Сохранить");
$("#influxForm > div > div:nth-child(2) > label").text("Частота логгирования (секунды)");
$("#influxForm > div > div:nth-child(3) > label").text("URL-адрес API записи InfluxDB");
$("#influxForm > div > div:nth-child(4) > label").text("Токен аутентификации API");
$("#influxForm > div > div:nth-child(5) > label").text("Influx DB 2 идентификатор организации");
$("#influxForm > div > div:nth-child(6) > label").text("Имя корзины или базы данных");
$("#influxForm > div > button").text("Сохранить");
$("#avrprogPage > div > ol > li:nth-child(1)").text("Включить режим программирования, это остановит регистрацию SD-карты и реакцию сенсорного экрана TFT.");
$("#b11 > strong").text("Не подключать");
$("#avrprogPage > div > p:nth-child(2)").text("Инструкции:");
$("#avrprogPage > div > ol > li:nth-child(2)").text("Выберите соответствующий файл для программирования");
$("#avrprogPage > div > ol > li:nth-child(3)").text("Прочитайте предупреждения");
$("#avrprogPage > div > ol > li:nth-child(4)").text("Подсоедините/подключите программируемое устройство к разъему ISP на контроллере");
$("#avrprogPage > div > ol > li:nth-child(5)").text("Выберите Прошивка.");
$("#avrprogPage > div > ol > li:nth-child(6)").text("По завершении извлеките устройство");
$("#avrprogPage > div > ol > li:nth-child(7)").text("Запрограммируйте другие устройства по мере необходимости");
$("#avrprogPage > div > ol > li:nth-child(8)").text("Отключите режим программирования");
$("#AVRProgEnable").text("Вкл режим прошивки");
$("#AVRProgDisable").text("Выкл режим прошивки");
$("#avrprogconfirm > ul > li:nth-child(1)").text("Перед программированием убедитесь, что вы отсоединили все кабели питания и связи от модуля/устройства.");
$("#avrprogconfirm > ul > li:nth-child(2)").text("Подключите модуль к порту ISP на контроллере с помощью ленточного кабеля или адаптера, убедитесь, что выемка выровнена с выводом 1 на модуле.");
$("#avrprogconfirm > ul > li:nth-child(3)").text("Нажмите Прошивка, чтобы начать программирование");
$("#avrprogconfirm > ul > li:nth-child(4)").text("Отсоедините кабель, как только программирование будет завершено");
$("#ProgAVR").text("Прошивка");
$("#ProgAVRCancel").text("Отмена");
$("#storagePage > h1").text("Хранилище");
$("#storagePage > div:nth-child(2) > h2").text("SD-Карта");
$("#sdcardmissing").text("SD-карта не установлена/ в настоящее время доступна");
$("#unmount").text("Отключить");
$("#mount").text("Подключить");
$("#savewifi").text("Сохранить WIFI");
$("#saveconfig").text("Сохранить Конфигурацию");
$("#sdcardfiles > li:nth-child(1) > button").text("Восстановить");
$("#sdcardfiles > li:nth-child(2) > button").text("Восстановить");
$("#sdcardfiles > li:nth-child(3) > button").text("Восстановить");
$("#storagePage > div:nth-child(3) > h2").text("Флэш-память");
$("#storagePage > div:nth-child(4) > h2").text("Логгирование");
$("#storagePage > div:nth-child(4) > p").text("Данные ячейки и выходные состояния могут храниться в виде файлов журнала с помощью SD-карты.");
$("#loggingForm > div > div:nth-child(1) > label").text("Ведение журнала на SD-карте включить");
$("#loggingForm > div > div:nth-child(2) > label").text("Частота регистрации данных ячейки (секунды)");
$("#loggingForm > div > button").text("Сохранить");
$("#v0").text("Victron CANBUS интеграция");
$("#v1").text("Эта функция позволяет diyBMS предоставлять данные о батарее и BMS устройствам Victron GX, используя протокол Victron CAN BMS.");
$("#v2").text("Не забудьте установить ограничительные резисторы на соединениях CAN L/H. Для этой цели на контроллере перемычка JP1 может быть припаяна закрытой.");
$("#v3").text("diyBMS будет посылать сигналы тревоги на устройство Victron на основе правил для низких / высоких напряжений и температур.");
$("#v4").text("Это позволяет устройствам Victron работать в режиме управления распределенным напряжением и током DVCC (опция).");
$("#victroncanbusPage > div:nth-child(2) > div:nth-child(5) > p").text("Этими параметрами можно управлять:");
$("#victroncanbusPage > div:nth-child(2) > div:nth-child(5) > ul > li:nth-child(1)").text("Предельное напряжение заряда (VL): максимальное напряжение заряда, которое в данный момент принимает аккумулятор.");
$("#victroncanbusPage > div:nth-child(2) > div:nth-child(5) > ul > li:nth-child(2)").text("Предельный ток заряда (CCL): максимальный ток заряда, требуемый аккумулятором.");
$("#victroncanbusPage > div:nth-child(2) > div:nth-child(5) > ul > li:nth-child(3)").text("Предельный ток разряда (DCL): максимальный ток разряда, требуемый батареей.");
$("#victroncanbusPage > div:nth-child(2) > div:nth-child(6) > p").text("Неправильное использование этих настроек может привести к разрядке аккумулятора и причинению вреда!");
$("#victroncanbusPage > div:nth-child(2) > div:nth-child(6) > p(1)").text("Интеграция Victron в настоящее время находится на ЭКСПЕРИМЕНТАЛЬНОЙ стадии, пожалуйста, сообщайте о проблемах");
