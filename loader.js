const fs = require("fs")
const {tools}= require("./lib/tools")
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys');

const { BOT_EMOJI ,logo,PREFIX} = require("./config");

exports.load = (bot) => {
  bot.ev.on("messages.upsert", async (m) => {
 
    const msg = m.messages[0]
      const q = tools({ bot, msg });
    if (msg.key.fromMe) {
      return;
    }

      const textMessage = msg.message?.conversation.toLowerCase();
      console.log(textMessage)
      switch (textMessage) {
          case `${PREFIX}menu`:
              q.sendReact("📜")
              q.sendMenu()
              break;
          case `${PREFIX}restart`:
              q.sendSuccessReply("Restarting Bot Please Wait ...!")
              
              break;
          default:
             await bot.sendMessage(msg.key.remoteJid,{text:"*❌Error Please try again*"})
              q.sendReact("❌")             
      }
      
  });
};
