module.exports.config = {
  name: "videomix",
  version: "11.9.7",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "random love story video",
  usePrefix: true,
  commandCategory: "video",
  usages: "random",
  cooldowns: 30,
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var shaon = ["https://noobs-api-d7bl.onrender.com/video/status",
"https://noobs-api-d7bl.onrender.com/video/sad",
"https://noobs-api-d7bl.onrender.com/video/baby",
"https://noobs-api-d7bl.onrender.com/video/love",
"https://noobs-api-d7bl.onrender.com/video/ff",
"https://noobs-api-d7bl.onrender.com/video/shairi",
"https://noobs-api-d7bl.onrender.com/video/humaiyun",
"https://noobs-api-d7bl.onrender.com/video/islam",
"https://noobs-api-d7bl.onrender.com/video/anime",
"https://noobs-api-d7bl.onrender.com/video/short",
"https://noobs-api-d7bl.onrender.com/video/event",
"https://noobs-api-d7bl.onrender.com/video/prefix",
"https://noobs-api-d7bl.onrender.com/video/cpl",
"https://noobs-api-d7bl.onrender.com/video/time",
"https://noobs-api-d7bl.onrender.com/video/lofi",
"https://noobs-api-d7bl.onrender.com/video/happy"
]
  var shaon1 = shaon[Math.floor(Math.random() * shaon.length)]
  axios.get(shaon1).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let shaon2 = res.data.shaon;
  let callback = function () {
          api.sendMessage({
            body: `𝐒𝐏𝐀𝐘𝐒𝐇𝐄𝐀𝐋 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐈𝐗 
${shaon2} 𝚃𝙾𝚃𝙰𝙻 𝚅𝙸𝙳𝙴𝙾:${count}...🎬\n\n｢𝐒𝐇𝐀𝐎𝐍 𝐏𝐑𝐎𝐉𝐄𝐂𝐓｣`,
            attachment: fs.createReadStream(__dirname + `/cache/Shaoon.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/Shaoon.mp4`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/Shaoon.mp4`)).on("close", callback);
      })
}
