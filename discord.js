const {token} = require('./config.json')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);

    client.user.setActivity("Out For Bad Words | Made By Spexz", {type: "WATCHING"});

    client.guilds.forEach((guild) => {
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    })

    let generalChannel = client.channels.get("738819986776391731");

    generalChannel.members.forEach(member => console.log(member.user.id + " Name: " + member.user.username));
    
});

client.on('message', (recievedMessage) => {
    if (recievedMessage.author == client.user) {
        return;
    }
    let userid = recievedMessage.author.id

    console.log(recievedMessage.content)
    if (recievedMessage.content.includes("fuck")) {
        recievedMessage.delete();
        recievedMessage.channel.send("🚫 - This message has been flagged for inappropriate language | Made By Spexz");
    }
	if (recievedMessage.content.includes("bitch")) {
        recievedMessage.delete();
        recievedMessage.channel.send("🚫 - This message has been flagged for inappropriate language | Made By Spexz");
    }
	if (recievedMessage.content.includes("shit")) {
        recievedMessage.delete();
        recievedMessage.channel.send("🚫 - This message has been flagged for inappropriate language | Made By Spexz");
    }
	if (recievedMessage.content.includes("crap")) {
        recievedMessage.delete();
        recievedMessage.channel.send("🚫 - This message has been flagged for inappropriate language | Made By Spexz");
    }
	if (recievedMessage.content.includes("nigga")) {
        recievedMessage.delete();
        recievedMessage.channel.send("🚫 - This message has been flagged for inappropriate language | Made By Spexz");
    }
	if (recievedMessage.content.includes("porn")) {
        recievedMessage.delete();
        recievedMessage.channel.send("🚫 - This message has been flagged for inappropriate language | Made By Spexz");
    }
	if (recievedMessage.content.includes("dick")) {
        recievedMessage.delete();
        recievedMessage.channel.send("🚫 - This message has been flagged for inappropriate language | Made By Spexz");
    }
	if (recievedMessage.content.includes("pussy")) {
        recievedMessage.delete();
        recievedMessage.channel.send("🚫 - This message has been flagged for inappropriate language | Made By Spexz");
    }
	if (recievedMessage.content.includes("vagina")) {
        recievedMessage.delete();
        recievedMessage.channel.send("🚫 - This message has been flagged for inappropriate language | Made By Spexz");
    }
    else if (userid == "") {
        recievedMessage.channel.send("🚫 - This message has been flagged for inappropriate language | Made By Spexz");
        recievedMessage.delete();
    }

    

});

client.login(TOKEN);
