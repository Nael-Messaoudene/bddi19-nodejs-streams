const { Transform } = require("stream");



const countryFilter = new Transform({
    readableObjectMode: true,
    transform(chunk, encoding, callback) {

        // let data = chunk.toString();
        //
        // console.log(data);
        // let test = countryList;
        //
        // console.log(chunk.toString());


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
