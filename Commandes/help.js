const Discord = require("discord.js")

module.exports.run = async(client, message, args) => {
    
    message.channel.send({
        embed : {
            color : 0x1bd33b,
            title : `Fenêtre d'aide`,
            fields : [
                {
                name : "> Préfixe :  ",
                value : "le préfixe à coller au début de chaque commande est : '!!' "
                },
                {
                name : "> Commandes : ",
                value : "\n help pour afficher l'aide \n \n clear <nb> pour effacer les 'nb' derniers messages du channel \n \n stats @mention pour avoir les statistiques du compte (si pas de mention, s'affiche les stats de celui qui a appelé la commande) \n \n ping qui calcule le temps de réponse du serveur.",
                },
                {
                name : "> votes : ",
                value : "\n [arg1] : prop1, prop2, prop3,... start, results \n exemple : !!vote prop1 premier : cette commande attribut 'premier' comme première possibilité de vote.",
                },
            ],
        }
    })
}

module.exports.help = {
    name : "help"
}
