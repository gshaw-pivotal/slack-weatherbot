var Botkit = require('botkit');
require('./controllers/help_controller.js');
require('./controllers/uptime_controller.js');
require('./controllers/weather_controller.js');

var controller = Botkit.slackbot({
    debug: false,
});

controller.spawn({
    token: process.env.token
}).startRTM();

setupWeatherController(controller);

setupHelpController(controller);

setupUptimeController(controller);
