
const socket = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);


const countryList = [
    {"Value": 0, "name": 'France'},
    {"Value": 0, "name": 'England'},
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

countryList.forEach(country => {
    console.log(country.name);

    let countryContainer = document.querySelector('.countries');

    let nationality = document.createElement('div');
    nationality.classList.add(country.name);
    nationality.innerHTML = ''+ country.name +' : '+ country.Value ;


    countryContainer.appendChild(nationality);




});


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


            let updateCountries = document.querySelector('.'+country.name);
            updateCountries.innerHTML = ''+ country.name +' : '+ country.Value ;
        });



    }

});










