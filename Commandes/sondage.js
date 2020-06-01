const Discord = require("discord.js")

var tanguy = 0;
var matthieu = 0;
var idVotant = "";

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
/*
function readCsvVotes(){
    fs.createReadStream('out.csv')
        .pipe(
            parse({
                delimiter : ','
            })
        )
        .on('data', function (dataRow){
            csvDataVotes.push(dataRow)
        })
}*/

const csvWriterVotants = createCsvWriter({
    path: 'votants.csv',
    header: [
        {id: 'id', title: 'ID Votant'},
    ]
});
 /*
const recordsVotants = [
    {id: idVotant},
];*/

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
/*
const csvWriterVotes = createCsvWriter({
    path: './out.csv',
    header: [
        {id: 'votes', title: 'VOTES'},
    ]
});*/
/*
function writeToCSVVotes(){
    csvWriterVotes.fileWriter.write( "tanguy"+ "\n" + tanguy + "\n" + "matthieu" + "\n"+matthieu)
    .then(() => {
        console.log('...Done');    
    });
}*/


readCsvVotants()
//tanguy = csvDataVotes[1]
//matthieu = csvDataVotes[2]

module.exports.run = async(client, message, args) => {

    const botChannel = client.channels.cache.get('715556424712716398')

    idVotant = message.author.id
    readCsvVotants()  
    args[0] = args[0].toLowerCase()  
    
    /*
    function writeToCSV(){
        csvWriterVotes.writeRecords(records)       // returns a promise        
        .then(() => {
            console.log('...Done');
        });
    }
*/
    if(message.author.bot === idVotant){
        return;
    }    


    if(!args[0]){
        message.reply("Pour qui votes-tu ? il faut le préciser !");
        return;
    }

    if(args[0] === "tanguy"){
        if(isInCSV(idVotant)){
            message.reply("Désolé tu as déjà voté.")
            return;
        }
        //idVotant = message.author.id
        tanguy = tanguy + 1;
        writeToCSVVotants();
        message.reply("message prit en compte.");
        botChannel.send("!!sondage")
        return;
    }

    if(args[0] === "matthieu"){
        if(isInCSV(idVotant)){
            message.reply("Désolé tu as déjà voté.")
            return;
        }
        //idVotant = message.author.id
        matthieu = matthieu+1;
        writeToCSVVotants();
        message.reply("message prit en compte."); 
        botChannel.send("!!sondage")
        return
    }

    if(args[0] === "result"){
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