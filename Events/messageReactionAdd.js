Discord = require("discord.js")

module.exports = async(client,reaction,user) => {
    const botChannel = client.channels.cache.get('715556424712716398')
    var messageConcerned = reaction.message
    var author = reaction.message.author
    //author.send(`quelqu'un a réagis à ton message avec l'emoji : ${reaction.emoji}.`)

    function addRole(){
        let member = messageConcerned.guild.members.cache.get(user.id)
        member.roles.add(role)
    }

    if(reaction.emoji.name === '🔴'){
        messageConcerned.delete()
    }    
}