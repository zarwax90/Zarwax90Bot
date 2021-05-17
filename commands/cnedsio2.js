module.exports = {
    name: 'cnedsio2',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 1
        if (activate === 1) {
            message.channel.send("Liens CNED SIO2:\nEDM: https: //lycee.cned.fr/cv/204683/53\nAnglais: https: //lycee.cned.fr/cv/254181/409\nMaths: https: //lycee.cned.fr/cv/201152/373");
        } else {
            message.channel.send("Commande non activée");
        }
    }
}