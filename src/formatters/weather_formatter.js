require('../converters/temperature_conversion.js');

formatWeather = function (forecast, location, outputOption) {

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
