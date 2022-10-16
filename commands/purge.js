const Discord = require('discord.js')
exports.run = async(client, msg, args) => {
    if(!msg.member.permissions.has('MANAGE_MESSAGES')) return; // MANAGE_MESSAGES can be changed to something else!
    if(!args[0]) return msg.reply('You Need To Specify A Number Of Messages That You Want To Purge You Negro!');
    if(isNaN(args[0])) return msg.reply('You Need To Specify A Valid Number of Messages That You Want Me To Delete You Negro!');

    if(args[0] > 1000) return msg.reply('You Need To Specify A Number Less than 1000 You Negro!');
    if(args[0] < 1) return msg.reply('You Need To Specify A Number Greater than 1 You Negro!');

    msg.delete()
    await msg.channel.messages.fetch({limit: args[0]}).then (async messages => {
        msg.channel.bulkDelete(messages);

    var embed = new Discord.MessageEmbed()
        .setColor('0x06F7C7')
        .setDescription(`I Have Successfully Deleted ${args[0]} Messages!`)
        .setFooter('You Are A Negro, Also This Message Will Delete In 5 Seconds.')
      var sendEm = await msg.channel.send({ embeds: [embed] });
       msg.delete()
       setTimeout(() => {
       sendEm.delete()
        }, 5000);  // The sent embed by the bot is deleted after 5 seconds. This can be changed!
    })
}   
