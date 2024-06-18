//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255738132447";
global.sudo = process.env.SUDO || "255738132447";
global.owner = process.env.OWNER_NUMBER || "255738132447";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||"VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NwMHp1emp6NVpYdlpMZ1NjZXZ5UWJuWFk2QVhhOGFJTmE4T0llZUxrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialZwaVUyUm55U1BIeHppU0lXWDRNRlpYenNPS3B2aEM1UTA4OHFrUm5Edz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQ3NLV2t6L25nNWlac2RrNFZhSjNSZWhVY1NDbmNCT3o2SHVLVHJYWEUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1YzVLNmU3VnROeC9BalBLTGNsakdLQlBsSis1bGkxa2g4UjJQZkYzT0Q4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldLaGNIZU9kbCtXNTdkYXZkVThDbW9ET3F2RjdDSlVMRWYrTFppOGxaM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ0SlhyOVRsemZ2L3VENmZxTHVEMUNabm1CWS9hNkdXS0dIMVNRM3ozekE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUovU1BSdlQ0KzJ1ak50ekVLY2E3T0FRZlJ5MlgxUEUvTGRRQXoyd21VQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2IxWWl2NVRMYnViYnFyWSttdm5sZnpLMmJxaVZVSkNNaEhrdTRXbWRIYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc3YzJBSzlQdDhBVVFKRjJOSWgwZTdzWDBJaktjZXUxc1JkNUtKN0xpUk5WdXB6ZlExZUlaaExXUml4TGpkM0tuT3pZdXhpZkd2enFsMjlWR2hOdWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6IkdBVnBxSkNFWkJ4YWxYZ1JEMnpYUnRHRTNudWIvVmphM0hKK2xkclpYdlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJUNzdFaUY3U3ItM1B5RkpSUW90ZlEiLCJwaG9uZUlkIjoiMjU1Y2I5NDYtNDIxMC00OWQwLTliOWEtYjFmOWM5Mzc3NGYwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ5R0pXaUpRMDBUVlF3NDJLNktkSVF3VUt5az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5REFIRHA1aEtyZkdZeFNFaEROWnhwNTB2d3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV01DWjIzRUsiLCJtZSI6eyJpZCI6IjI1NTczODEzMjQ0NzozNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGVrZzcwRkVQdWZ3N01HR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMURTVFNHUnFpTFI5QytzNTVNeEMrRjhSWk1pejlEYVpJL3p1K2tFV00xQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaTdwaGdYNWg0QWMwV3ZIQUo2ZzBjR1dJR1A2SGIvY01LVWNGakFxdGNJbFJZNS9DaHN5SmFMVnBHYlF1SklaZi8weTVVMU5DRE1mQTljSWtEWFJJQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImhKNC9xVEV0RzY0MWYwaDdHZUNlSEpBSnZUZGhraEsxczVwVmxZMG4xdkQyMEpFNVZLYU9VRE11RmtXZzlmUjBxQUMwNVg5MExQRGV1bllXQlVJZmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzM4MTMyNDQ3OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRRMGswaGthb2kwZlF2ck9lVE1RdmhmRVdUSXMvUTJtU1A4N3ZwQkZqTlEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg2NjkzMjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXRmIn0="
  
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝘨𝘳𝘦𝘢𝘵 𝘥𝘢𝘺 | 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "HUMBLETZ",
  ownername: process.env.OWNER_NAME || "HUMBLETZ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
