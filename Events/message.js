const Discord = require("discord.js")
const prefix = "!!"

module.exports = async(client, message) => {

    //if(message.author.bot){return;}
    messageLower = message.content.toLowerCase()

    if(messageLower  === 'mddrrr' || messageLower === 'lol' || messageLower === 'xd' || messageLower === 'mdr' || messageLower === 'mdrrr' || messageLower === 'xptdr' || messageLower === 'xptdrr'){
        message.reply('lol :joy:')
        message.react('😂')
    }
    
    if(!message.content.startsWith(prefix)){return;}

    const args = message.content.slice(prefix.length).trim().split(" ")
    const commande = args.shift();

    const cmd = client.commands.get(commande);

    if(!cmd){return;}    

    cmd.run(client, message, args);
};

