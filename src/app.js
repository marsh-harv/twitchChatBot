const tmi = require('tmi.js');
const { botName, oAuthToken, channelName } = require('./constants');

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		secure: true,
		reconnect: true
	},
	identity: {
		username: botName,
		password: oAuthToken
	},
	channels: [ channelName ]
});

client.connect();

client.on('message', (channel, userstate, message, self) => {
	// Ignore echoed messages
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${userstate.username}, heya!`);
	}
});