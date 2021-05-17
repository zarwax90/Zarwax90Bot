module.exports = {
    name: 'slam',
    description: 'Ajouter un role',
    execute(client, message, args, guild, channel) {
        const activate = 1
        if (activate === 1) {
            let sisr = message.guild.roles.cache.get("615523125534130176");
            let slam = message.guild.roles.cache.get("615522871678337046");
            if (message.member.roles.cache.has(slam.id)) return message.channel.send("Tu as déjà ce rôle !");
            if (message.member.roles.cache.has(sisr.id)) return message.channel.send("Oups tu es déjà SISR !");

            message.member.roles.add(slam)
                .then(m => message.channel.send(`Tu possèdess maintenant le rôle ${slam}.`))
                .catch(e => console.log(e));

        } else {
            message.channel.send("Commande non activée");
        }
    }
}