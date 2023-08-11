console.log(document);

const liCollection = document.getElementsByTagName('li');
for(const li of liCollection){
    // console.log(li.innerText);
}

const headings = document.getElementsByTagName('h1');
for(const head of headings){
    // console.log(head.innerHTML);
}
// console.log(liCollection);

const listItem = document.getElementsByClassName('list-item');
for(const list of listItem){
    console.log(list.innerText);
}

const headID = document.getElementById('heading-two');
console.log(headID.innerText="Heading Changed by JS");
