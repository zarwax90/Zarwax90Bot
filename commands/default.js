module.exports = {
    name: 'default',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 0
        if (activate === 1) {

        } else {
            message.channel.send("Commande non activée");
        }
    }
}