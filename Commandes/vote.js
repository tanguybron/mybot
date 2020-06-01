const Discord = require("discord.js")


var idVotant = "";
var votants = []
var blockedVotes = false;

var nbvotesprop1 = 0;
var nbvotesprop2 = 0;
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
                value : `a obtenu ${nbvotesprop1} votes`
                },
                {
                name : proposition2,
                value : `a obtenu ${nbvotesprop2} votes`,
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

    if(blockedVotes){
        message.reply(`Les votes sont clos. Tu ne peux plus voter.`)
    }

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
        nbvotesprop1 = nbvotesprop1 + 1;
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
        nbvotesprop2 = nbvotesprop2+1;
        votants.push(idVotant)
        message.reply("message prit en compte."); 
        return
    }

    if(vote === "result"){        

        if(message.guild == null){
            message.reply("je ne peux pas donner les résultats en privé, désolé. Il faut que tu ailles sur le serveur du sondage.")
            return;
        }
/*
        if(!message.member.roles.cache.find(r => r.name === "role rouge")){
            message.reply("tu n'as pas le bon role")
            return;
        }*/
        
        if( ( !message.member.hasPermission('ADMINISTRATOR') ) || (!message.member.roles.cache.find(r => r.name === "role rouge")) ){
            message.reply("désolé tu n'as pas le bon rôle pour afficher les résultats.");
            return;
        }

        createEmbedResult()
        message.reply(embedResult)
        //blockedVotes = true;
        return;
    }

    message.reply("Je n'ai pas compris ton vote. Il doit s'écrire sous la forme de '!!sondage <personne_pour_qui_voter>'")
}

module.exports.help = {
    name : "vote"
}