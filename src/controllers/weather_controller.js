var os = require('os');
var request =  require('request');

require('../requesters/weather_requester.js');

setupWeatherController = function (controller) {
    controller.hears(['weather (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/weather (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'all');
    });

    controller.hears(['temp (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/temp (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'temp');
    });

    controller.hears(['temperature (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/temperature (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'temp');
    });

    controller.hears(['rain (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/rain (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'rain');
    });

    controller.hears(['snow (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/snow (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'snow');
    });
};
