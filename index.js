const { spawn } = require("child_process");
const express = require("express");
const app = express();
const logger = require("./utils/log.js");
const path = require('path');
const PORT = process.env.PORT || 3000;
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/includes/login/cover/Shaon.html'));
});

startBot(0);

async function startBot(index) {
  logger(`Starting child process ${index}`, "STARTER");
  const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      CHILD_INDEX: index,
    },
  });

  app.listen(PORT, () => {
    logger.loader(`Bot is running on port: ${PORT}`);
  });

  child.on("close", async (codeExit) => {
    if (codeExit !== 0) {
      await startBot(index);
      return;
    }
  });

  child.on("error", (error) => {
    logger(`An error occurred: ${JSON.stringify(error)}`, "START");
  });
}

// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE || THIZ FILE WAS MODIFIED BY ME(@YanMaglinte) - DO NOT STEAL MY CREDITS (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
