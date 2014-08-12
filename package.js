Package.describe({
    summary: "Logging to silos via log4js"
});

Npm.depends({
    "log4js": "0.6.16",
    "log4js-appender-silos": "0.1.3"
});

Package.on_use(function (api) {
    api.export("log4js");
    api.export("silosAppender");
    api.add_files("log4js-silos.js", "server");
});