
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

    let tweetLocation = tweetdata.user.location;

    if(tweetLocation.indexOf(',') >= 0){
        tweetLocation = tweetLocation.replace(/, /g, '|' );


        const tweetRegex = new RegExp(`\\b${tweetLocation}\\b`, 'gmi') ;


        console.log(tweetdata);

        let node = document.createElement("LI");
        let textnode = document.createTextNode(tweetdata.text);
        node.appendChild(textnode);
        document.querySelector(".data").appendChild(node);

        console.log(tweetLocation);

        socket.send("message received!");


        countryList.forEach((country, i) => {

            console.log(country);

            console.log(countryList[i].name);

            if( (tweetRegex.test(countryList[i].name)) ){
                countryList[i].Value++;
            }



        })



    }






});










