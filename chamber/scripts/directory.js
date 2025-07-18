const dataUrl = 'data/members.json';
const card = document.querySelector('#member-cards');

let allMembers = [];

getMemberDirectory(dataUrl);

document.getElementById('#all').addEventListener("load", getMemberDirectory(dataUrl));
document.getElementById("#all").addEventListener("click", getMemberDirectory(dataUrl));
document.getElementById("#1").addEventListener("click", getMemberDirectory(dataUrl));
document.getElementById("#2").addEventListener("click", getMemberDirectory(dataUrl));
document.getElementById("#3").addEventListener("click", getMemberDirectory(dataUrl));

async function getMemberDirectory(filePath) {
    const response = await fetch(filePath);
    const data = await response.json();
    let allMembers = [];

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
                data.membershipLevel === 1;
                break;
            case "2":
                data.membershipLevel === 2;
                break;
            case "3":
                data.membershipLevel === 3;
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

    }