const Botmock = require('botkit-mock')
const weatherController = require('../../src/controllers/weather_controller.js')

describe('weather controller test', () => {

    beforeEach(() => {
        this.controller = Botmock({})
        this.bot = this.controller.spawn({type: 'slack'})

        weatherController(this.controller)
    })

    describe('for a request regarding snow', () => {
        describe('upon receiving a direct message', () => {
            it('responds with a message on weather conditions with regards to snow', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_message',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'snow brisbane',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('snow')
                })
            })
        })

        describe('upon receiving a direct mention', () => {
            it('responds with a message on weather conditions with regards to snow', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'snow brisbane',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('snow')
                })
            })
        })

        describe('upon receiving a mention', () => {
            it('responds with a message on weather conditions with regards to snow', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'snow brisbane',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('snow')
                })
            })
        })
    })

    describe('for a request regarding rain', () => {
        describe('upon receiving a direct message', () => {
            it('responds with a message on weather conditions with regards to rain', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_message',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'rain brisbane',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('rain')
                })
            })
        })

        describe('upon receiving a direct mention', () => {
            it('responds with a message on weather conditions with regards to rain', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'direct_mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'rain brisbane',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('rain')
                })
            })
        })

        describe('upon receiving a mention', () => {
            it('responds with a message on weather conditions with regards to rain', () => {
                return this.bot.usersInput(
                    [
                        {
                            type: 'mention',
                            user: 'aUserId',
                            channel: 'aChannel',
                            messages: [
                                {
                                    text: 'rain brisbane',
                                    isAssertion: true
                                }
                            ]
                        }
                    ]
                ).then((message) => {
                    return expect(message.text).toContain('rain')
                })
            })
        })
    })
})