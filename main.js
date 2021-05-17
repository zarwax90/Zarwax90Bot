const fs = require("fs");
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config.js');
const ytdl = require('ytdl-core');

const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`Commande chargée: ${command.name}`)
}

client.on('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
});
client.on('ready', function() {
    client.user.setPresence({
        activity: {
            name: 'zarwax90',
            "type": 3,
        }
    })
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    client.commands.get(command).execute(client, message, args);
});

/*client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'arrivants');
    if (!channel) return;
    channel.send(`Bienvenue à toi ${ member }🎉🤗!\n
                N 'oublies pas d'aller jeter un œil aux règles avant de commencer, c 'est par ici : #『📖』règlement  !\n\n

                Tu peux également par la suite te présenter auprès des membres en cliquant ici: #『💖』présentation - membres\n\n

                ▶️ https: //discord.gg/akBsVpe`).catch(console.error)
    var role = message.guild.roles.cache.get("618904325279842315");
    member.addRole(role).catch(console.error)
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'logs');
    if (!channel) return;
    channel.send('**' + member.user.tag + '** a quitté le serveur. 🙁').catch(console.error)
});*/

client.login(TOKEN);