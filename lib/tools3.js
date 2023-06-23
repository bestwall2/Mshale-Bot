const { BOT_EMOJI ,logo,prefix} = require("./../../config");
const {menuMessage} = require("./../menu.js")
const fs = require("fs")
exports.tools = ({ bot, msg }) => { 

  const remoteJid = msg?.key?.remoteJid;
   const prefix = prefix
  const commandName = "menu"
  const args = ""
   const sendText = async (text) => 
     await bot.sendMessage(remoteJid, { text: `${BOT_EMOJI} ${text}` }); 
  
   const sendReply = async (text) => 
     await bot.sendMessage( 
       remoteJid, 
       { text: `${BOT_EMOJI} ${text}` }, 
       { quoted: msg } 
     ); 
  
   const sendReact = async (emoji) => 
     await bot.sendMessage(remoteJid, { 
       react: { 
         text: emoji, 
         key: msg.key, 
       }, 
     }); 
  
   const sendSuccessReact = async () => await sendReact("✅"); 
   const sendWaitReact = async () => await sendReact("⏳"); 
   const sendWarningReact = async () => await sendReact("⚠️"); 
   const sendErrorReact = async () => await sendReact("❌"); 
  
   const sendSuccessReply = async (text) => { 
     await sendSuccessReact(); 
     return await sendReply(` ${text}`); 
   }; 
  
   const sendWaitReply = async (text) => { 
     await sendWaitReact(); 
     return await sendReply("⏳please wait moment ...!"); 
   }; 
  
   const sendWarningReply = async (text) => { 
     await sendWarningReact(); 
     return await sendReply(`⚠️  ${text}`); 
   }; 
  
   const sendErrorReply = async (text) => { 
     await sendErrorReact(); 
     return await sendReply(`❌ Erro! ${text}`); 
   }; 
  
   const sendStickerFromFile = async (file) => 
     await bot.sendMessage(remoteJid, { 
       sticker: { url: file }, 
     }); 
  
   const sendImageFile = async (file) => 
     await bot.sendMessage(remoteJid, { 
       image: file 
     }); 
  const sendImageUrl = async (url) => 
     await bot.sendMessage(remoteJid, { 
       image: { url: url }, 
     }); 
   const sendMenu = async () => {
   const msg_img = {
    image:logo,caption:menuMessage(),quoted:msg,
    footer: '©mr_pain',
    headerType: 2
    }
    await bot.sendMessage(remoteJid,msg_img);
   }
   const sendFile = async (file_data,type,fileName) =>{
    await bot.sendMessage(remoteJid,{
        document:file_data,
        mimetype:`application/${type}`,
        fileName: fileName,
    });
    }
    const sendAudio = async (url) => {
    await bot.sendMessage(remoteJid,{
          audio: {url:url},
          mimetype: 'audio/mp4'},
          { quoted: m })
    }
    const sendVideo = async (url,text) => {
    bot.sendMessage(remoteJid,
         {
             video:{url:url},
             caption:text,
             gifPlayback:false
             },{ quoted:m})
             }
    return { 
     bot, 
     remoteJid, 
     prefix, 
     commandName, 
     args, 
     msg, 
     sendText, 
     sendReply, 
     sendStickerFromFile, 
     sendImageFile, 
     sendReact, 
     sendSuccessReact, 
     sendWaitReact, 
     sendWarningReact, 
     sendErrorReply, 
     sendSuccessReply, 
     sendWaitReply, 
     sendWarningReply, 
     sendErrorReact, 
   sendMenu,
   sendImageUrl,
   sendFile,
   sendAudio,
   sendVideo
   }; 
 };