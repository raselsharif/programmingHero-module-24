// == way one ==
const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");
mainContainer.appendChild(section);

const mainHeading = document.createElement('h1');
mainHeading.innerText = "Country name";

section.appendChild(mainHeading);

const ul = document.createElement("ul");
section.appendChild(ul);

const appendLi = document.createElement("li");
appendLi.innerText = "Bangladesh";
ul.appendChild(appendLi);

const appendLi2 = document.createElement("li");
appendLi2.innerText = "Pakisthan";
ul.appendChild(appendLi2);

// === way two ===

const sectionTwo = document.createElement('section');
mainContainer.appendChild(sectionTwo);
sectionTwo.innerHTML = `
<h1>Country Name 2</h1>
    <ul>
        <li>Bangladesh</li>
        <li>Pakistan</li>
        <li>India</li>
        <li>japan</li>
        <li>Nepal</li>
        <li>Bhutan</li>
    </ul>
`
