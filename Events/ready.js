const Discord = require("discord.js")
module.exports = async(client) => {
    client.user.setActivity("Tanguy's order", {type : "LISTENING"}).catch(console.error)
    
    const spamChannel = client.channels.cache.get('716326108198600806')
     
    setInterval( () => {
        var now = new Date();
        var hours = now.getHours()
        var minutes = now.getMinutes();
        //vérifie si c'est l'heure
        if(hours === 18 && minutes === 29){
            spamChannel.send(`Il est ${hours}h${minutes}`)
        }
    }, 60000)//attend 60000 ms = 1min et vérifie à chaque minute si c'est l'heure d'envoyer le message ou non.

};