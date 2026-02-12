const button = document.querySelector(".add-btn")
const input = document.querySelector(".add-input")
const list = document.querySelector(".todo-list")
const counter = document.querySelector(".task-counter-number")
const activeCounter = document.querySelector(".active-counter-number")
const doneCounter = document.querySelector(".done-counter-number")

let taskCount = 0;
let activeCount = 0;
let doneCount = 0;

button.addEventListener("click", () => {

    if (input.value === "") {
        return alert("Додайте завдання!")
    };

    function updateCounterTaskCounter() {
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

    cancelBtn.addEventListener("click", () => {
        list.removeChild(taskBox);
        taskCount--;
        updateCounterTaskCounter();
        activeCount--;
        updateActiveCounter();
    })

    const doneBtn = document.createElement("button")
    doneBtn.className = "todo-done-btn"
    doneBtn.innerHTML = "Done"

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

    updateDoneCounter()

    input.value = "";
})






