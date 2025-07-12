const url = 'data/members.json';
const card = document.querySelector('#member-cards');

let allMembers = [];

// getMemberDirectory(url);
document.getElementById("all").addEventListener("click", getMemberDirectory(url));
document.getElementById("1").addEventListener("click", getMemberDirectory(url));
document.getElementById("2").addEventListener("click", getMemberDirectory(url));
document.getElementById("3").addEventListener("click", getMemberDirectory(url));

async function getMemberDirectory(filePath) {
    const response = await fetch(filePath);
    const data = await response.json();

    console.table(data.members);

    allMembers = data.members;
    displayMembers(allMembers);
}

function displayMembers (data) {
    let cardList = "";

    let cardButton = window.location.href.split("#")[1]
    allMembers.filter((data) => {

        switch (cardButton === "all") {
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            default:
                break;
        }}).map((data) => {
            cardList += `<div class="member-cards" id="member-cards">
            <h2 id="fullname">${data.fName} ${data.lName}</h2>
            <p id="phone">${data.phone}</p>
            <img src="${data.portrait}" alt="${data.fName} ${data.lName}" id="portrait">
        </div>`;
        })
    
    document.getElementById("member-cards").innerHTML = cardList;
    console.table(allMembers);
    // console.table(cardList);
    // console.log(cardList);
    // console.info(cardList);
}