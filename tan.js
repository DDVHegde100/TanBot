const Discord=require('discord.js'); 
const client=new Discord.Client();

const prefix= '!';




client.once('ready', ()=>{ 
    console.log('INDIAN GUYYY'); 
})

client.on('message', message=>{
if(!message.content.startsWith(prefix) || message.author.bot) return;
const args=message.content.slice(prefix.length).split(/ +/);
const command =args.shift().toLowerCase();

if(command === 'ping'){
    message.channel.send('PIGGLY PONG!');
} else if( command == 'hi'){
    message.channel.send('hi bye')
} else if( command == 'joke'){
    message.channel.send('Why did the Clydesdale give the pony a glass of water?')
}else if( command == 'why?'){
    message.channel.send('Because he was a little horse lol')
}else if( command == 'lol'){
    message.channel.send('<https://www.youtube.com/watch?v=xfr64zoBTAQ>')
}else if( command == 'funnysad'){
    message.channel.send('``FUNNYSAD IS A BUNNYDAD``')
}


});



client.login('ODEwNTM5MDk5Njg5MTg5NDE2.YClHXA.IR6nSCYUaAiGYqek4X5G__vB_xc');