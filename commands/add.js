module.exports = {
    name: 'add',
    description: 'Ajouter un role',
    execute(client, message, args, guild, channel) {
        const activate = 0
        if (activate === 1) {
            let role = message.guild.roles.cache.find(r => r.name === args.toString());
            if (role) {
                if (message.member.roles.cache.has(role.id)) return message.channel.send("Tu as déjà ce rôle !");
                if (role.permissions.has('KICK_MEMBERS')) return message.channel.send("Tu ne peux pas avoir ce rôle !");

                message.member.roles.add(role)
                    .then(m => message.channel(`Tu possèdess maintenant le rôle ${role}.`))
                    .catch(e => console.log(e));
            } else {
                message.channel.send("Ce rôle n'existe pas !");
            }
        } else {
            message.channel.send("Commande non activée");
        }
    }
}