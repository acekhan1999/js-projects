const todo_list = document.getElementById("todo_list")
const completed_todos = document.getElementById("completed_todos")
const item_name = document.getElementById("item_name")
const submit_item = document.getElementById("submit_item")

const todos = []

const completed_todos_arr = []

submit_item.addEventListener("click", () => {
    if (item_name.value != "") {
        todos.push(item_name.value)
        item_name.value = ""
    }
    init();
})

init();

function remove_item(counter, arr) {
    const todo_item = arr[counter]
    arr.splice(counter, 1);
    init();
}

function complete_item(counter) {
    const todo_item = todos[counter]
    completed_todos_arr.push(todo_item)
    todos.splice(counter, 1);
    init();
}

function init() {

    todo_list.innerHTML = ""
    completed_todos.innerHTML = ""
    let counter = -1; 

    if (todos.length === 0) {
        todo_list.innerHTML = "<b class='empty_list'>Empty List.</b>";
    }

    todos.forEach((todo) => {
        counter++;

        todo_list.innerHTML += `
        <div class='todo'>
            <div class='todo_desc'>
                <p>${todo}</p>
            </div>
            <div class='todo_btns'>
                <button class='done' onclick='complete_item(${counter})'>
                    <i class='fa fa-check'></i>
                </button>
                <button class='remove' onclick='remove_item(${counter}, todos)'>
                    <i class='fa fa-remove'></i>
                </button>
            </div>
        </div>
`
    })

    counter = -1;

    completed_todos_arr.forEach((todo) => {
        counter++

        completed_todos.innerHTML += `
        <div class='todo'>
            <div class='todo_desc'>
                <p>${todo}</p>
            </div>
            <div class='todo_btns'>
                <button class='remove' onclick='remove_item(${counter}, completed_todos_arr)'>
                    <i class='fa fa-remove'></i>
                </button>
            </div>
        </div>
`
    })
}
