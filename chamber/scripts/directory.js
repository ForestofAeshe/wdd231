const url = 'data/members.json';
const cards = document.querySelector('#member-cards');

let allMembers = [];



// document.getElementById('#all').addEventListener("load",  getMemberData(url));
// document.getElementById("#all").addEventListener("click", getMemberData(url));
// document.getElementById("#1").addEventListener("click",   getMemberData(url));
// document.getElementById("#2").addEventListener("click",   getMemberData(url));
// document.getElementById("#3").addEventListener("click",   getMemberData(url));

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    allMembers = data.members;
    displayMembers(data.members);
}

getMemberData(url);

function displayMembers (data) {
    let cardList = "";

    let cardButton = window.location.href.split("#")[1]
    allMembers
    .filter((data) => 
        {
            if (cardButton === "1") {
              return data.membershipLevel === 1;
            } else if (cardButton === "2") {
               return data.membershipLevel === 2;
            } else if (cardButton === "3") {
              return data.membershipLevel === 3;
            } else {
                return data;}
        
        }).map((data) => {
            cardList += `<div class="member-cards" id="member-cards">
            <h2 id="fullname">${data.fName} ${data.lName}</h2>
            <p id="phone">${data.phone}</p>
            <img src="${data.portrait}" alt="${data.fName} ${data.lName}" id="portrait">
        </div>`;
        })
    
    document.getElementById("member-cards").innerHTML = cardList;

    }

// const displayMembers = (members) => {
//     cards.innerHTML = ``;
//     members.forEach(member => {
//         const memberDiv = document.createElement('section');

//         memberDiv.innerHTML = `
//             <h2 id="fullname">${member.fName} ${member.lName}</h2>
//             <p id="phone">${member.phone}</p>
//             <img src="${member.portrait}" alt="${member.fName} ${member.lName}" id="portrait">`;
        
//         cards.appendChild(memberDiv);
//     });   
    
// }