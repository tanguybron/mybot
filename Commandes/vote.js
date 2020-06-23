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
                name : proposition5,
                value : `a obtenu ${nbvotesprop5} votes`,
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

function supprEmpty(){
    if(proposition1 == "1ere proposition"){proposition1 = ""}
    if(proposition2 == "2eme proposition"){proposition2 = ""}
    if(proposition3 == "3eme proposition"){proposition3 = ""}
    if(proposition4 == "4eme proposition"){proposition4 = ""}
    if(proposition5 == "5eme proposition"){proposition5 = ""}
}

module.exports.run = async(client, message, args) => {

    const botChannel = client.channels.cache.get('715556424712716398')

    idVotant = message.author.id

    var vote= args[0]    

    if(message.author.bot === idVotant){
        return;
    }    

    if(!args[0]){
        message.reply("Pour qui votes-tu ? il faut le préciser ! 🧐");
        return;
    }

    if(args[0] === "start"){
        blockedVotes = false;
        supprEmpty()
        message.reply(`les votes sont ouverts ! Il est possible de voter pour : \n ${proposition1} \n ${proposition2} \n ${proposition3} \n ${proposition4} \n ${proposition5} `)
        return;
    }

    if(vote === "prop1" || vote === "prop2" || vote === "prop3" || vote === "prop4" || vote === "prop5"){
        switch(vote){
            case "prop1" :
                proposition1 = args[1]
                message.reply(`${proposition1} chargée en tant que proposition1. :white_check_mark: `)
                return;
            case "prop2" :
                proposition2 = args[1]
                message.reply(`${proposition2} chargée en tant que proposition2. :white_check_mark: `)
                return;
            case "prop3" :
                proposition3 = args[1]
                message.reply(`${proposition3} chargée en tant que proposition3. :white_check_mark: `)
                return;
            case "prop4" :
                proposition4 = args[1]
                message.reply(`${proposition4} chargée en tant que proposition4. :white_check_mark: `)
                return;
            case "prop5" :
                proposition5 = args[1]
                message.reply(`${proposition5} chargée en tant que proposition5. :white_check_mark: `)  
                return;         
        } 
    }

    if(blockedVotes){
        message.reply(`Les votes sont bloqués. Tu ne peux pas voter. :worried: `)
        return;
    }

    switch(vote){
        case proposition1 :
            if(alreadyVoted(idVotant)){
                message.reply("Désolé, tu as déjà voté.:worried: ")
                return;
            }
            nbvotesprop1++
            votants.push(idVotant)
            message.reply("Vote prit en compte. :white_check_mark:")
            return;
        case proposition2 :
            if(alreadyVoted(idVotant)){
                message.reply("Désolé, tu as déjà voté. :worried: ")
                return;
            }
            nbvotesprop2++
            votants.push(idVotant)
            message.reply("Vote prit en compte. :white_check_mark:")
            return;
        case proposition3 :
            if(alreadyVoted(idVotant)){
                message.reply("Désolé, tu as déjà voté. :worried: ")
                return;
            }
            nbvotesprop3++
            votants.push(idVotant)
            message.reply("Vote prit en compte. :white_check_mark:")
            return;
        case proposition4 :
            if(alreadyVoted(idVotant)){
                message.reply("Désolé, tu as déjà voté. :worried: ")
                return;
            }
            nbvotesprop4++
            votants.push(idVotant)
            message.reply("Vote prit en compte. :white_check_mark:")
            return;
        case proposition5 :
            if(alreadyVoted(idVotant)){
                message.reply("Désolé, tu as déjà voté. :worried: ")
                return;
            }
            nbvotesprop5++
            votants.push(idVotant)
            message.reply("Vote prit en compte. :white_check_mark:")
            return;
    }

    if(vote === "result"){        

        if(message.guild == null){
            message.reply("je ne peux pas donner les résultats en privé, désolé. Il faut que tu ailles sur le serveur du sondage. :worried: ")
            return;
        }
/*
        if(!message.member.roles.cache.find(r => r.name === "role rouge")){
            message.reply("tu n'as pas le bon role")
            return;
        }*/
        
        if( !message.member.hasPermission('ADMINISTRATOR') ){ //|| (!message.member.roles.cache.find(r => r.name === "role rouge")) ){
            message.reply("désolé tu n'as pas le bon rôle pour afficher les résultats. :worried: ");
            return;
        }

        createEmbedResult()
        var messageResult1 = `**${proposition1} a obtenu ${nbvotesprop1} votes.**`
        var messageResult2 = `**${proposition2} a obtenu ${nbvotesprop2} votes.**`
        var messageResult3 = `**${proposition3} a obtenu ${nbvotesprop3} votes.**`
        var messageResult4 = `**${proposition4} a obtenu ${nbvotesprop4} votes.**`
        var messageResult5 = `**${proposition5} a obtenu ${nbvotesprop5} votes.**`

        if(proposition1 == ""){messageResult1 = ""}
        if(proposition2 == ""){messageResult2 = ""}
        if(proposition3 == ""){messageResult3 = ""}
        if(proposition4 == ""){messageResult4 = ""}
        if(proposition5 == ""){messageResult5 = ""}

        var votes = []
        votes.push(nbvotesprop1)
        votes.push(nbvotesprop2)
        votes.push(nbvotesprop3)
        votes.push(nbvotesprop4)
        votes.push(nbvotesprop5)
                
        votes.sort(function(a, b) {
            return b - a;
        });

        console.log(votes)

        switch(votes[0]){
            case nbvotesprop1 :
                messageResult1 = messageResult1 + " :first_place:  "
                break;

            case nbvotesprop2 :
                messageResult2 = messageResult2 + " :first_place:  "
                break;
            
            case nbvotesprop3 :
                messageResult3 = messageResult3 + " :first_place:  "
                break;
            
            case nbvotesprop4 :
                messageResult4 = messageResult4 + " :first_place:  "
                break;
                
            case nbvotesprop5 :
                messageResult5 = messageResult5 + " :first_place:  "
                break;
        }
/*
        switch(votes[1]){
            case nbvotesprop1 :
                messageResult1 = messageResult1 + " :second_place:  "
                break;

            case nbvotesprop2 :
                messageResult2 = messageResult2 + " :second_place:  "
                break;
            
            case nbvotesprop3 :
                messageResult3 = messageResult3 + " :second_place:  "
                break;
            
            case nbvotesprop4 :
                messageResult4 = messageResult4 + " :second_place:  "
                break;
                
            case nbvotesprop5 :
                messageResult5 = messageResult5 + " :second_place:  "
                break;
        }

        switch(votes[2]){
            case nbvotesprop1 :
                messageResult1 = messageResult1 + " :third_place:  "
                break;

            case nbvotesprop2 :
                messageResult2 = messageResult2 + " :third_place:  "
                break;
            
            case nbvotesprop3 :
                messageResult3 = messageResult3 + " :third_place:  "
                break;
            
            case nbvotesprop4 :
                messageResult4 = messageResult4 + " :third_place:  "
                break;
                
            case nbvotesprop5 :
                messageResult5 = messageResult5 + " :third_place: "
                break;
        }*/

        console.log(votes)
        message.reply(` https://www.sbte.edu.pk/wp-content/uploads/2018/05/Result-510x310.png \n \n \n ${messageResult1} \n ${messageResult2} \n ${messageResult3} \n ${messageResult4} \n ${messageResult5}`)
        //message.reply(embedResult)
        blockedVotes = true;
        return;
    }

    //message.reply("Je n'ai pas compris ton vote. Il doit s'écrire sous la forme de '!!sondage <personne_pour_qui_voter>'")
}

module.exports.help = {
    name : "vote"
}