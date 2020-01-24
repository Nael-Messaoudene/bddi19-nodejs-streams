const { Transform } = require("stream");



const countryList = {
  "France": 0,
  "England": 0,
  "United Kingdom": 0,
  "Portugal": 0,
  "Belgium": 0,
  "Belgique": 0,
  "Spain": 0,
  "Suisse": 0,
  "Switzerland": 0,
  "Netherlands": 0,
  "Nigeria": 0,
  "USA": 0,
  "Italia": 0,
  "India": 0,
  "Brasil": 0,
  "Malta": 0,
  "Germany": 0

};

const regex = new RegExp(/(France)|(United Kingdom)|(England)|(Portugal)|(Belgium)|(Belgique)|(Spain)|(Suisse)|(Switzerland)|(Netherland)|(Nigeria)|(USA)|(Italia)|(India)|(Brasil)|(Malta)|(Germany)/gmi);




const parser = new Transform({
  readableObjectMode: true,
  transform(chunk, encoding, callback) {
    let data = null;

    try {
      data = JSON.parse(chunk);
      console.log(data.user.location);


    } catch (error) {
      console.error("error parsing into json: ", chunk);
      this.emit("error", error);
    }


    // const found = countryList.match(regex);
    // if (found){
    //   console.log("ça match",found);
    // }


    // var matches = countryList.filter(function(pattern) {
    //   return new RegExp(pattern).test(regex);
    // });

    // console.log(countryList);


    //
    // for (let [key, value] of Object.entries(countryList)) {
    //
    //   if (key.match(regex)){
    //     console.log(key, '------> match');
    //
    //   }
    //
    //   // console.log(key);
    //   // console.log(`${key}: ${value}`);
    // }


  // console.log(Object.keys(countryList));

    // let countries = Object.keys(countryList);
    //
    // countries.forEach((country, index) => {
    //
    //   console.log(country, index);
    //
    //
    //
    // });



    if (regex.test(data.user.location)){



      this.push(data);
    }


    // Object.keys(countryList).map(function(objectKey, index) {
    //
    //
    //
    //   console.log(objectKey," === object");
    //   var value = countryList[objectKey];
    //
    //   console.log(index,"---> index");
    //
    //
    //   // if (objectKey[index].match(regex)){
    //   //   console.log('ça matche');
    //   // }
    //
    // });
    //
    //
    //








    // const regex = /(France)|(United Kingdom)|(England)|(Portugal)|(Belgium)|(Belgique)|(Spain)|(Suisse)|(Switzerland)|(Netherland)|(Nigeria)|(USA)|(Italia)|(India)|(Brasil)|(Malta)|(Germany)/gmi;
    // let m;
    //
    // while ((m = regex.exec(str)) !== null) {
    //   // // This is necessary to avoid infinite loops with zero-width matches
    //   // if (m.index === regex.lastIndex) {
    //   //   regex.lastIndex++;
    //   // }
    //
    //   // The result can be accessed through the `m`-variable.
    //   m.forEach((match, groupIndex) => {
    //
    //     console.log(`Found match, group ${groupIndex}: ${match}`);
    //   });
    // }
    //








    // console.log(data);

    // countryList.forEach( country =>{
    //   console.log(country);
    // });
    //
    //   if(country[data.user.location] ){
    //
    //     console.log('ça marche ');



      // }
      // console.log(country);

    // });


    callback();
  }
});

module.exports = parser;
