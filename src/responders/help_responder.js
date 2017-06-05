helpResponse = function (controller, bot, causeMessage){
    controller.storage.users.get(causeMessage.user,function(err, user) {
        bot.reply(causeMessage, 'How to use me:\n' +
            '@weatherbot [weather | temp | temperature | rain | snow] [location]\n' +
            'weather: find out what the current weather is\n' +
            'temp / temperature: find out what the current temperature is (K, F, C)\n' +
            'rain: find out if it is currently raining\n' +
            'snow: find out if it is currently snowing\n\n' +
            'location: place of interest.');
    });
};
