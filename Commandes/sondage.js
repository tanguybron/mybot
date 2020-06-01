const Discord = require("discord.js")

var tanguy = 0;
var matthieu = 0;
var idVotant = "";
var votants = []

const proposition1 = "tanguy"
const proposition2 = "matthieu"
var embedResult

function createEmbedResult(){
    embedResult = {
        embed : {
            color : 0x1bd33b,
            title : `Résultats du sondage :`,
            thumbnail : {
                url : "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/487.png"
            },
            fields : [
                {
                name : proposition1,
                value : `a obtenu ${tanguy} votes`
                },
                {
                name : proposition2,
                value : `a obtenu ${matthieu} votes`,
                },
            ],
            
        }
    }
}

function alreadyVoted(id){
    if(votants.includes(id)){
        return true;
    }
    return false;
}

module.exports.run = async(client, message, args) => {

    const botChannel = client.channels.cache.get('715556424712716398')

    idVotant = message.author.id

    var vote= args[0]

    if(message.author.bot === idVotant){
        return;
    }    


    if(!args[0]){
        message.reply("Pour qui votes-tu ? il faut le préciser !");
        return;
    }

    if(vote === proposition1){
        if(alreadyVoted(idVotant)){
            message.reply("Désolé tu as déjà voté.")
            return;
        }
        tanguy = tanguy + 1;
        votants.push(idVotant)
        message.reply("message prit en compte.");
        botChannel.send("!!sondage")
        return;
    }

    if(vote === proposition2){
        if(alreadyVoted(idVotant)){
            message.reply("Désolé tu as déjà voté.")
            return;
        }
        matthieu = matthieu+1;
        votants.push(idVotant)
        message.reply("message prit en compte."); 
        return
    }

    if(vote === "result"){

        if(message.guild == null){
            message.reply("je ne peux pas donner les résultats en privé, désolé. Il faut que tu ailles sur le serveur du sondage.")
            return;
        }
        
        if(!message.member.hasPermission('ADMINISTRATOR')){
            message.reply("désolé tu n'es pas admin");
            return;
        }

        createEmbedResult()
        message.reply(embedResult)
        return;
    }

    message.reply("Je n'ai pas compris ton vote. Il doit s'écrire sous la forme de '!!sondage <personne_pour_qui_voter>'")
}

module.exports.help = {
    name : "sondage"
}