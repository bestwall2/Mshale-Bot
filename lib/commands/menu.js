const {BOT_NAME,PREFIX } = require("./../../config.js"); 
  
 //exports.waitMessage = "Carregando dados..."; 
  
 exports.menuMessage = () => { 
 const date = new Date(); 
  
 return `╭━━⪩ BEM VINDO! ⪨━━ 
 ▢ 
 ▢ • ${BOT_NAME} 
 ▢ • Data: ${date.toLocaleDateString("pt-br")} 
 ▢ • Hora: ${date.toLocaleTimeString("pt-br")} 
 ▢ • Prefix: ${PREFIX} 
 ▢ 
 ╰━━─「🪐」─━━ 
  
 ╭━━⪩ MENU ⪨━━ 
 ▢ 
 ▢ • ${PREFIX}cep 
 ▢ • ${PREFIX}gpt 
 ▢ • ${PREFIX}ping 
 ▢ • ${PREFIX}sticker 
 ▢ • ${PREFIX}to-image 
 ▢ 
 ╰━━─「🍁Mr Pain🍁」─━━`; 
 };