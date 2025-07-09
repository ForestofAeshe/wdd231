const navbtn = document.querySelector("#hamburger-button");
const navLinks = document.querySelector("#navigation-bar");


navbtn.addEventListener('click', () => {
    navbtn.classList.toggle('show');
    navLinks.classList.toggle('show');
});
