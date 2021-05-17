module.exports = {
    name: 'user',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 1
        if (activate === 1) {
            message.channel.send(`Tu es **${message.author.tag}**.`);
        } else {
            message.channel.send("Commande non activée");
        }
    }
}