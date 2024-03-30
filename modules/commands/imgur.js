module.exports.config = {
  name: "imgur",
  version: "30.0.10",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "imgur upload",
  usePrefix: true,
  commandCategory: "imgur",
  usages: "[reply to image]",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args }) => {
    const axios = global.nodemodule['axios'];
  const apis = await axios.get('https://raw.githubusercontent.com/shaonproject/Api/main/api.json')
  const n = apis.data.api
    const linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if (!linkanh)
        return api.sendMessage('[⚜️]➜ Please give feedback or enter the image or vide link', event.threadID, event.messageID);
    try {
      var tpk = `",`;
        const allPromise = (await Promise.all(event.messageReply.attachments.map(item => axios.get(`${n}imgurv2?link=${encodeURIComponent(item.url)}`)))).map(item => item.data.uploaded.image);
        return api.sendMessage(`"` + allPromise.join('"\n"') + tpk, event.threadID, event.messageID);
    }
    catch (e) {
        return api.sendMessage('[⚜️]➜ An error occurred while executing the command', event.threadID, event.messageID);
    }
};
