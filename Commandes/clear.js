const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {

    if(message.guild === null){
        message.reply("désolé je ne peux supprimer de messages en privé. Tu peux utiliser cette fonctionalité sur des serveurs où je suis ;)")
        return;
    }

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")){return message.channel.send("Vous n'avez pas les permissions !").catch(console.error);}
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")){return message.channel.send("Je n'ai pas la permisson").catch(console.error);}

    if(!args[0]){return message.channel.send("Vous devenez spécifier un nombre de messages à supprimer.");}
    if(isNaN(args[0])){return message.channel.send("Veuillez spécifier un nombre.");}
    const nb_messages  = args[0]
    //message.delete()
    message.channel.bulkDelete(args[0]);

    message.channel.send(`${nb_messages} messages supprimés !` );
}

module.exports.help = {
    name : "clear"
}