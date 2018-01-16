var os = require('os');
var request =  require('request');

require('../requesters/weather_requester.js');

module.exports = setupWeatherController = function (controller) {
    controller.hears(['weather-text (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/weather-text (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'all', false);
    });

    controller.hears(['weather (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/weather (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'all', true);
    });

    controller.hears(['temp (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/temp (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'temp', false);
    });

    controller.hears(['temperature (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/temperature (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'temp', false);
    });

    controller.hears(['rain (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/rain (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'rain', false);
    });

    controller.hears(['snow (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {

        var location = message.text.match(/snow (.*)/i)[1];
        makeWeatherRequest(controller, bot, message, location, 'snow', false);
    });
};
