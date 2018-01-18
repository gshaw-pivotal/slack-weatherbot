require('../../src/converters/temperature_conversion.js');

describe("Temperature conversion", function () {
    describe("given a value", function () {
        it("converts Kelvin to Celsius", function() {
            expect(convertKtoC(273.15)).toBe('0.00');
            expect(convertKtoC(283.91)).toBe('10.76')
        });

        it("converts Kelvin to Fahrenheit", function() {
            expect(convertKtoF(273.15)).toBe('32.00');
            expect(convertKtoF(283.91)).toBe('51.37')
        });
    });
});
