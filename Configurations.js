require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "918101187835";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://Ilucizr:Ilucizr@cluster0.w10fj6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.sessionId = process.env.SESSION_ID || "LuciZR";
global.prefa = process.env.PREFIX || ",";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `+918293838182`;
global.author = process.env.AUTHOR || "𝙇𝙪𝙘𝙞𝙕𝙍";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "Put your openai API key here";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
