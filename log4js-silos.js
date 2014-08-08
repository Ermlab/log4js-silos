log4js = Npm.require("log4js");
silosAppender = Npm.require("log4js-appender-silos");


log4js.enableSilos = function (token, host, port) {
    var appender = 'log4js-appender-silos';
    log4js.loadAppender(appender);
    log4js.addAppender(log4js.appenders[appender](token, host, port));
}