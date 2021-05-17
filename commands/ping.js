module.exports = {
    name: 'ping',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 1
        if (activate === 1) {
            message.channel.send('Pong!');
        } else {
            message.channel.send("Commande non activée");
        }
    }
}