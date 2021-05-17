module.exports = {
    name: 'test',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 1
        if (activate === 1) {
            admin = message.guild.roles.cache.get("615520703675891723");
            console.log(admin);
        } else {
            message.channel.send("Commande non activée");
        }
    }
}