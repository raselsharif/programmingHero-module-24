const sections = document.querySelectorAll("section");
for (const section of sections) {
    section.style.border = "1px solid red";
    section.style.backgroundColor = "teal"
    section.style.padding = "10px"
    section.style.marginBottom = "10px"
}

const heading = document.getElementsByClassName("headingTwo");
for (const headings of heading) {
    headings.style.backgroundColor = "red"
    headings.style.color = "white";
    headings.style.padding = "15px";
}
// const headingId = document.getElementById("headingTwo");

// headingId.style.backgroundColor = 'red';
// headingId.style.color = "white";
// headingId.style.padding = "15px";

const li =document.createElement("li");

const child = document.getElementById("childList");

child.appendChild(li).innerText="this is from js";