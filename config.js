const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254706806231";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_32_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQwLFxuICAgICAgICA3MyxcbiAgICAgICAgNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDU4LFxuICAgICAgICA1MixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NCxcbiAgICAgICAgODksXG4gICAgICAgIDIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuTzhhZDd4cmRFSjlDajU3VEtvNGFIVHFpdmtEU1UrUitjQ1VTTU1nQXVBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPRjlFbGd0UVFZYVRwN0tWRUVocF9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2Yzc5OWVmLTM0ZGEtNGQxYS05NzA1LWMxY2RmNjM1YjdkNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICAyNDgsXG4gICAgICAxNTUsXG4gICAgICAxMzgsXG4gICAgICAyMjcsXG4gICAgICAxNDQsXG4gICAgICA5MSxcbiAgICAgIDEzNixcbiAgICAgIDQ5LFxuICAgICAgMTQzLFxuICAgICAgNTksXG4gICAgICA1MixcbiAgICAgIDg3LFxuICAgICAgMyxcbiAgICAgIDkwLFxuICAgICAgMjIsXG4gICAgICA2MCxcbiAgICAgIDMxLFxuICAgICAgMjQ0LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDE3NixcbiAgICAgIDE1OCxcbiAgICAgIDY4LFxuICAgICAgNTQsXG4gICAgICA4LFxuICAgICAgMjExLFxuICAgICAgMjAwLFxuICAgICAgMTc0LFxuICAgICAgMjQwLFxuICAgICAgMTU4LFxuICAgICAgNTgsXG4gICAgICAxOTIsXG4gICAgICA3OCxcbiAgICAgIDI0MSxcbiAgICAgIDE2LFxuICAgICAgMTM2LFxuICAgICAgOTgsXG4gICAgICA3OSxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHN0dTV0JFOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA2ODA2MjMxOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDM2OTI5MTIzOTg0NjQ6MTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiS2luZ0NvZGlu8J+lh/CfkrtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbnl0T01GRU5PR21MTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNhTlRuRml0Ymg3R2xWbzZDVEY4c2Z2ejV3SW42bzl6OHpkMVF3TTVYbDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVGtLUkV0b2NFUDNNT3lHa2ZjWlRKQ28xcXNEdCtrQXBTM1FNcnE3aWpyRk9yOFJGUTVhVHFHbWJiMFdZbDBPa01xZ3Y5cG9Gc3VsdEgrcHphb0tUQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMGtxVk93czZRZEFNRmQ1clIvdEg3cnMyYTJUK3BsSk84dWNRTWNiYmcyWExXb3BvU3RwOWVzbWU4T21CMkduQXNzKzdmZ0dzTjg1NXRUOWpGY28yRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA2ODA2MjMxOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3OTYxNTU5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
