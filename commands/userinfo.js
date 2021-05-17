module.exports = {
    name: 'userinfo',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 1
        if (activate === 1) {
            const user_mention = message.mentions.users.first();
            message.channel.send(`Voici le tag de la personne que vous avez mentionné: **${user_mention.tag}**`)
        } else {
            message.channel.send("Commande non activée");
        }
    }
}