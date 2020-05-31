const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    var now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes();
    const secondes = now.getSeconds();
    message.channel.send("Il est actuellement : " + hours + ":" + minutes + ":" + secondes);
}

module.exports.help = {
    name : "heure"
}