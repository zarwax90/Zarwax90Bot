module.exports = {
    name: 'cnedsio1',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 1
        if (activate === 1) {
            message.channel.send("Liens CNED SIO1:\nCEJMA: https://lycee.cned.fr/cv/204683/53");
        } else {
            message.channel.send("Commande non activée");
        }
    }
}