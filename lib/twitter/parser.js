const { Transform } = require("stream");


const regex = new RegExp(/(France)|(United Kingdom)|(England)|(Portugal)|(Belgium)|(Belgique)|(Spain)|(Suisse)|(Switzerland)|(Netherland)|(Nigeria)|(USA)|(Italia)|(India)|(Brasil)|(Malta)|(Germany)/gmi);

const parser = new Transform({
  readableObjectMode: true,
  transform(chunk, encoding, callback) {
    let data = null;

    try {
      data = JSON.parse(chunk);
    }
    catch (error) {
      console.error("error parsing into json: ", chunk);
      this.emit("error", error);
    }


    if (regex.test(data.user.location)){
      this.push(data);
    }


    callback();
  }
});

module.exports = parser;
