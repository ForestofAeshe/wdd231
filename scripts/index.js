const navbtn = document.querySelector("#hamburger-button");
const navLinks = document.querySelector("#navigation-bar");


navbtn.addEventListener('click', () => {
    navbtn.classList.toggle('show');
    navLinks.classList.toggle('show');
});
// ^^Menu of Hamburger

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
// ^^Course List Array

document.getElementById("all-courses").addEventListener("load", myFunction());
document.getElementById("all-courses").addEventListener("click", myFunction());
document.getElementById("wdd-courses").addEventListener("click", myFunction());
document.getElementById("cse-courses").addEventListener("click", myFunction());

function myFunction() {

    let classList  = "";

    let courseButton = window.location.href.split("#")[1]
    courses
    .filter((data) =>
    {if (courseButton === "all") {
            return data.subject;
        } else if (courseButton === "WDD") {
            return data.subject == "WDD";
        } else if (courseButton === "CSE") {
            return data.subject == "CSE";
        }}).map((data) =>
    {
        classList += `<div id="course-list">
            <h2 class="course-name">${data.subject}  ${data.number}</h2>
            <div class="course-complete">${data.completed}</div>
            `
    })
    
    document.getElementById("course-list").innerHTML = classList;
}

