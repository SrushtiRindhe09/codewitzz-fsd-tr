let tasks = [];
const popup = document.getElementById("popup");
const taskmgt = document.getElementById("taskmgt");
const welcome = document.querySelector(".Hero .container");
const modal = document.getElementById("modal-overlay");
const taskTitleInput = document.getElementById("TaskTitle");
const form = document.getElementById("taskF");
const dashboard = document.getElementById("dashboard");
const titleDisplay = document.querySelector(".title");
const badgeDisplay = document.querySelector(".badge");
const subItemSection = document.querySelectorAll(".sub-item span:last-child");
const totalTasksEl = document.querySelectorAll(".value")[0];
const completedTasksEl = document.querySelectorAll(".value")[1];
const successRateEl = document.querySelectorAll(".value")[2];

function renderDashboard() {

    totalTasksEl.textContent = tasks.length;
    const completedCount = tasks.filter(t => t.completed).length;
    completedTasksEl.textContent = completedCount;
    successRateEl.textContent = tasks.length > 0 ? `${Math.round((completedCount / tasks.length) * 100)}%` : '0%';

    let high = 0,
        medium = 0,
        low = 0;

    tasks.forEach(task => {
        if (!task.completed) {
            if (task.priority === 'high') high++;
            else if (task.priority === 'medium') medium++;
            else if (task.priority === 'low') low++;
        }
    });
    subItemSection[0].textContent = high;
    subItemSection[1].textContent = medium;
    subItemSection[2].textContent = low;


    const existingTaskList = document.querySelectorAll(".show");
    existingTaskList.forEach(e => e.remove());

    tasks.forEach((task, index) => {
        const taskBox = document.createElement("div");
        taskBox.className = "show";

        taskBox.innerHTML = `
            <div class="left-section">
                <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
                <div class="content">
                    <div id="abc">
                        <div class="title">${task.title}</div>
                        <div class="badge">${task.priority}</div>
                    </div>
                    <div class="date">Created ${task.date}</div>
                </div>
            </div>
            <img src="images/delete.png" alt="Delete" onclick="deleteTask(${index})">
        `;

        dashboard.appendChild(taskBox);
    });

    saveTasksToLocal();
}

function openPopupAddtask() {
    popup.style.display = "flex";
    taskmgt.style.display = "none";
}

function closePopupAddtask() {
    popup.style.display = "none";
    if (tasks.length > 0) {
        taskmgt.style.display = "flex";
    }
}

function closeWarningModal() {
    modal.style.display = "none";
}

function saveitem(e) {
    e.preventDefault();
    const title = taskTitleInput.value.trim();
    const radios = document.getElementsByName("radio");
    let priority = "";

    for (const r of radios) {
        if (r.checked) {
            priority = r.value;
            break;
        }
    }

    if (title === "") {
        modal.style.display = "flex";
        return;
    }

    const newTask = {
        title,
        priority,
        completed: false,
        date: new Date().toLocaleDateString()
    };

    tasks.push(newTask);
    taskTitleInput.value = "";
    radios.forEach(r => r.checked = false);

    popup.style.display = "none";
    taskmgt.style.display = "flex";
    welcome.style.display = "none";

    renderDashboard();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderDashboard();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderDashboard();
    if (tasks.length === 0) {
        taskmgt.style.display = "none";
        welcome.style.display = "flex";
    }
}

function saveTasksToLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocal() {
    const stored = localStorage.getItem("tasks");
    if (stored) {
        tasks = JSON.parse(stored);
    }
    if (tasks.length > 0) {
        welcome.style.display = "none";
        taskmgt.style.display = "flex";
        renderDashboard();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".modal-button").onclick = closeWarningModal;
    form.addEventListener("submit", saveitem);
    loadTasksFromLocal();
});