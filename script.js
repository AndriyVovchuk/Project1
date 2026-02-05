const button = document.querySelector(".add-btn")
const input = document.querySelector(".add-input")
const list = document.querySelector(".todo-list")


button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.className = "todo-list-tasks"
    li.innerText = input.value

    const yesNoButtons = document.createElement("div");
    yesNoButtons.className = "todo-yes-no-buttones";

    const cancelBtn = document.createElement("button")
    cancelBtn.className = "todo-cancel-btn"
    cancelBtn.innerHTML = "Delete"

    cancelBtn.addEventListener("click", () => {
        list.removeChild(li)
    })

    const doneBtn = document.createElement("button")
    doneBtn.className = "todo-done-btn"
    doneBtn.innerHTML = "Done"

    doneBtn.addEventListener("click", () => {
    })

    yesNoButtons.appendChild(cancelBtn)
    yesNoButtons.appendChild(doneBtn)
    li.appendChild(yesNoButtons)
    list.appendChild(li)
    input.value = "";
})




