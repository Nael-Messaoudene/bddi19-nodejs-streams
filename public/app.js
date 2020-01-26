
const socket = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);


const countryList = [
    {"Value": 0, "name": 'France'},
    {"Value": 0, "name": 'England'},
    {"Value": 0, "name": 'United Kingdom'},
    {"Value": 0, "name": 'Portugal'},
    {"Value": 0, "name": 'Belgium'},
    {"Value": 0, "name": 'Velgique'},
    {"Value": 0, "name": 'Spain'},
    {"Value": 0, "name": 'Suisse'},
    {"Value": 0, "name": 'Switzerland'},
    {"Value": 0, "name": 'Netherlands'},
    {"Value": 0, "name": 'Nigeria'},
    {"Value": 0, "name": 'USA'},
    {"Value": 0, "name": 'Italia'},
    {"Value": 0, "name": 'India'},
    {"Value": 0, "name": 'Brasil'},
    {"Value": 0, "name": 'Malta'},
    {"Value": 0, "name": 'Germany'}
    ];

const regex = new RegExp(/(France)|(United Kingdom)|(England)|(Portugal)|(Belgium)|(Belgique)|(Spain)|(Suisse)|(Switzerland)|(Netherland)|(Nigeria)|(USA)|(Italia)|(India)|(Brasil)|(Malta)|(Germany)/gmi);



socket.addEventListener('open', event => {
    console.log("connected", event);
});

socket.addEventListener('message', event => {


    let tweetdata = JSON.parse(event.data);

    const tweetRegex = new RegExp(  `${tweetdata.user.location}`  , 'gmi') ;

    console.log(tweetdata);

    let node = document.createElement("LI");
    let textnode = document.createTextNode(tweetdata.text);
    node.appendChild(textnode);
    document.querySelector(".data").appendChild(node);

    console.log(tweetdata.user.location);

    socket.send("message received!");








    console.log(countryList);


    countryList.forEach((country, i) => {

        // console.log(countryList[i]);


        if( (tweetRegex.test(countryList[i].name)) ){

            console.log('YEEEEEEEEEAH BIATCH');

        }

        // console.log(regex.test(tweetdata.user.location), countryList[i].name);

        // if (countryList[i].name === tweetdata.user.location) {
        //     console.log('INCHALLUX SA MARCHE');
        //     countryList[i].Value++;
        // }


    })
        // console.log(obj);




        // obj.forEach((country, i) => {
        //     // console.log(country, i);
        //
        //
        //     if (regex.test(country)) {
        //         console.log("Matching");
        //     }
        //
        //
        // })


    //         console.log(objectKey," === object");
    // var value = countryList[objectKey]++;
    //
    // console.log(value, '----> value increment', objectKey);
    //
    // console.log(index,"---> index");







});










