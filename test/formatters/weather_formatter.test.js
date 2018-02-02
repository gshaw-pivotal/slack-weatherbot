require('../../src/formatters/weather_formatter.js');

describe("weather formatter", function () {
    describe("given a weather response", function () {
        var weatherServiceData = {
                                  "coord":{
                                    "lon":-0.13,
                                    "lat":51.51
                                  },
                                  "weather":[{
                                    "id":521,
                                    "main":"Rain",
                                    "description":"shower rain",
                                    "icon":"09d"
                                  }],
                                  "base":"cmc stations",
                                  "main":{
                                    "temp":284.35,
                                    "pressure":1004,
                                    "humidity":50,
                                    "temp_min":283.15,
                                    "temp_max":286.45
                                  },
                                  "wind":{
                                    "speed":7.2,
                                    "deg":210
                                  },
                                  "clouds":{
                                    "all":20
                                  },
                                  "dt":1459267755,
                                  "sys":{
                                    "type":1,
                                    "id":5091,
                                    "message":0.0049,
                                    "country":"GB",
                                    "sunrise":1459230021,
                                    "sunset":1459276232
                                  },
                                  "id":2643743,
                                  "name":"London",
                                  "cod":200
                                 };
        var location = 'london';
        var expectation;

        describe("for the plain text response", function () {
            it("for all weather request returns a full weather report", function() {
                expectation = 'The current weather in ' + location + ' is: \n' +
                    weatherServiceData.weather[0].description +
                    '\n with a humidity of ' + weatherServiceData.main.humidity + '%' +
                    '\n and a wind speed of ' + weatherServiceData.wind.speed + 'm/s' +
                    '\n at ' + weatherServiceData.main.temp + 'K, ' +
                    convertKtoF(weatherServiceData.main.temp) + 'F, ' +
                    convertKtoC(weatherServiceData.main.temp) + 'C'

                expect(formatTextWeather(weatherServiceData, location, 'all')).toBe(expectation);
            });
        });

        describe("for the rich response", function () {
            it("returns a weather report header that indicates the location requested by the user", function () {
                expectation = 'The current weather in ' + location + ' is:';

                expect(formatRichWeather(weatherServiceData, location).attachments[0].pretext).toContain(expectation);
            });

            it("returns a weather report that contains a description of the current weather", function () {
                expectation = 'It is currently:';

                expect(formatRichWeather(weatherServiceData, location).attachments[1].text).toContain(expectation);
                expect(formatRichWeather(weatherServiceData, location).attachments[1].fields[0].title).toContain(weatherServiceData.weather[0].description);
            });

            it("returns a weather report that contains the current humidity", function () {
                expectation = 'The current humidity is:';

                expect(formatRichWeather(weatherServiceData, location).attachments[2].text).toContain(expectation);
                expect(formatRichWeather(weatherServiceData, location).attachments[2].fields[0].title).toContain(weatherServiceData.main.humidity + '%');
            });

            it("returns a weather report that contains the current wind speed", function () {
                expectation = 'The current wind speed is:';

                expect(formatRichWeather(weatherServiceData, location).attachments[3].text).toContain(expectation);
                expect(formatRichWeather(weatherServiceData, location).attachments[3].fields[0].title).toBe(weatherServiceData.wind.speed + 'm/s');
            });

            it("returns a weather report that contains the current temperature", function () {
                expectation = 'The current temperature is:';

                expect(formatRichWeather(weatherServiceData, location).attachments[4].text).toContain(expectation);
                expect(formatRichWeather(weatherServiceData, location).attachments[4].fields[0].title).toContain(weatherServiceData.main.temp + 'K');
                expect(formatRichWeather(weatherServiceData, location).attachments[4].fields[1].title).toContain(convertKtoF(weatherServiceData.main.temp) + 'F');
                expect(formatRichWeather(weatherServiceData, location).attachments[4].fields[2].title).toContain(convertKtoC(weatherServiceData.main.temp) + 'C');
            });
        });

        it("for a temperature request returns a temperature report", function() {
            expectation = 'The current temperature in ' + location + ' is: \n' +
                weatherServiceData.main.temp + 'K, ' +
                convertKtoF(weatherServiceData.main.temp) + 'F, ' +
                convertKtoC(weatherServiceData.main.temp) + 'C';

            expect(formatTextWeather(weatherServiceData, location, 'temp')).toBe(expectation);
        });

        describe("for a rain request returns a rain report", function() {

            it('when the weather data indicates rain', function () {
                expectation = 'It is currently raining in ' + location;

                expect(formatTextWeather(weatherServiceData, location, 'rain')).toBe(expectation);
            });

            it('when the weather data indicates no rain', function () {
                weatherServiceData.weather[0].description = 'sunny'

                expectation = 'There is no rain currently in ' + location;

                expect(formatTextWeather(weatherServiceData, location, 'rain')).toBe(expectation);
            });
        });

        describe("for a snow request returns a snow report", function() {

            it('when the weather data indicates snow', function () {
                weatherServiceData.weather[0].description = 'snow'

                expectation = 'It is currently snowing in ' + location;

                expect(formatTextWeather(weatherServiceData, location, 'snow')).toBe(expectation);
            });

            it('when the weather data indicates no snow', function () {
                weatherServiceData.weather[0].description = 'sunny'

                expectation = 'There is no snow falling in ' + location;

                expect(formatTextWeather(weatherServiceData, location, 'snow')).toBe(expectation);
            });
        });
    });
});
