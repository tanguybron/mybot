const Discord = require('discord.js')
const bot = new Discord.Client()

console.log('Le bot est en fonctionnement...')

bot.on('message', function (message){

    if(message.content  == '!tanguy'){
        message.reply('salut')
        message.react('😂')
    }

    if(message.content.includes("moche") ){
        message.delete()
    }
})

bot.login('NzE1MjE2MzYzMTkwMjIyOTg4.Xs6BGw.Fyr0-svci_4fqF4rIWKwRXW1y9E')

