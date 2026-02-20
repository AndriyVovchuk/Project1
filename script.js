const button = document.querySelector(".add-btn")
const input = document.querySelector(".add-input")
const list = document.querySelector(".todo-list")
const counter = document.querySelector(".task-counter-number")
const activeCounter = document.querySelector(".active-counter-number")
const doneCounter = document.querySelector(".done-counter-number")

const allBtn = document.getElementById("all-btn")
const inProgresBtn = document.getElementById("in-progres-btn")
const completedBtn = document.getElementById("compleated-btn")
const cenceledBtn = document.getElementById("canceled-btn")

const sortSelect = document.querySelector(".filter-button")

let tasks = []
let currentFilter = "all";
let currentSort = "newest"
let filteredTask = tasks
let currentTime = new Date()

function renderTasks() {

    list.innerHTML = ""

    let filteredTask = [...tasks]

    if (currentFilter !== "all") {
        filteredTask = tasks.filter(task => task.status == currentFilter)
    }

    if (currentSort === "newest") {
        filteredTask.sort((a, b) => b.id - a.id)
    }

    if (currentSort === "alphabetical") {
        filteredTask.sort((a, b) => b.text.localeCompare(a.text))
    }

    if (currentSort === "recently-finished") {
        filteredTask.sort((a, b) => (b.completeAt || 0) - (a.completeAt || 0))
    }

    filteredTask.forEach(task => {
        const taskBox = document.createElement("div")
        taskBox.className = "todo-box"

        const textAndTimeConteiner = document.createElement("div")
        textAndTimeConteiner.className = "todo-list-tasks"

        const taskText = document.createElement("span")
        taskText.className = "task-name"
        taskText.innerText = task.text

        if (task.status === "done" || task.status === "cenceled") {
            taskText.classList.add("active")
        }

        const yesNoButtons = document.createElement("div")
        yesNoButtons.className = "todo-yes-no-buttones"

        const cancelBtn = document.createElement("button")
        cancelBtn.className = "todo-cancel-btn"
        cancelBtn.innerHTML = "Cencel"

        function cancelDoneTime() {

        }

        const endedDate = new Date(task.createdAt)

        const formattedDateEnd = endedDate.toLocaleDateString()
        const formattedTimeEnd = endedDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        })

        cancelBtn.addEventListener("click", () => {
            task.status = "cenceled"
            task.completeAt = Date.now()
            timeAndStatusCouneiner.innerHTML = ` Ended: ${formattedDateEnd} ${formattedTimeEnd}`
            renderTasks();
        })

        const doneBtn = document.createElement("button")
        doneBtn.className = "todo-done-btn"
        doneBtn.innerHTML = "Done"

        doneBtn.addEventListener("click", () => {
            task.status = "done"
            task.completeAt = Date.now()

            renderTasks()
        })

        if (task.status === "active") {
            yesNoButtons.appendChild(cancelBtn)
            yesNoButtons.appendChild(doneBtn)
        }

        textAndTimeConteiner.appendChild(taskText)

        taskBox.appendChild(textAndTimeConteiner)
        taskBox.appendChild(yesNoButtons)

        const timeAndStatusCouneiner = document.createElement("div")
        timeAndStatusCouneiner.className = "time-and-status-couneiner"

        const addTaskTime = document.createElement("span")
        addTaskTime.className = "add-task-time"

        const doneAndCanceleldTaskTime = document.createElement("span")
        doneAndCanceleldTaskTime.className = "done-and-canceleld-task-time"

        const createdDate = new Date(task.createdAt)

        const formattedDate = createdDate.toLocaleDateString()
        const formattedTime = createdDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        })

        addTaskTime.innerText = ` Created: ${formattedDate} ${formattedTime}`
        timeAndStatusCouneiner.appendChild(addTaskTime)

        if (task.status === "done" || task.status === "cenceled") {
            const compleatedDate = new Date(task.completeAt);

            const formattedDate = createdDate.toLocaleDateString()
            const formattedTime = createdDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });

            doneAndCanceleldTaskTime.innerText = ` Ended: ${formattedDate} ${formattedTime}`
        }

        if (task.status === "cenceled") {
            const compleatedDate = new Date(task.completeAt);

            const formattedDate = createdDate.toLocaleDateString()
            const formattedTime = createdDate.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });

            doneAndCanceleldTaskTime.innerText = ` Cenceled: ${formattedDate} ${formattedTime}`
        }

        timeAndStatusCouneiner.appendChild(doneAndCanceleldTaskTime)

        textAndTimeConteiner.appendChild(timeAndStatusCouneiner)


        list.appendChild(taskBox)

    })

    updateCounters()

}

function updateCounters() {
    counter.innerHTML = tasks.length
    activeCounter.innerHTML = tasks.filter(t => t.status === "active").length
    doneCounter.innerHTML = tasks.filter(t => t.status === "done").length
}

function addTask() {
    if (!input.value.trim()) return

    if (input.value === "") {
        return alert("Додайте завдання!")
    };

    const newTask = {
        id: Date.now(),
        text: input.value.trim(),
        status: "active",
        createdAt: Date.now()
    };

    tasks.push(newTask);
    renderTasks()
    input.value = ""
    input.blur();
}

button.addEventListener("click", addTask)

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask()
    }
})

sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value
    renderTasks()
})

allBtn.addEventListener("click", () => {
    currentFilter = "all"
    renderTasks()
})

inProgresBtn.addEventListener("click", () => {
    currentFilter = "active"
    renderTasks()
})

completedBtn.addEventListener("click", () => {
    currentFilter = "done"
    renderTasks()
})

cenceledBtn.addEventListener("click", () => {
    currentFilter = "cenceled"
    renderTasks()
})




//-----------

/*function updateCounterTaskCounter() {
    counter.innerHTML = taskCount
}
function updateActiveCounter() {
    activeCounter.innerHTML = activeCount
}
function updateDoneCounter() {
    doneCounter.innerHTML = doneCount
}

const taskBox = document.createElement("div")
taskBox.className = "todo-box"

const li = document.createElement("li");
li.className = "todo-list-tasks"
li.innerText = input.value

const yesNoButtons = document.createElement("div");
yesNoButtons.className = "todo-yes-no-buttones";

const cancelBtn = document.createElement("button")
cancelBtn.className = "todo-cancel-btn"
cancelBtn.innerHTML = "Delete"

const doneBtn = document.createElement("button")
doneBtn.className = "todo-done-btn"
doneBtn.innerHTML = "Done"

cancelBtn.addEventListener("click", () => {
    list.removeChild(taskBox);
    taskCount--;
    updateCounterTaskCounter();
    activeCount--;
    updateActiveCounter();

})

doneBtn.addEventListener("click", () => {
    doneCount++
    updateDoneCounter()
    activeCount--
    updateActiveCounter();
    yesNoButtons.removeChild(cancelBtn)
    yesNoButtons.removeChild(doneBtn)
    li.classList.toggle('active')
})

yesNoButtons.appendChild(cancelBtn)
yesNoButtons.appendChild(doneBtn)
li.appendChild(yesNoButtons)
taskBox.appendChild(li)
list.appendChild(taskBox)

taskCount++;
updateCounterTaskCounter();
activeCount++;
updateActiveCounter();

updateDoneCounter()*/
