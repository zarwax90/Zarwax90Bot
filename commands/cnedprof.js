module.exports = {
    name: 'cnedprof',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 1
        if (activate === 1) {
            message.channel.send("https://tenor.com/view/inauguration-cnn2017-donald-trump-finger-wag-no-gif-7576946");
        } else {
            message.channel.send("Commande non activée");
        }
    }
}