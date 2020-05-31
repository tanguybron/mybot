const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(client, message, args) => {
    const member = message.mentions.members.first() || message.member;
    //if(!member){return message.channel.send(`Veuillez mentionner un utilisateur`)}
    message.channel.send(`utilisateur : <@${member.user.id}>`)
    message.channel.send({
        embed : {
            color : 0xfa0b0b,
            title : `Statistiques de l'utilisateur ${member.user.username}`,
            thumbnail : {
                url : member.user.displayAvatarURL({ dynamic: true })
            },
            fields : [
                {
                name : "> ID : ",
                value : member.id 
                },
                {
                    name : "Créé le : ",
                    value : moment.utc(member.user.createdAt).format("LL")
                },
                {
                    name : "Jeu : ",
                    value : `${member.user.presence.game ? `${member.user.presence.game.name}` : "Aucun jeu"}`
                },
                {
                    name : "Rejoint le :",
                    value : moment.utc(member.joinAt).format("LL")
                }
            ],
            footer : {
                text : `informations de l'utilisateur ${member.user.username}`
            }
        }
    })
}

module.exports.help = {
    name : "stats"
}