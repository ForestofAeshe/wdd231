// weather api

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon'); 
const captionDesc = document.querySelector('figcaption'); 

const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=40.37&lon=111.79&units=imperial&appid=a055ebbdb26fcd89a865ee4416154bd5';

async function fetchWeather() {
    try {
        const response = await fetch(urlWeather);
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

fetchWeather();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute(`SRC`,iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.textContent = `${desc}`;
}

// forecast api

const forecast = document.querySelector('.forecast')
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.37&lon=111.79&units=imperial&appid=a055ebbdb26fcd89a865ee4416154bd5'

async function fetchForecast() {
    try{
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
    
fetchForecast();

// displayForecast();

function displayForecast(data) {
    let forecastCard = "";
    //${data.main.temp}&deg;F
    let icon1 = getWeatherIconOne(data);
    let icon2 = getWeatherIconTwo(data);
    let icon3 = getWeatherIconThree(data);
    forecastCard += ``;
    document.getElementById("forecast").innerHTML = forecastCard;

};

function getWeatherIconOne(data) {
    let dummyData = data;
    let index = 0;
    const srcIcon = `https://openweathermap.org/img/wn${data.list[index].weather.icon}@2x.png`
    let desc = data.list[index].weather.description;
    iconWeather.setAttribute(`SRC`,srcIcon);
    iconWeather.setAttribute('alt',desc);
    captionDesc.textContent = `${desc}`;
};

function getWeatherIconTwo(data) {
    let dummyData = data;
    let index = 1;
    const iconsrc = `https://openweathermap.org/img/wn${data.list[index].weather.icon}@2x.png`
    let desc = data.list[index].weather.description;
    weatherIcon.setAttribute(`SRC`,iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.textContent = `${desc}`;
};

function getWeatherIconThree(data) {
    let dummyData = data;
    let index = 2;
    const iconsrc = `https://openweathermap.org/img/wn${data.list[index].weather.icon}@2x.png`
    let desc = data.list[index].weather.description;
    weatherIcon.setAttribute(`SRC`,iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.textContent = `${desc}`;
};


function getDayName(data, index) {
    const dummyData = data;
    const today = new Date('2025-08-28 04:00:25');
    console.log(today);
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
handleLoad();
// document.addEventListener('DOMContentLoaded', handleLoad());

async function getSpotlight(memberFile) {
    const response = await fetch(memberFile);
    const data = await response.json();
    console.table(data.members);
    allMembers = data.members;
    displayMembers(data.members);
}

    function displayMembers () {
        let cardList = "";
        let index = randomInteger;
        let randomMember = [];
        randomMember = allMembers[randomInteger];
        console.log(randomMember);
        

        cardList += `<div class="individual-cards" id="individual-cards">
                <h2 id="fullname">${randomMember.fName} ${randomMember.lName}</h2>
                <p id="phone">${randomMember.phone}</p>
                <p id="tier"> Tier ${randomMember.membershipLevel} Member </p>
            </div>`

        document.getElementById("member-cards").innerHTML = cardList;
    }

