# Архитектура
`Сервис Reader должен осуществлять чтение и передачу данных по заранее выбранному транспорту.`

При такой постановке Reader не самое удачное название, т.к. он осуществляет еще и передачу. Возможно лучше подходит какой-нибудь Transmitter.

Дальнейшая декомпозиция выявляет что модель Read-Work-Write подходит для описания архитектуры как Reader'a так и Writer'a (`Сервис Writer должен принимать данные от сервиса Reader, обрабатывать их и сохранять`).

Модель Read-Work-Write формализуем доменной сущностью Worker (input, output, workload[]).

Для сохранения общего с "бизнесом" языка результирующие приложения будут иметь имена Reader и Writer.

Модель Read-Work-Write перекликается со Streams (Readable,Writable,Transform), в Streams уже реализован механизм контроля потока данных (буфферизации и т.п.).

Предлагаемая базовая модель исполнения:

![Domain and Application](./domain-and-application.png)


