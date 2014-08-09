Integration of log4js with http://silos.ermlab.com for Metor

Example usage:

    log4js.enableSilos('your-logbook-token');
    
    if (Meteor.isServer) {
        Meteor.startup(function () {
            // code to run on server at startup
            log4js.getLogger().info("Server restarted!");
            log4js.getLogger("logger1").info("A message from logger1");
            log4js.getLogger("logger2").info("A message from logger2");
            console.log("A message from console");
        });
    }
