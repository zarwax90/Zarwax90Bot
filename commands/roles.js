module.exports = {
    name: 'role',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 0
        if (activate === 1) {
            // ID SIO1
            const SIO1ID = message.guild.roles.get("717780780285427754");
            //Nom SIO1
            const SIO1 = message.guild.roles.find(role => role.name === "⚫️ SIO 1");
        } else {
            message.channel.send("Commande non activée");
        }
    }
}