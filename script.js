let name = prompt("Please enter your name");
let span = document.querySelector("[data-span]");
span.innerHTML = `${name}`;

let task = document.querySelector("[data-task]");
let btn = document.querySelector("[data-btn]");
let list = document.querySelector("[data-list]");
let todo = [];

btn.addEventListener('click', function() {
    todo.push(task.value);
    list.innerHTML = `<li><input type="checkbox"> ${todo.join('<br>')}   <button data-xbtn class="todo__btn">x</button></li>`;
    task.value = '';
    task.focus();    
} 
)

let xbtn = document.querySelector("[data-xbtn]");

xbtn.addEventListener('click', function() {
    todo.pull(task.value);
}
)



