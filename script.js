const button = document.querySelector(".add-btn")
const input = document.querySelector(".add-input")
const list = document.querySelector(".todo-list")


button.addEventListener("click", () => {
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
        list.removeChild(taskBox)
    })

    const doneBtn = document.createElement("button")
    doneBtn.className = "todo-done-btn"
    doneBtn.innerHTML = "Done"

    doneBtn.addEventListener("click", () => {
    })


    yesNoButtons.appendChild(cancelBtn)
    yesNoButtons.appendChild(doneBtn)
    li.appendChild(yesNoButtons)
    taskBox.appendChild(li)
    list.appendChild(taskBox)
    input.value = "";
})




