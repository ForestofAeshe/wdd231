const dataPath = 'data/members.json';
const card = document.querySelector('#member-cards');

let allMembers = [];



// document.getElementById('#all').addEventListener("load", getMemberDirectory(dataPath));
// document.getElementById("#all").addEventListener("click", getMemberDirectory(dataPath));
// document.getElementById("#1").addEventListener("click", getMemberDirectory(dataPath));
// document.getElementById("#2").addEventListener("click", getMemberDirectory(dataPath));
// document.getElementById("#3").addEventListener("click", getMemberDirectory(dataPath));

async function getMemberDirectory(filePath) {
    const response = await fetch(filePath);
    const data = await response.json();
    // allMembers = [];

    console.table(data.members);

    allMembers = data.members;
    displayMembers(data.allMembers);
}

getMemberDirectory(dataPath);

// function displayMembers (data) {
//     let cardList = "";

//     let cardButton = window.location.href.split("#")[1]
//     allMembers.filter((data) => {

//         switch (cardButton === "#all") {
//             case "#1":
//                 data.membershipLevel === 1;
//                 break;
//             case "#2":
//                 data.membershipLevel === 2;
//                 break;
//             case "#3":
//                 data.membershipLevel === 3;
//                 break;
//             default:
//                 break;

//         }}).map((data) => {
//             cardList += `<div class="member-cards" id="member-cards">
//             <h2 id="fullname">${data.fName} ${data.lName}</h2>
//             <p id="phone">${data.phone}</p>
//             <img src="${data.portrait}" alt="${data.fName} ${data.lName}" id="portrait">
//         </div>`;
//         })
    
//     document.getElementById("member-cards").innerHTML = cardList;

//     }

const displayMembers = (members) => {
    card.innerHTML = ``;
    members.forEach(member => {
        const memberDiv = document.createElement('section');
        memberDiv.allMembers.add('member-card');
        memberDiv.innerHTML = `
            <h2 id="fullname">${member.fName} ${member.lName}</h2>
            <p id="phone">${member.phone}</p>
            <img src="${member.portrait}" alt="${member.fName} ${member.lName}" id="portrait">`;
        
        card.appendChild(memberDiv);
    });   // document.getElementById("member-cards").allMembers.add('member-card');
        
    
}