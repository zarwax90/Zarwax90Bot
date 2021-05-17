const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'newyear',
    description: '',
    execute(client, message, args, guild, channel) {
        const activate = 0
        if (activate === 1) {
            // New Salons
            const newGeneral = message.guild.channels.cache.get("717016523675533362");
            newDetenteG = message.guild.channels.cache.get("717017208785600630");
            newConference = message.guild.channels.cache.get("717035588158619788");

            newSio1 = message.guild.channels.cache.get("717014072071290881");
            newSio1Slam = message.guild.channels.cache.get("717014295656923227");
            newSio1Sisr = message.guild.channels.cache.get("717014152337686548");
            newDetenteSio1 = message.guild.channels.cache.get("731115494089949254");
            newDetenteSio1Slam = message.guild.channels.cache.get("717012937591750676");
            newDetenteSio1Sisr = message.guild.channels.cache.get("717012983078715462");

            newSio2 = message.guild.channels.cache.get("717014480470409337");
            newSio2Slam = message.guild.channels.cache.get("717014552885067857");
            newSio2Sisr = message.guild.channels.cache.get("717014830266974228");
            newDetenteSio2 = message.guild.channels.cache.get("731115473302978591");
            newDetenteSio2Slam = message.guild.channels.cache.get("717013251036282921");
            newDetenteSio2Sisr = message.guild.channels.cache.get("717013270254321764");

            newAnciens = message.guild.channels.cache.get("730423013706694707");
            newTeacher = message.guild.channels.cache.get("717034700073467917");

            // Anciens Salons
            general = message.guild.channels.cache.get("688844036291035141");
            detenteG = message.guild.channels.cache.get("615518716360130619");
            conference = message.guild.channels.cache.get("693761999359836220");

            Sio1 = message.guild.channels.cache.get("615866638486732800");
            sio1Slam = message.guild.channels.cache.get("615544576739901471");
            sio1Sisr = message.guild.channels.cache.get("615544648064303115");
            detenteSio1 = message.guild.channels.cache.get("615518778813317147");
            detenteSio1Slam = message.guild.channels.cache.get("615862657542651919");
            detenteSio1Sisr = message.guild.channels.cache.get("615862854024691722");

            Sio2 = message.guild.channels.cache.get("615866759349665804");
            sio2Slam = message.guild.channels.cache.get("615544684378587139");
            sio2Sisr = message.guild.channels.cache.get("615544725222719498");
            detenteSio2 = message.guild.channels.cache.get("615518809117163520");
            detenteSio2Slam = message.guild.channels.cache.get("615863658697981972");
            detenteSio2Sisr = message.guild.channels.cache.get("615863760770301962");

            Teacher = message.guild.channels.cache.get("615878622737334273");
            anciens = message.guild.channels.cache.get("653336026970062879");

            // Rôles
            admin = message.guild.roles.cache.get("615520703675891723");
            profAdmin = message.guild.roles.cache.get("615521144719802370");
            prof = message.guild.roles.cache.get("688831203758964736");
            intervenant = message.guild.roles.cache.get("693759254217359441");
            sio1 = message.guild.roles.cache.get("615521419991973897");
            slam1 = message.guild.roles.cache.get("615522871678337046");
            sisr1 = message.guild.roles.cache.get("615523125534130176");
            sio2 = message.guild.roles.cache.get("615522524834430997");
            slam2 = message.guild.roles.cache.get("615532095133057184");
            sisr2 = message.guild.roles.cache.get("615532191358779434");
            diplome = message.guild.roles.cache.get("616746888443723826");
            new_member = message.guild.roles.cache.get("618904325279842315");
            muted = message.guild.roles.cache.get("638130168107630622");
            botLevel2 = message.guild.roles.cache.get("645748833266958356");
            permissionVocaux = message.guild.roles.cache.get("690485150240210964");
            redoublant = message.guild.roles.cache.get("615588082363662366");
            everyone = message.guild.roles.cache.get("615516197030592532");

            // New Salons Vocaux
            newRecre = message.guild.channels.cache.get("717032451842506834");
            newClasseSio1Sio2 = message.guild.channels.cache.get("717031764337361107");
            newSalle55 = message.guild.channels.cache.get("717035707717124137");
            newSalleConference = message.guild.channels.cache.get("717035651148546189");
            newAFK = message.guild.channels.cache.get("724921255345782834");

            newClasseSio1 = message.guild.channels.cache.get("717015744952664084");
            newClasseSio1Sisr = message.guild.channels.cache.get("717015926024831047");
            newClasseSio1Slam = message.guild.channels.cache.get("717016020241350687");

            newClasseSio2 = message.guild.channels.cache.get("717016750536917022");
            newClasseSio2Sisr = message.guild.channels.cache.get("717016858024214538");
            newClasseSio2Slam = message.guild.channels.cache.get("717016960914948146");

            newProfesseurs = message.guild.channels.cache.get("717035085194592306");
            newReunion = message.guild.channels.cache.get("717034991632252928");

            // Anciens Salons Vocaux
            recre = message.guild.channels.cache.get("690657485320749076");
            classeSio1Sio2 = message.guild.channels.cache.get("689048916397785131");
            salle55 = message.guild.channels.cache.get("694944299816583278");
            salleConference = message.guild.channels.cache.get("693761754085457920");
            afk = message.guild.channels.cache.get("689106793292628004");

            classeSio1 = message.guild.channels.cache.get("689049111298834462");
            classeSio1Sisr = message.guild.channels.cache.get("689050722066628621");
            classeSio1Slam = message.guild.channels.cache.get("689049555945127971");

            classeSio2 = message.guild.channels.cache.get("689049454640496664");
            classeSio2Sisr = message.guild.channels.cache.get("689051384691425281");
            classeSio2Slam = message.guild.channels.cache.get("689051284548092177");

            Professeurs = message.guild.channels.cache.get("688097055214010545");
            Reunion = message.guild.channels.cache.get("712663895470506044");
            Admin = message.guild.channels.cache.get("689057679511126052");

            // SIO1
            alexis = message.guild.members.cache.get("314351818912038912");
            try {
                baptiste = message.guild.members.cache.get("222760839910916096");
                baptise_c = message.guild.members.cache.get("394961827089350659");
                bastien = message.guild.members.cache.get("281425132344442880");
                theo_e = message.guild.members.cache.get("657704923470757909");
                emmanuel = message.guild.members.cache.get("230433751316824064");
                ewan = message.guild.members.cache.get("330024678074613770");
                flavio = message.guild.members.cache.get("368808498013929477");
                florian_c = message.guild.members.cache.get("277442789740904450");
                gabriel = message.guild.members.cache.get("202809464351490049");
                iliesse = message.guild.members.cache.get("625374144133070889");
                jawad = message.guild.members.cache.get("282249151813779457");
                johan = message.guild.members.cache.get("204189339285061632");
                katel = message.guild.members.cache.get("618520370470977556");
                keny = message.guild.members.cache.get("689094407202406435");
                kevin = message.guild.members.cache.get("619270477268910090");
                loic = message.guild.members.cache.get("432658545901699082");
                lucas = message.guild.members.cache.get("273874542529609728");
                leo_c = message.guild.members.cache.get("147725204108345344");
                nathan = message.guild.members.cache.get("395569631303303168");
                remi = message.guild.members.cache.get("348395292514844672");
                saleh = message.guild.members.cache.get("645002394127826957");
                theo = message.guild.members.cache.get("360866839460315138");
                thomas_p = message.guild.members.cache.get("299199798395797504");
                tom_b = message.guild.members.cache.get("299639847704854528");
                tom_m = message.guild.members.cache.get("651575247828680707");
                nowlan = message.guild.members.cache.get("310312088566366220");
                yan = message.guild.members.cache.get("669248183389650965");
            } catch (error) {
                console.error(error)
            }
            //SIO2
            try {
                ahmet = message.guild.members.cache.get("486848433672421386");
                alix = message.guild.members.cache.get("356854700152324096");
                bastien_m = message.guild.members.cache.get("148770310366298112");
                bastien_brj = message.guild.members.cache.get("353912195853058058");
                benjamin = message.guild.members.cache.get("154302212971954176");
                christophe = message.guild.members.cache.get("544568073768927243");
                enzo_f = message.guild.members.cache.get("439537348628316161");
                etienne = message.guild.members.cache.get("359390669288112129");
                florian = message.guild.members.cache.get("94476546965770240");
                hugo = message.guild.members.cache.get("488666402081996800");
                imso = message.guild.members.cache.get("643910606751006721");
                ines = message.guild.members.cache.get("356838741148696576");
                jasvanthy = message.guild.members.cache.get("498062287681093636");
                jolan = message.guild.members.cache.get("356867234464923649");
                kais = message.guild.members.cache.get("186205866536468490");
                ossamasmh2 = message.guild.members.cache.get("710483069663969401");
                lucas_g = message.guild.members.cache.get("486990365035986944");
                leo = message.guild.members.cache.get("338685037086244864");
                matteo = message.guild.members.cache.get("211593391207743489");
                maxime = message.guild.members.cache.get("279681586184585217");
                myke = message.guild.members.cache.get("488792129548714004");
                nicolas = message.guild.members.cache.get("440163953562222613");
                noam = message.guild.members.cache.get("403279548478783512");
                phillipe = message.guild.members.cache.get("160836358162612224");
                priscillia = message.guild.members.cache.get("361964467950452737");
                salvatore = message.guild.members.cache.get("194427622996836352");
                vincent = message.guild.members.cache.get("168467117547454465");
                teddy = message.guild.members.cache.get("462040993567342592");
                thomas = message.guild.members.cache.get("491280931672555520");
                theo_l = message.guild.members.cache.get("355066192232316938");
                merwann = message.guild.members.cache.get("424992102246514699");
                yanis = message.guild.members.cache.get("485059559225032725");
            } catch (error) {
                console.error(error)
            }

            // Configuration des salons textuels déjà existant
            try {
                try {
                    Sio1.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS']
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: slam2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sisr2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                        allow: [],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['READ_MESSAGE_HISTORY'],
                    }]);
                    console.log("Modification de : Sio1");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : Sio1");
                }

                try {
                    sio1Slam.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MENTION_EVERYONE'],
                        allow: ['READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        allow: [],
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : sio1Slam");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : sio1Slam");
                }

                try {
                    sio1Sisr.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MENTION_EVERYONE'],
                        allow: ['READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sisr1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sisr2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : sio1Sisr");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : sio1Sisr");
                }

                try {
                    detenteSio1.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sisr2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : detenteSio1");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : detenteSio1");
                }

                try {
                    detenteSio1Slam.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sisr2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : detenteSio1Slam");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : detenteSio1Slam");
                }

                try {
                    detenteSio1Sisr.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: slam2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sisr2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : detenteSio1Sisr");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : detenteSio1Sisr");
                }
            } catch (error) {
                console.error(error);
            }

            // Configuration des nouveaux salons textuels
            try {
                try {
                    newSio1.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: intervenant,
                        deny: [],
                        allow: [],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: slam1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sio2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sisr2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : newSio1");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : newSio1");
                }
                try {
                    newSio1Slam.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sisr1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sisr2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : newSio1Slam");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : newSio1Slam");
                }
                try {
                    newSio1Sisr.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sisr1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sio2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sisr2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : newSio1Sisr");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : newSio1Sisr");
                }
                try {
                    newDetenteSio1.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sio2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : newDetenteSio1");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : newDetenteSio1");
                }
                try {
                    newDetenteSio1Slam.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sisr1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: redoublant,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : newDetenteSio1Slam");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : newDetenteSio1Slam");
                }
                try {
                    newDetenteSio1Sisr.overwritePermissions([{
                        id: admin,
                        deny: ['CREATE_INSTANT_INVITE', 'MENTION_EVERYONE'],
                        allow: ['MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: profAdmin,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: prof,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sio1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: slam1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: sisr1,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE'],
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: sio2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                        allow: [],
                    }, {
                        id: diplome,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: botLevel2,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: new_member,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'READ_MESSAGE_HISTORY', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }, {
                        id: muted,
                        deny: ['SEND_MESSAGES'],
                    }, {
                        id: everyone,
                        deny: ['CREATE_INSTANT_INVITE', 'MANAGE_CHANNELS', 'MANAGE_ROLES', 'MANAGE_WEBHOOKS', 'VIEW_CHANNEL', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'READ_MESSAGE_HISTORY', 'EMBED_LINKS', 'ATTACH_FILES', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS'],
                    }]);
                    console.log("Modification de : newDetenteSio1Slam");
                } catch (error) {
                    console.error(error);
                    console.error("Modification impossible de : newDetenteSio1Sisr");
                }
            } catch (error) {
                console.error(error);
            }

            // Ajouts des rôles 
            // sio1 slam1 ==> sio2 slam2
            try {
                alexis.roles.add(sio2).catch(console.error);
                alexis.roles.add(slam2).catch(console.error);
                alexis.roles.remove(sio1).catch(console.error);
                alexis.roles.remove(slam1).catch(console.error);
                alexis.roles.remove(sisr1).catch(console.error);
                try {
                    baptiste.roles.add(sio2).catch(console.error);
                    baptiste.roles.add(slam2).catch(console.error);
                    baptiste.roles.remove(sio1).catch(console.error);
                    baptiste.roles.remove(slam1).catch(console.error);

                    bastien.roles.add(sio2).catch(console.error);
                    bastien.roles.add(slam2).catch(console.error);
                    bastien.roles.remove(sio1).catch(console.error);
                    bastien.roles.remove(slam1).catch(console.error);

                    theo_e.roles.add(sio2).catch(console.error);
                    theo_e.roles.add(slam2).catch(console.error);
                    theo_e.roles.remove(sio1).catch(console.error);
                    theo_e.roles.remove(slam1).catch(console.error);

                    flavio.roles.add(sio2).catch(console.error);
                    flavio.roles.add(slam2).catch(console.error);
                    flavio.roles.remove(sio1).catch(console.error);
                    flavio.roles.remove(slam1).catch(console.error);

                    florian_c.roles.add(sio2).catch(console.error);
                    florian_c.roles.add(slam2).catch(console.error);
                    florian_c.roles.remove(sio1).catch(console.error);
                    florian_c.roles.remove(slam1).catch(console.error);

                    johan.roles.add(sio2).catch(console.error);
                    johan.roles.add(slam2).catch(console.error);
                    johan.roles.remove(sio1).catch(console.error);
                    johan.roles.remove(slam1).catch(console.error);

                    katel.roles.add(sio2).catch(console.error);
                    katel.roles.add(slam2).catch(console.error);
                    katel.roles.remove(sio1).catch(console.error);
                    katel.roles.remove(slam1).catch(console.error);

                    keny.roles.add(sio2).catch(console.error);
                    keny.roles.add(slam2).catch(console.error);
                    keny.roles.remove(sio1).catch(console.error);
                    keny.roles.remove(slam1).catch(console.error);

                    lucas.roles.add(sio2).catch(console.error);
                    lucas.roles.add(slam2).catch(console.error);
                    lucas.roles.remove(sio1).catch(console.error);
                    lucas.roles.remove(slam1).catch(console.error);

                    nathan.roles.add(sio2).catch(console.error);
                    nathan.roles.add(slam2).catch(console.error);
                    nathan.roles.remove(sio1).catch(console.error);
                    nathan.roles.remove(slam1).catch(console.error);

                    remi.roles.add(sio2).catch(console.error);
                    remi.roles.add(slam2).catch(console.error);
                    remi.roles.remove(sio1).catch(console.error);
                    remi.roles.remove(slam1).catch(console.error);

                    theo.roles.add(sio2).catch(console.error);
                    theo.roles.add(slam2).catch(console.error);
                    theo.roles.remove(sio1).catch(console.error);
                    theo.roles.remove(slam1).catch(console.error);

                    thomas_p.roles.add(sio2).catch(console.error);
                    thomas_p.roles.add(slam2).catch(console.error);
                    thomas_p.roles.remove(sio1).catch(console.error);
                    thomas_p.roles.remove(slam1).catch(console.error);

                    nowlan.roles.add(sio2).catch(console.error);
                    nowlan.roles.add(slam2).catch(console.error);
                    nowlan.roles.remove(sio1).catch(console.error);
                    nowlan.roles.remove(slam1).catch(console.error);

                    yan.roles.add(sio2).catch(console.error);
                    yan.roles.add(slam2).catch(console.error);
                    yan.roles.remove(sio1).catch(console.error);
                    yan.roles.remove(slam1).catch(console.error);
                } catch (error) {
                    console.error(error)
                }
            } catch (error) {
                console.error(error)
            }
            // sio1 sisr1 ==> sio2 sisr2
            try {
                emmanuel.roles.add(sio2).catch(console.error);
                emmanuel.roles.add(slam2).catch(console.error);
                emmanuel.roles.remove(sio1).catch(console.error);
                emmanuel.roles.remove(slam1).catch(console.error);

                ewan.roles.add(sio2).catch(console.error);
                ewan.roles.add(slam2).catch(console.error);
                ewan.roles.remove(sio1).catch(console.error);
                ewan.roles.remove(slam1).catch(console.error);

                gabriel.roles.add(sio2).catch(console.error);
                gabriel.roles.add(slam2).catch(console.error);
                gabriel.roles.remove(sio1).catch(console.error);
                gabriel.roles.remove(slam1).catch(console.error);

                iliesse.roles.add(sio2).catch(console.error);
                iliesse.roles.add(slam2).catch(console.error);
                iliesse.roles.remove(sio1).catch(console.error);
                iliesse.roles.remove(slam1).catch(console.error);

                jawad.roles.add(sio2).catch(console.error);
                jawad.roles.add(slam2).catch(console.error);
                jawad.roles.remove(sio1).catch(console.error);
                jawad.roles.remove(slam1).catch(console.error);

                kevin.roles.add(sio2).catch(console.error);
                kevin.roles.add(slam2).catch(console.error);
                kevin.roles.remove(sio1).catch(console.error);
                kevin.roles.remove(slam1).catch(console.error);

                loic.roles.add(sio2).catch(console.error);
                loic.roles.add(slam2).catch(console.error);
                loic.roles.remove(sio1).catch(console.error);
                loic.roles.remove(slam1).catch(console.error);

                leo_c.roles.add(sio2).catch(console.error);
                leo_c.roles.add(slam2).catch(console.error);
                leo_c.roles.remove(sio1).catch(console.error);
                leo_c.roles.remove(slam1).catch(console.error);

                saleh.roles.add(sio2).catch(console.error);
                saleh.roles.add(slam2).catch(console.error);
                saleh.roles.remove(sio1).catch(console.error);
                saleh.roles.remove(slam1).catch(console.error);

                tom_b.roles.add(sio2).catch(console.error);
                tom_b.roles.add(slam2).catch(console.error);
                tom_b.roles.remove(sio1).catch(console.error);
                tom_b.roles.remove(slam1).catch(console.error);

                tom_m.roles.add(sio2).catch(console.error);
                tom_m.roles.add(slam2).catch(console.error);
                tom_m.roles.remove(sio1).catch(console.error);
                tom_m.roles.remove(slam1).catch(console.error);
            } catch (error) {
                console.error(error)
            }
            // sio2 ==> anciens
            try {
                ahmet.roles.add(diplome).catch(console.error);
                ahmet.roles.remove(sio2).catch(console.error);
                ahmet.roles.remove(slam2).catch(console.error);
                ahmet.roles.remove(sisr2).catch(console.error);

                alix.roles.add(diplome).catch(console.error);
                alix.roles.remove(sio2).catch(console.error);
                alix.roles.remove(slam2).catch(console.error);
                alix.roles.remove(sisr2).catch(console.error);

                bastien_m.roles.add(diplome).catch(console.error);
                bastien_m.roles.remove(sio2).catch(console.error);
                bastien_m.roles.remove(slam2).catch(console.error);
                bastien_m.roles.remove(sisr2).catch(console.error);

                bastien_brj.roles.add(diplome).catch(console.error);
                bastien_brj.roles.remove(sio2).catch(console.error);
                bastien_brj.roles.remove(slam2).catch(console.error);
                bastien_brj.roles.remove(sisr2).catch(console.error);

                benjamin.roles.add(diplome).catch(console.error);
                benjamin.roles.remove(sio2).catch(console.error);
                benjamin.roles.remove(slam2).catch(console.error);
                benjamin.roles.remove(sisr2).catch(console.error);

                christophe.roles.add(diplome).catch(console.error);
                christophe.roles.remove(sio2).catch(console.error);
                christophe.roles.remove(slam2).catch(console.error);
                christophe.roles.remove(sisr2).catch(console.error);

                enzo_f.roles.add(diplome).catch(console.error);
                enzo_f.roles.remove(sio2).catch(console.error);
                enzo_f.roles.remove(slam2).catch(console.error);
                enzo_f.roles.remove(sisr2).catch(console.error);

                etienne.roles.add(diplome).catch(console.error);
                etienne.roles.remove(sio2).catch(console.error);
                etienne.roles.remove(slam2).catch(console.error);
                etienne.roles.remove(sisr2).catch(console.error);

                florian.roles.add(diplome).catch(console.error);
                florian.roles.remove(sio2).catch(console.error);
                florian.roles.remove(slam2).catch(console.error);
                florian.roles.remove(sisr2).catch(console.error);

                hugo.roles.add(diplome).catch(console.error);
                hugo.roles.remove(sio2).catch(console.error);
                hugo.roles.remove(slam2).catch(console.error);
                hugo.roles.remove(sisr2).catch(console.error);

                imso.roles.add(diplome).catch(console.error);
                imso.roles.remove(sio2).catch(console.error);
                imso.roles.remove(slam2).catch(console.error);
                imso.roles.remove(sisr2).catch(console.error);

                ines.roles.add(diplome).catch(console.error);
                ines.roles.remove(sio2).catch(console.error);
                ines.roles.remove(slam2).catch(console.error);
                ines.roles.remove(sisr2).catch(console.error);

                jasvanthy.roles.add(diplome).catch(console.error);
                jasvanthy.roles.remove(sio2).catch(console.error);
                jasvanthy.roles.remove(slam2).catch(console.error);
                jasvanthy.roles.remove(sisr2).catch(console.error);

                jolan.roles.add(diplome).catch(console.error);
                jolan.roles.remove(sio2).catch(console.error);
                jolan.roles.remove(slam2).catch(console.error);
                jolan.roles.remove(sisr2).catch(console.error);

                kais.roles.add(diplome).catch(console.error);
                kais.roles.remove(sio2).catch(console.error);
                kais.roles.remove(slam2).catch(console.error);
                kais.roles.remove(sisr2).catch(console.error);

                lucas_g.roles.add(diplome).catch(console.error);
                lucas_g.roles.remove(sio2).catch(console.error);
                lucas_g.roles.remove(slam2).catch(console.error);
                lucas_g.roles.remove(sisr2).catch(console.error);

                leo.roles.add(diplome).catch(console.error);
                leo.roles.remove(sio2).catch(console.error);
                leo.roles.remove(slam2).catch(console.error);
                leo.roles.remove(sisr2).catch(console.error);

                matteo.roles.add(diplome).catch(console.error);
                matteo.roles.remove(sio2).catch(console.error);
                matteo.roles.remove(slam2).catch(console.error);
                matteo.roles.remove(sisr2).catch(console.error);

                maxime.roles.add(diplome).catch(console.error);
                maxime.roles.remove(sio2).catch(console.error);
                maxime.roles.remove(slam2).catch(console.error);
                maxime.roles.remove(sisr2).catch(console.error);

                myke.roles.add(diplome).catch(console.error);
                myke.roles.remove(sio2).catch(console.error);
                myke.roles.remove(slam2).catch(console.error);
                myke.roles.remove(sisr2).catch(console.error);

                nicolas.roles.add(diplome).catch(console.error);
                nicolas.roles.remove(sio2).catch(console.error);
                nicolas.roles.remove(slam2).catch(console.error);
                nicolas.roles.remove(sisr2).catch(console.error);

                noam.roles.add(diplome).catch(console.error);
                noam.roles.remove(sio2).catch(console.error);
                noam.roles.remove(slam2).catch(console.error);
                noam.roles.remove(sisr2).catch(console.error);

                phillipe.roles.add(diplome).catch(console.error);
                phillipe.roles.remove(sio2).catch(console.error);
                phillipe.roles.remove(slam2).catch(console.error);
                phillipe.roles.remove(sisr2).catch(console.error);

                priscillia.roles.add(diplome).catch(console.error);
                priscillia.roles.remove(sio2).catch(console.error);
                priscillia.roles.remove(slam2).catch(console.error);
                priscillia.roles.remove(sisr2).catch(console.error);

                salvatore.roles.add(diplome).catch(console.error);
                salvatore.roles.remove(sio2).catch(console.error);
                salvatore.roles.remove(slam2).catch(console.error);
                salvatore.roles.remove(sisr2).catch(console.error);

                vincent.roles.add(diplome).catch(console.error);
                vincent.roles.remove(sio2).catch(console.error);
                vincent.roles.remove(slam2).catch(console.error);
                vincent.roles.remove(sisr2).catch(console.error);

                teddy.roles.add(diplome).catch(console.error);
                teddy.roles.remove(sio2).catch(console.error);
                teddy.roles.remove(slam2).catch(console.error);
                teddy.roles.remove(sisr2).catch(console.error);

                thomas.roles.add(diplome).catch(console.error);
                thomas.roles.remove(sio2).catch(console.error);
                thomas.roles.remove(slam2).catch(console.error);
                thomas.roles.remove(sisr2).catch(console.error);

                theo_l.roles.add(diplome).catch(console.error);
                theo_l.roles.remove(sio2).catch(console.error);
                theo_l.roles.remove(slam2).catch(console.error);
                theo_l.roles.remove(sisr2).catch(console.error);

                merwann.roles.add(diplome).catch(console.error);
                merwann.roles.remove(sio2).catch(console.error);
                merwann.roles.remove(slam2).catch(console.error);
                merwann.roles.remove(sisr2).catch(console.error);

                yanis.roles.add(diplome).catch(console.error);
                yanis.roles.remove(sio2).catch(console.error);
                yanis.roles.remove(slam2).catch(console.error);
                yanis.roles.remove(sisr2).catch(console.error);
            } catch (error) {
                console.error(error)
            }

            // Modifications des noms des salons textuels
            try {
                Sio1.setName('test')
                    .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
                    .catch(console.error);
                Sio1.setName('『🔶』sio2')
                    .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
                    .catch(console.error);
                sio1Slam.setName("『💻』sio2-slam")
                    .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
                    .catch(console.error);
                sio1Sisr.setName("『💾』sio2-sisr")
                    .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
                    .catch(console.error);
                detenteSio1.setName("『🍉』détente-sio2")
                    .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
                    .catch(console.error);
                detenteSio1Slam.setName("『🍒』détente-sio2-slam")
                    .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
                    .catch(console.error);
                detenteSio1Sisr.setName("『🍅』détente-sio2-sisr")
                    .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
                    .catch(console.error);
            } catch (error) {
                console.error(error)
            }

            // Suppression des salons textuels des anciens sio2
            try {
                try { Sio2.delete() } catch (error) {
                    console.log("Sio2 a déjà été supprimé")
                }
                try { sio2Slam.delete() } catch (error) {
                    console.log("sio2Slam a déjà été supprimé")
                }
                try { sio2Sisr.delete() } catch (error) {
                    console.log("sio2Sisr a déjà été supprimé")
                }
                try { detenteSio2.delete() } catch (error) {
                    console.log("detenteSio2 a déjà été supprimé")
                }
                try { detenteSio2Slam.delete() } catch (error) {
                    console.log("detenteSio2Slam a déjà été supprimé")
                }
                try { detenteSio2Sisr.delete() } catch (error) {
                    console.log("detenteSio2Sisr a déjà été supprimé")
                }
                try { newGeneral.delete() } catch (error) {
                    console.log("newGeneral a déjà été supprimé")
                }
                try { newSio2.delete() } catch (error) {
                    console.log("newSio2 a déjà été supprimé")
                }
                try { newSio2Slam.delete() } catch (error) {
                    console.log("newSio2Slam a déjà été supprimé")
                }
                try { newSio2Sisr.delete() } catch (error) {
                    console.log("newSio2Sisr a déjà été supprimé")
                }
                try { newDetenteSio2.delete() } catch (error) {
                    console.log("newDetenteSio2 a déjà été supprimé")
                }
                try { newDetenteSio2Slam.delete() } catch (error) {
                    console.log("newDetenteSio2Slam a déjà été supprimé")
                }
                try { newDetenteSio2Sisr.delete() } catch (error) {
                    console.log("newDetenteSio2Sisr a déjà été supprimé")
                }
                try { newAnciens.delete() } catch (error) {
                    console.log("newAnciens a déjà été supprimé")
                }
                try { newConference.delete() } catch (error) {
                    console.log("newConference a déjà été supprimé")
                }
                try { newDetenteG.delete() } catch (error) {
                    console.log("newDetenteG a déjà été supprimé")
                }
                try { newRecre.delete() } catch (error) {
                    console.log("newRecre a déjà été supprimé")
                }
                try { newClasseSio1Sio2.delete() } catch (error) {
                    console.log("newClasseSio1Sio2 a déjà été supprimé")
                }
                try { newClasseSio1.delete() } catch (error) {
                    console.log("newClasseSio1 a déjà été supprimé")
                }
                try { newClasseSio1Sisr.delete() } catch (error) {
                    console.log("newClasseSio1Sisr a déjà été supprimé")
                }
                try { newClasseSio1Slam.delete() } catch (error) {
                    console.log("newClasseSio1Slam a déjà été supprimé")
                }
                try { newClasseSio2.delete() } catch (error) {
                    console.log("newClasseSio2 a déjà été supprimé")
                }
                try { newClasseSio2Slam.delete() } catch (error) {
                    console.log("newClasseSio2Slam a déjà été supprimé")
                }
                try { newClasseSio2Sisr.delete() } catch (error) {
                    console.log("newClasseSio2Sisr a déjà été supprimé")
                }
                try { newSalle55.delete() } catch (error) {
                    console.log("newSalle55 a déjà été supprimé")
                }
                try { newSalleConference.delete() } catch (error) {
                    console.log("newSalleConference a déjà été supprimé")
                }
                try { newProfesseurs.delete() } catch (error) {
                    console.log("newProfesseurs a déjà été supprimé")
                }
                try { newReunion.delete() } catch (error) {
                    console.log("newReunion a déjà été supprimé")
                }
                try { newAFK.delete() } catch (error) {
                    console.log("newAFK a déjà été supprimé")
                }
                try { newTeacher.delete() } catch (error) {
                    console.log("newTeacher a déjà été supprimé")
                }
            } catch (error) {
                console.error(error)
            }

            // Déplacements des channels
            general.setParent("717015883129553018");
            detenteG.setParent("717015883129553018");
            conference.setParent("717015883129553018");
            recre.setParent("717015883129553018");
            classeSio1Sio2.setParent("717015883129553018");
            salle55.setParent("717015883129553018");
            salleConference.setParent("717015883129553018");
            afk.setParent("717015883129553018");

            Sio1.setParent("717010679739056188");
            sio1Slam.setParent("717010679739056188");
            sio1Sisr.setParent("717010679739056188");
            detenteSio1.setParent("717010679739056188");
            detenteSio1Slam.setParent("717010679739056188");
            detenteSio1Sisr.setParent("717010679739056188");
            classeSio2.setParent("717010679739056188");
            classeSio2Slam.setParent("717010679739056188");
            classeSio2Sisr.setParent("717010679739056188");

            classeSio1.setParent("717010611627753562");
            classeSio1Sisr.setParent("717010611627753562");
            classeSio1Slam.setParent("717010611627753562");

            Teacher.setParent("717033981190602794");
            Professeurs.setParent("717033981190602794");
            Reunion.setParent("717033981190602794");

            anciens.setParent("730422872358780929");

            Admin.setParent("615519731046154240");



            const embed1 = {
                color: 15105570,
                title: "Nouvelle configuration du serveur",
                description: "@everyone le serveur vient d'être paramétré pour l'année prochaine !\n\nIl est possible que certaines modifications n'aient pas été faites correctement,\n merci de nous les faire savoir dans le salon #『:receipt:』bugs, notifié en dessous de ce message.",
                fields: [{ name: 'Les modifications effectuées sont : ', value: '\u200B' }, { name: 'Modifications des salons', value: '```- réorganisations des salons\n- transfère des salons sio1 en sio2\n- suppressions des salons sio2\n- ajouts des nouveaux salons sio1```', inline: false }, { name: 'Modifications des salons vocaux', value: '```- réorganisations des salons\n```', inline: false }, { name: 'Modifications des roles', value: '```ajouts et suppressions des rôles:\n- sio1 slam1 ==> sio2 slam2 \n- sio1 sisr1 ==> sio2 sisr2 \n- sio2 ==> diplomé du BTS SIO```', inline: false }],
                timestamp: new Date(),
            };

            message.channel.send({ embed: embed1 });
        } else {
            message.channel.send("Commande non activée");
        }
    }
}