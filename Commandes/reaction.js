const Discord = require("discord.js")


module.exports.run = async(client) => {
    
    const embed = {
        embed : {
            color : 0x1bd33b,
            title : `OBTENIR DES ROLES :`,
            thumbnail : {
                url : "https://static.mediapart.fr/etmagine/default/files/2019/01/03/rouge-jaune-vert.jpg"
            },
            fields : [
                {
                name : "> Pour obtenir les différents rôles, réagis avec les emoji ci-dessous :  ",
                value : "🔺💛💚"
                },
                {
                name : "Rôles disponibles : ",
                value : "\n rôle rouge : 🔺 \n \n rôle jaune : 💛 \n \n rôle vert : 💚",
                },
            ],
            
        }
    }
    const roleChannel = client.channels.cache.get('715961238701473792')
    roleChannel.send(embed).then(embedMessage => {
        embedMessage.react("🔺")
        embedMessage.react("💛")
        embedMessage.react("💚");
    })

    client.on('messageReactionAdd', function(reaction,user, message){
        const botChannel = client.channels.cache.get('715556424712716398')
        var messageConcerned = reaction.message
        var author = reaction.message.author
    
        function addRole(){
            if(!role){return;}
            let member = messageConcerned.guild.members.cache.get(user.id)
            if(user.id === "715216363190222988"){return;}
            member.roles.add(role)
        }

        let role = null

        if(reaction.emoji.name === '🔺'){      
            role = messageConcerned.guild.roles.cache.get("715959683478978611")
            addRole()
        }else if(reaction.emoji.name === '💛'){      
            role = messageConcerned.guild.roles.cache.get("715959730677481645")
            addRole()
        }else if(reaction.emoji.name === '💚'){      
            role = messageConcerned.guild.roles.cache.get("715959605104214076")
            addRole()
        }
    })
    
}
module.exports.help = {
    name : "roleMSG"
}