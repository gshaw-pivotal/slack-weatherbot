var nock = require('nock');

require('../src/weather_bot.js');

describe("WeatherBot", function () {
    // var mapStorage = require('../botkit/lib/storage/hashmap_storage');

    // describe("utilises its request cache,", function () {
    //     it("checks to see if a location is in its cache (non-exist)", function() {
    //         expect(recentRequest('location1')).toBe(false);
    //         expect(recordCount()).toBe(0);
    //     });
    //
    //     it("adds a location to its cache", function() {
    //         expect(recordCount()).toBe(0);
    //         addRequest('location1', buildJsonObject());
    //         expect(recordCount()).toBe(1);
    //     });
    //
    //     it("checks to see if a location is in its cache (exist)", function() {
    //         expect(recentRequest('location1')).toBe(true);
    //         expect(recordCount()).toBe(1);
    //     });
    //
    //     it("retrieves a location from its cache", function() {
    //         expect(retrieveRequest('location1')).not.toBeNull();
    //         expect(recordCount()).toBe(1);
    //     });
    //
    //     it("checks to see if a location is in its cache (old)", function() {
    //         expect(recentRequest('location1')).toBe(false);
    //         expect(recordCount()).toBe(1);
    //     });
    // });

});

buildJsonObject = function () {
    return {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":521,"main":"Rain","description":"shower rain","icon":"09d"}],"base":"cmc stations","main":{"temp":284.35,"pressure":1004,"humidity":50,"temp_min":283.15,"temp_max":286.45},"wind":{"speed":7.2,"deg":210},"clouds":{"all":20},"dt":1459267755,"sys":{"type":1,"id":5091,"message":0.0049,"country":"GB","sunrise":1459230021,"sunset":1459276232},"id":2643743,"name":"London","cod":200};;
};
