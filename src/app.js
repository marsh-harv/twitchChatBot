import { Client } from 'tmi.js';
import { botName, oAuthToken, channelName, blockedWords } from './constants';

const options = 
    {
    options: { debug: true },
    connection: {
    secure: true,
    reconnect: true
}, identity: {
    username: botName,
    password: oAuthToken
},
channels: [ channelName ]
};


const client = new Client(options);

client.connect();

client.on('message', (channel, userstate, message) => {

    if(self) return;

    if(userstate.username === botName) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${userstate.username}, heya!`);
    }
    
    checkChat(userstate, message, channel);
});

function checkChat(userstate, message, channel) {

    message = message.toLowerCase();

    let shouldDelete = false;
    //Check Message
    shouldDelete = blockedWords.some(blockedWord => message.includes(blockedWord.toLowerCase()));

    //Respond with warning message
   if(shouldDeleteq) {
    client.say(channel, `@${username.username}, your message has been deleted due tpo the use of offence language.`);

    //Delete Message
    client.deletemessage(channel, userstate.id);
   }

}