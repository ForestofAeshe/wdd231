// let orgInput = document.getElementById("organization-title")

function main() {
    document.getElementById("myForm").addEventListener('submit',function(event) {
        event.preventDefault();

        const fname      = document.getElementById('fname').value;
        const lname      = document.getElementById('lname').value;
        const jobtitle   = document.getElementById('organization-title').value;
        const email      = document.getElementById('email').value;
        const phone      = document.getElementById('phone').value;
        const orgname    = document.getElementById('org-name').value;
        const membertier = document.getElementById('membership-level-dropdown').value;
        orgdesc = document.getElementById('org-desc').value;    
        const fullname   = fname + " " + lname;

        const thankYouUrl = `thankyou.html?name=${encodeURIComponent(fullname)}&email=${encodeURIComponent(email)}`
        window.location.href = thankYouUrl;
        console.log(fullname);
    })

}






main()