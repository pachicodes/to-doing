let name = prompt("Please enter your name");
let span = document.querySelector("[data-span]");
span.innerHTML = `${name}`;

let task = document.querySelector("[data-task]");
let btn = document.querySelector("[data-btn]");
let list = document.querySelector("[data-list]");

btn.addEventListener('click', function() {
    let value = task.value;
    list.insertAdjacentHTML('afterbegin', `<li><input data-check type="checkbox"> ${value} <button data-xbtn class="todo__btn">x</button></li>`);
    let xbtn = Array.from(documen.querySelector('[data-xbtn]'));
    xbtn.map(button => {
        button.addEventListener('click', function(event) {
            event.target.parentNode.remove()
        })
    });
    
    task.value = '';
    task.focus();    
} 
)

let check = document.querySelector("[data-check]");
let xbtn = document.querySelector("[data-xbtn]");

/*
check.addEventListener('click', function() {
    //create function that will cross item

}
)

xbtn.addEventListener('click', function() {
    //create function that will delete item
})

*/

