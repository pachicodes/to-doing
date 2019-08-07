let name = prompt("Please enter your name");
let span = document.querySelector("[data-span]");
span.innerHTML = `${name}`;

let task = document.querySelector("[data-task]");
let btn = document.querySelector("[data-btn]");
let list = document.querySelector("[data-list]");
let todo = [];

btn.addEventListener('click', function() {
    todo.push(task.value);
    list.innerHTML += `<li>${todo.join('<br>')}</li>`;
    } 
)



