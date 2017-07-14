# Weatherbot Slackbot #

A slackbot that you can ask for the current weather in nearly any location in the world. This slackbot is built using Node.js.

## Getting Started ##

```
    git clone https://github.com/gshaw-pivotal/slack-weatherbot.git
```

## Integration with Slack ##

Bots and apps need to be given permission to integrate with slack. Thus you need to obtain a Slack API token for the bot.

Once a slack api token is obtained, it will need to be provided to the bot as an environment variable named 'token'.

When obtaining the API token you also have to give the bot a name that will be used to address it within slack. We used 'weatherbot', but you may use whatever name you like.

After the slackbot is running / deployed it will not have access to any channels until invited. Bots are invited just the same as any other slack user.

## Integration with Dark Sky ##

This bot uses the [Dark Sky API](https://darksky.net/dev/) to get weather data. In order for this bot to work you will need a Dark Sky API token/key.

Once you have said token/key, you will need to provide it to the bot as an environment variable named 'darksky'.

## Starting weatherbot Locally ##

Weatherbot can be started locally with the following command executed from the root of this repo.

```
    darksky=DARK_SKY_API_TOKEN token=SLACK_API_TOKEN node src/weather_bot.js
```

## Using weatherbot ##

After being invited into a slack channel, the bot can be interacted with the following commands:

1. '@weatherbot help' results in the bot responding with instructions on how to use it.
2. '@weatherbot uptime' results in the bot responding with how long it has been online.
3. '@weatherbot weather [location]' results in the bot responding with the current weather at the provided location (based on Dark Sky's interpretation of said location). This is a 'rich' response that utilises Slack's attachment option for nicer formatting.
4. '@weatherbot weather-text [location]' like the previous command, expect the response is a simpler plain text response with the current weather at the provided location.
5. '@weatherbot temp|temperature [location]' results in the bot responding with the current temperature at the provided location.
6. '@weatherbot rain [location]' results in the bot responding with whether it is currently raining at the provided location.
7. '@weatherbot snow [location]' results in the bot responding with whether it is currently snowing at the provided location.

Only one location per message is supported, as the bot takes the location to be everything after the command (eg. after weather or weather-text), hence the message '@weatherbot weather new york city' is interpreted to be a request for the weather in New York City.

When the weather for a location is requested using the 'weather-text' option the bot responds in the following format;

```
   The current weather in [location] is:
   [current weather description]
   with a humidity of [current humidity]%
   and a wind speed of [current windspeed]
   at [current temperature in Kelvin]K, [current temperature in Fahrenheit]F, [current temperature in Celsius]C
```

## Notes ##

- A manifest file is present to support deployments to cloudfoundry.
- Potentially implementing some kind of caching / storage of weather request with a short lifetime. This would mean that repeated requests for the weather for a place within a short timeframe would not make repeated requests to the Dark Sky API. This could be important if daily usage of the bot is likely to exceed 1,000 requests per day.
