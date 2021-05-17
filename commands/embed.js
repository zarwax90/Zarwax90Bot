const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'embed',
    description: 'Renvoie un embed',
    execute(client, message, args, guild, channel) {
        const activate = 0
        if (activate === 1) {
            const embed = new MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Test l'embed")
                .setURL("https://www.google.com/")
                .setDescription("Description de l'embed")
                .setThumbnail(client.user.displayAvatarURL())
                .addField("Je suis un champ", "et je suis sa valeur")
                .addFields({ name: 'Je suis le champ 1', value: 'et je suis sa valeur', inline: true }, { name: 'Je suis le champ ', value: 'et en plus on est aligné', inline: true })
                .setImage(client.user.displayAvatarURL())
                .setTimestamp()
                .setFooter("Je suis le pied du footer");

            message.channel.send(embed);
        } else {
            message.channel.send("Commande non activée");
        }
    }
}