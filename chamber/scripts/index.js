// weather api

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon'); 
const captionDesc = document.querySelector('figcaption'); 

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.37&lon=111.79&units=imperial&appid=a055ebbdb26fcd89a865ee4416154bd5';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute(`SRC`,iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.textContent = `${desc}`;
}


// random index

function getRandomInt(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInteger = getRandomInt(4,6);

//get card

const memberFile = "data/members.json";
const cards = document.querySelector('#member-cards');

let allMembers = [];

function handleLoad() {
    getSpotlight(memberFile);
}

document.addEventListener('DOMContentLoaded', handleLoad);

async function getSpotlight(memberFile) {
    const response = await fetch(memberFile);
    const data = await response.json();
    console.table(data.members);
    allMembers = data.members;
    displayMembers(data.members);
}

function displayMembers (data) {
    let cardList = "";

    let index = randomInteger;
    console.log(index);

    allMembers
    .filter((data) => 
        {
        
            return data;

            // if (index === "0") {
            //     return data.membershipLevel[0];
            // } else if (index === "1") {
            //     return data.membershipLevel[1];
            // } else if (index === "2") {
            //     return data.membershipLevel[2];
            // }else if (index === "3") {
            //     return data.membershipLevel[3];
            // }else if (index === "4") {
            //     return data.membershipLevel[4];
            // }else if (index === "5") {
            //     return data.membershipLevel[5];
            // }else if (index === "6") {
            //     return data.membershipLevel[6];
            // } else {
            //     return data;}
        
        }).map((data) => {
            cardList += `<div class="individual-cards" id="individual-cards">
            <h2 id="fullname">${data.fName} ${data.lName}</h2>
            <p id="phone">${data.phone}</p>
            <p id="tier"> Tier ${data.membershipLevel} Member </p>
        </div>`;
        })
    
    document.getElementById("member-cards").innerHTML = cardList;

    }