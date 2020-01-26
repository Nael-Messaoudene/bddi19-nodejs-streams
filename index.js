require("dotenv").config();

const { wsServer, server } = require("./lib/server");
const twitterStream = require("./lib/twitter");


twitterStream.on("error", error => {
  console.error(error);
})

wsServer.on("connection", client => {
  console.log("new client connection");

  client.on("message", message => {
    console.log("message from client: ", message);

    if (message === "stop") {
      twitterStream.pause();
      console.log('pause feed');
    }
    if (message === "restart") {
      twitterStream.resume();
      console.log("resume feed")
    }

  });

  client.send("stream : Football");


  twitterStream.on("data", tweet => {

    client.send(JSON.stringify(tweet));

  });




});


server.listen(process.env.PORT);
