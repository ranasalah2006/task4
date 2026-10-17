let input = document.getElementById('input') as HTMLInputElement;
let add = document.getElementById('add') as HTMLButtonElement;
let tasklist = document.getElementById('tasklist') as HTMLDivElement;

let tasks: string[] = [];

add.addEventListener('click', addTask);

function addTask(): void {
    let task: string = input.value;
    tasks.push(task);
    input.value = '';
    render();
}

function render(): void {
    tasklist.innerHTML = '';

    for (let i: number = 0; i < tasks.length; i++) {
        let p = document.createElement('p');
        p.textContent = tasks[i];
        tasklist.appendChild(p);
    }
}