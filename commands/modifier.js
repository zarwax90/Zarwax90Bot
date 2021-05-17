module.exports = {
    name: 'modifier',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 0
        if (activate === 1) {
            Sio1 = message.guild.channels.cache.get("615866638486732800");
            sio1Slam = message.guild.channels.cache.get("615544576739901471");
            sio1Sisr = message.guild.channels.cache.get("615544648064303115");
            detenteSio1 = message.guild.channels.cache.get("615518778813317147");
            detenteSio1Slam = message.guild.channels.cache.get("615862657542651919");
            detenteSio1Sisr = message.guild.channels.cache.get("615862854024691722");

            Sio1.setName('test');
            Sio1.setName('『🔶』sio2');
            sio1Slam.setName("『💻』sio2-slam");
            sio1Sisr.setName("『💾』sio2-sisr");
            detenteSio1.setName("『🍉』détente-sio2");
            detenteSio1Slam.setName("『🍒』détente-sio2-slam");
            detenteSio1Sisr.setName("『🍅』détente-sio2-sisr");
        } else {
            message.channel.send("Commande non activée");
        }
    }
}