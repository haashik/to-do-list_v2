let tasks = [];
window.onload = function () {
    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks){
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}

function addTask(){
    let input = document.getElementById("taskInput")
    let taskText = input.value;

    if (taskText === ""){
        alert("Please enter a task");
        return;
    }
    tasks.push({
        text: taskText,
        done: false
    });

    saveTasks();
    renderTasks();
    input.value = "";
}

// Save to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Show tasks on screen
function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task,index) => {
        let li = document.createElement("li");
        li.innerText = task.text;

        if (task.done) {
            li.classList.add("done");
        }
        li.onclick = function () {
            task.done = !task.done; 
            saveTasks();
            renderTasks();
        };
        list.appendChild(li);
    });
}