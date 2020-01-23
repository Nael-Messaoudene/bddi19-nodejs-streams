const { Transform } = require("stream");

const parser = new Transform({
  readableObjectMode: true,
  transform(chunk, encoding, callback) {
    let data = null;

    const countryList = [
      "France",
      "England",
      "United Kingdom",
      "Portugal",
      "Belgium",
      "Belgique",
      "Spain",
      "Suisse",
      "Switzerland",
      "Netherlands",
      "Nigeria",
      "USA",
      "Italia",
      "India",
      "Brasil",
      "España",
      "Malta",
      "Germany"

    ];


    try {
      data = JSON.parse(chunk);
      console.log(data.user.location);

    } catch (error) {
      console.error("error parsing into json: ", chunk);
      this.emit("error", error);
    }

    // console.log(data);

    countryList.forEach( country =>{

      if(country ==  data.user.location){

        console.log('ça marche ');

        this.push(data);

      }
      // console.log(country);

    });

    callback();
  }
});

module.exports = parser;
