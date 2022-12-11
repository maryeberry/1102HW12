let task = [];
const list = document.querySelector('ul');

document.querySelector('#list').addEventListener("submit", function(event) {
    console.log("Submitting the form");
    event.preventDefault();

    task = document.querySelector("#task").value;
    //console.log(task);
    let template = `
    <li>${task}</li>
    `;
    const text = document.createElement("ul");
    text.innerHTML = template;
    list.appendChild(text);
})