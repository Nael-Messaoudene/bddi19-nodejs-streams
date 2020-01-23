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
    "Germany": 0,

};


const countryFilter = new Transform({
    readableObjectMode: true,
    transform(chunk, encoding, callback) {

        // let test = countryList;
        //
        // console.log(test);

        // console.log(chunk);
    // console.log(countryList);
        // countryList.forEach( country =>{
        //
        //     if(country[data.user.location] ){
        //
        //         console.log('ça marche ');
        //
        //         this.push(data);
        //
        //     }
        //     // console.log(country);
        //
        // });

        callback();
    }
});

module.exports = countryFilter;
