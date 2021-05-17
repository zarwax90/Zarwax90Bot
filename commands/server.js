module.exports = {
    name: 'server',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 1
        if (activate === 1) {
            message.channel.send(`Tu es sur le serveur **${message.guild.name}**.`);
        } else {
            message.channel.send("Commande non activée");
        }
    }
}