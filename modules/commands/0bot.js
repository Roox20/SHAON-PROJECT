module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  usePrefix: false,
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};



module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const prompt = args.join(" ");
    var name = await Users.getNameUser(event.senderID);
    var rndm = ["আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘", " কি গো সোনা আমাকে ডাকছ কেনো", "বার বার আমাকে ডাকস কেন😡","আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🥱","হুম জান তোমার অইখানে উম্মমাহ😷😘"," আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি","আমাকে এতো না ডেকে বস নয়নকে একটা গফ দে 🙄","jang hanga korba","jan bal falaba🙂","Yah This Bot creator : 𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱 -   link =>  https://www.facebook.com/Hey.Its.Me.Shaon.Ahmed","এত ডাকো কেনো 😑","ওই তুমি single না?🫵🤨","-চৌধুরী সাহেব আমি গরিব হতে পারি.😾🤭\nকিন্তু -বড়লোক না.🥹😫","suno ধৈর্য আর সহ্য জীবনের সব😊🌻💜","babu khuda lagse🥺","kisse","বেশি bby Bbby করলে leave নিবো কিন্তু😒😒" , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","আরে Bolo আমার জান ,কেমন আসো?😚 " , "𝗕𝗯𝘆 বলে অসম্মান করচ্ছিছ,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "𝗕𝗯𝘆 না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার জানু এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব r সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু 𝗯𝗯𝘆 𝗯𝗯𝘆 করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" ,"🐤🐤" ,"🐒🐒🐒","abal","😒😒","bye","mb ney bye","meww","naw message daw m.me/Hey.Its.Me.Shaon.Ahmed","বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈কাজ আসে😒" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "𝙁𝙖𝙧𝙢𝙖𝙬__😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "𝗕𝗯𝘆 না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আসি😒", "𝙏𝙢𝙧 𝙣𝙖𝙣𝙞 𝙧 𝗧𝙖𝙬𝙖😑🥺" , "amr JaNu lagbe,Tumi ki single aso?", "𝙏𝙪𝙢𝙖𝙧 𝙜𝙛 𝙣𝙖𝙞 ,𝙩𝙖𝙮 𝙖𝙢𝙠 𝙙𝙖𝙠𝙨𝙤?😂😂😂" , "𝘼𝙢𝙞 𝙠𝙖𝙡𝙖 𝙣𝙖 𝙨𝙪𝙣𝙨𝙚 ,𝙗𝙤𝙡𝙤 𝙠𝙞 𝙗𝙤𝙡𝙗𝙖 ","আমি তোমার সিনিয়র আপু ওকে 😼সম্মান দেও🙁","🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না🥲","𝗕𝗯𝘆 𝗕𝗯𝘆 না করে আমার বস মানে,,দীপ্ত ,দীপ্ত ও তো করতে পারো😑😒","আমাকে না দেকে একটু পড়তেও বসতে তো পারো🥺🥺","এই এই তোর পরীক্ষা কবে ? শুধু 𝗕𝗯𝘆 𝗯𝗯𝘆 𝗸𝗼𝗿𝗶𝘀","𝗕𝗯𝘆 𝗻𝗮 𝗯𝗼𝗹𝗲 𝗕𝗼𝘄 𝗯𝗼𝗹𝗼😘","𝗜 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂__😘😘","𝗜 𝗵𝗮𝘁𝗲 𝘆𝗼𝘂__😏😏","গোসল করে আয় যা😑😩","একটা bf খুঁজে দাও 🥺🥺","𝗕𝗯𝘆 বললে চাকরি থাকবে না","অ্যাসলামওয়ালিকুম","__কি এমন ভুল করছিলাম 😞","কেমন আসো","খাওয়া দাওয়া করসো 🙄","°কথা দেও আমাকে পটাবা...!!😌","তোরা যে হারে 𝗕𝗯𝘆 ডাকছিস আমি তো সত্যি বাচ্চা হয়ে যাবো_☹️😑","ফ্রেন্ড রিকোয়েস্ট দিলে ৫ টাকা দিবো 😗","বলেন sir__😌","বলেন ম্যাডাম__😌","আগে একটা গান বলো,☹️নাহলে কথা বলবো না_🥺","আমি অন্যের জিনিসের সাথে কথা বলি না__😏ওকে","🙂🙂🙂","এটায় দেখার বাকি সিলো_🙂🙂🙂","বলো ফুলটুশি_😘","Hey Handsome bolo_😁😁","হটাৎ আমাকে মনে পড়লো,,🙄","আচ্ছা শুনো_😒","এমবি কিনে দাও না_🥺🥺","আজ একটা ফোন নাই বলে রিপ্লাই দিতে পারলাম না_🙄","তোর বিয়ে হয় নি 𝗕𝗯𝘆 হইলো কিভাবে,,🙄","আজব তো__😒" , "𝗧𝘂𝗺𝗶 𝗧𝗼.𝗮𝗺𝗸𝗲.𝗶𝗴𝗻𝗼𝗿𝗲 𝗸𝗼𝗿𝗼_🙂","𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺"," 𝗧𝗼𝗿 𝘀𝗮𝘁𝗲 𝗸𝗼𝘁𝗵𝗮 𝗻𝗮𝗶,𝗧𝘂𝗶 𝗮𝗯𝗮𝗹😼","𝗝𝗮 𝘃𝗮𝗴 ,𝗖𝗵𝗶𝗽𝗮𝗕𝗮𝘇__😼","𝗕𝗯𝘆 𝗯𝗼𝗹𝗹𝗮 𝗽𝗮𝗽 𝗵𝗼𝗶𝗯𝗼,,😒😒","𝗕𝗯𝘆 𝗻𝗮 𝗯𝗼𝗹𝗲,,𝗚𝗿𝗼𝘂𝗽 𝗮 𝗰𝗮𝗹𝗹 𝗹𝗮𝗴𝗮","𝗧𝗮𝗿𝗽𝗼𝗿 𝗯𝗼𝗹𝗼_🙂","__বেশি বেবি বললে কামুর দিমু,,//🤭🤭","লুঙ্গি টা ধর মুতে আসি🙊🙉","ভুলে জাও আমাকে 😞😞","গরু উড়ে আকাশে সালামি পাঠান বিকাশে 💸💰","দেখা হলে কাঠগোলাপ দিও..🤗","আমি থাকলেও যা, না থাকলেও তা !❤️","😑😑😑","__ভালো হয়ে  যাও 😑😒","তুমি এত bby ডাকো টায় তুমি আবাল 🐸","তুমারে আমি রাইতে ভালোবাসি 🐸📌","o আচ্ছা ","৩২ তারিখ আমার বিয়ে","আজকে আমার mন ভালো নেই","আমার সোনার বাংলা ,তারপরে লাইন কি ?","বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "Bot বলে অসম্মান করছি,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒"];
    var msg = rndm[Math.floor(Math.random() * rndm.length)]
    if (!prompt) return api.sendMessage(`${name}, ${msg}`, event.threadID, event.messageID);
    const res = await axios.get(`https://noobs-api-d7bl.onrender.com/sim?type=ask&ask=${prompt}`);
  console.log(res.data)

    const response = res.data.answer;


        return api.sendMessage({
            body: response

        }, event.threadID, event.messageID);
}
