const Discord = require("discord.js")

var tanguy = 0;
var matthieu = 0;
var idVotant = "";

const proposition1 = "tanguy"
const proposition2 = "matthieu"

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const parse = require('csv-parse');
const fs = require('fs')
const csvDataVotants = []
const csvDataVotes = []

function readCsvVotants(){
    fs.createReadStream('votants.csv')
        .pipe(
            parse({
                delimiter : ','
            })
        )
        .on('data', function (dataRow){
            csvDataVotants.push(dataRow)   
        })
}

const csvWriterVotants = createCsvWriter({
    path: 'votants.csv',
    header: [
        {id: 'id', title: 'ID Votant'},
    ]
});

function writeToCSVVotants(){
    csvWriterVotants.fileWriter.write(idVotant + "\n")
    .then(() => {
        console.log('...Done');    
    });
}

function isInCSV(id){
    for(i = 0; i < csvDataVotants.length ; i++){
        if(csvDataVotants[i] == id){
            return true;
        }
        return false;
    }
}


readCsvVotants()

module.exports.run = async(client, message, args) => {

    const botChannel = client.channels.cache.get('715556424712716398')

    idVotant = message.author.id
    readCsvVotants()  
    var vote= args[0]
        
    if(message.author.bot === idVotant){
        return;
    }    


    if(!args[0]){
        message.reply("Pour qui votes-tu ? il faut le préciser !");
        return;
    }

    if(vote === proposition1){
        if(isInCSV(idVotant)){
            message.reply("Désolé tu as déjà voté.")
            return;
        }
        tanguy = tanguy + 1;
        writeToCSVVotants();
        message.reply("message prit en compte.");
        botChannel.send("!!sondage")
        return;
    }

    if(vote === proposition2){
        if(isInCSV(idVotant)){
            message.reply("Désolé tu as déjà voté.")
            return;
        }
        matthieu = matthieu+1;
        writeToCSVVotants();
        message.reply("message prit en compte."); 
        botChannel.send("!!sondage")
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

        message.reply(`\n Tanguy a eu ${tanguy} votes. \n Matthieu a eu ${matthieu} votes.`)
        return;
    }

    message.reply("Je n'ai pas compris ton vote. Il doit s'écrire sous la forme de '!!sondage <personne_pour_qui_voter>'")
}

module.exports.help = {
    name : "sondage"
}