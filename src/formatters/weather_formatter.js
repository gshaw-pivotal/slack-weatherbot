require('../converters/temperature_conversion.js');

formatTextWeather = function (forecast, location, outputOption) {

    switch (outputOption) {
        case 'all':
            return 'The current weather in ' + location + ' is: \n' +
                forecast.weather[0].description +
                '\n with a humidity of ' + forecast.main.humidity + '%' +
                '\n and a wind speed of ' + forecast.wind.speed +
                '\n at ' + forecast.main.temp + 'K, ' +
                convertKtoF(forecast.main.temp) + 'F, ' +
                convertKtoC(forecast.main.temp) + 'C';
        case 'temp':
            return 'The current temperature in ' + location + ' is: \n' +
                forecast.main.temp + 'K, ' +
                convertKtoF(forecast.main.temp) + 'F, ' +
                convertKtoC(forecast.main.temp) + 'C'
        case 'rain':
            if (forecast.weather[0].description.indexOf('rain') >= 0 || forecast.weather[0].description.indexOf('drizzle') >= 0) {
                return 'It is currently raining in ' + location;
            }
            else {
                return 'There is no rain currently in ' + location;
            }
        case 'snow':
            if (forecast.weather[0].description.indexOf('snow') >= 0) {
                return 'It is currently snowing in ' + location;
            }
            else {
                return 'There is no snow falling in ' + location;
            }
    }
};

formatRichWeather = function (forecast, location) {

    return {
        attachments:[
            {
                pretext: 'The current weather in ' + location + ' is:'
            },
            buildWeatherAttachment('It is currently:', forecast.weather[0].description),
            buildWeatherAttachment('The current humidity is:', forecast.main.humidity + '%'),
            buildWeatherAttachment('The current wind speed is:', forecast.wind.speed),
            buildTemperatureWeatherAttachment('The current temperature is:', forecast.main.temp)
        ]
    };
};

buildWeatherAttachment = function (messageText, dataPoint) {
    return {
        fallback: messageText + ' ' + dataPoint,
        text: messageText,
        fields:[
            {
                title: dataPoint
            }
        ]
    };
};

buildTemperatureWeatherAttachment = function (messageText, dataPoint) {
    return {
        fallback: messageText + ' ' + dataPoint + 'K',
        text: messageText,
        fields:[
            {
                title: dataPoint + 'K',
                short: true
            },
            {
                title: convertKtoF(dataPoint) + 'F',
                short: true
            },
            {
                title: convertKtoC(dataPoint) + 'C',
                short: true
            }
        ]
    };
};
