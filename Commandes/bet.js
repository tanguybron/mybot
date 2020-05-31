const Discord = require("discord.js");
const {MessageEmbed} = require("discord.js");

module.exports.run = async(client, message, args) => {
    const embed = new MessageEmbed()
        .setColor("#e96310")
        .setTitle("Titre")
        .addFields(
            {name : "champ 1", value : "valuer de 1", inline : true},
            {name : "champ 2", value : "valuer de 2", inline : true}
        )
        message.channel.send(embed)
}
module.exports.help = {
    name : "embed"
}