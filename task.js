"use strict";
let input = document.getElementById('input');
let add = document.getElementById('add');
let tasklist = document.getElementById('tasklist');
let tasks = [];
add.addEventListener('click', addTask);
function addTask() {
    let task = input.value;
    tasks.push(task);
    input.value = '';
    render();
}
function render() {
    tasklist.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let p = document.createElement('p');
        p.textContent = tasks[i];
        tasklist.appendChild(p);
    }
}
