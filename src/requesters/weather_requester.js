var request =  require('request');

require('../formatters/weather_formatter.js');
require('../responders/weather_responders.js');

makeWeatherRequest = function (controller, bot, causeMessage, location, outputOption, richFormatMessage) {
    var apiKey = process.env.darksky;
    request('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=' + apiKey, function(error, response, body){

        if (error != null) {
            console.log("Request error: " + error);
            postResponse(controller, bot, causeMessage, "Weather not available.");
        }

        var forecast = JSON.parse(body);

        if (richFormatMessage) {
            issueResponse(controller, bot, causeMessage, formatRichWeather(forecast, location))
        }
        else {
            issueResponse(controller, bot, causeMessage, formatTextWeather(forecast, location, outputOption))
        }
    });
};

issueResponse = function (controller, bot, causeMessage, responseMessage) {
    postResponse(controller, bot, causeMessage, responseMessage);
};
