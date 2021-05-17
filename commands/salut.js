module.exports = {
    name: 'salut',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 1
        if (activate === 1) {
            message.channel.send('salut');
        } else {
            message.channel.send("Commande non activée");
        }
    }
}