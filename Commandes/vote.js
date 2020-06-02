const Discord = require("discord.js")


var idVotant = "";
var votants = []
var blockedVotes = false;

var nbvotesprop1 = 0;
var nbvotesprop2 = 0;
var nbvotesprop3 = 0;
var nbvotesprop4 = 0;
var nbvotesprop5 = 0;

var proposition1 = "1ere proposition"
var proposition2 = "2eme proposition"
var proposition3 = "3eme proposition"
var proposition4 = "4eme proposition"
var proposition5 = "5eme proposition"
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
                {
                name : proposition3,
                value : `a obtenu ${nbvotesprop3} votes`,
                },
                {
                name : proposition4,
                value : `a obtenu ${nbvotesprop4} votes`,
                },
                {
                name : proposition4,
                value : `a obtenu ${nbvotesprop4} votes`,
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

    if(vote === "prop1" || vote === "prop2" || vote === "prop3" || vote === "prop4" || vote === "prop5"){
        switch(vote){
            case "prop1" :
                proposition1 = args[1]
                message.reply(`${proposition1} chargée en tant que proposition1.`)
                break;
            case "prop2" :
                proposition2 = args[1]
                message.reply(`${proposition2} chargée en tant que proposition2.`)
                break;
            case "prop3" :
                proposition3 = args[1]
                message.reply(`${proposition3} chargée en tant que proposition3.`)
                break;
            case "prop4" :
                proposition4 = args[1]
                message.reply(`${proposition4} chargée en tant que proposition4.`)
                break;
            case "prop5" :
                proposition5 = args[1]
                message.reply(`${proposition5} chargée en tant que proposition5.`)  
                break;          
        } 
    }

    switch(vote){
        case proposition1 :
            if(alreadyVoted(idVotant)){
                message.reply("Désolé, tu as déjà voté.")
                return;
            }
            nbvotesprop1++
            votants.push(idVotant)
            message.reply("Vote prit en compte.")
            return;
        case proposition2 :
            if(alreadyVoted(idVotant)){
                message.reply("Désolé, tu as déjà voté.")
                return;
            }
            nbvotesprop2++
            votants.push(idVotant)
            message.reply("Vote prit en compte.")
            return;
        case proposition3 :
            if(alreadyVoted(idVotant)){
                message.reply("Désolé, tu as déjà voté.")
                return;
            }
            nbvotesprop3++
            votants.push(idVotant)
            message.reply("Vote prit en compte.")
            return;
        case proposition4 :
            if(alreadyVoted(idVotant)){
                message.reply("Désolé, tu as déjà voté.")
                return;
            }
            nbvotesprop4++
            votants.push(idVotant)
            message.reply("Vote prit en compte.")
            return;
        case proposition5 :
            if(alreadyVoted(idVotant)){
                message.reply("Désolé, tu as déjà voté.")
                return;
            }
            nbvotesprop5++
            votants.push(idVotant)
            message.reply("Vote prit en compte.")
            return;
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
        blockedVotes = true;
        return;
    }

    //message.reply("Je n'ai pas compris ton vote. Il doit s'écrire sous la forme de '!!sondage <personne_pour_qui_voter>'")
}

module.exports.help = {
    name : "vote"
}