convertKtoF = function (kelvin) {
    return ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);
};

convertKtoC = function (kelvin) {
    return ((kelvin - 273.15)).toFixed(2);
};
