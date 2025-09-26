// Idee von Rene Wenz

// Erweiterung von Andy Chwatal (April '24)

// 1. APPLICATION STATE
// - Holds the state of the application
// - This is the single source of truth for the application state

state = {
    todos: [
        { text: 'CABS lernen', completed: false },
        { text: 'NSCS lernen', completed: true },
        { text: 'POS/Theorie lernen', completed: false },
        { text: 'WMC programmieren', completed: false },
    ],
};

// 2. STATE ACCESSORS/MUTATORS FN'S
// - Functions that allow us to get and set the state
// - Here we will create functions to add and remove todos
function addNewTodoItemToState(text) {
    state.todos.push({ text: text, completed: false });
}

function toggleTodoState(todoObject) {
    todoObject.completed = !todoObject.completed;
}

function deleteTodoObjectFromState(todoObject) {
    let idx = state.todos.indexOf(todoObject);
    if (idx !== -1) {
        state.todos.splice(idx, 1);
    }
}

// 3. DOM Node Refs
// - Static references to DOM nodes needed after the start of the application

const todoList = document.getElementById('todo-list');
const todoListDone = document.getElementById('todo-list-done');
const addBtn = document.getElementById('todo-add');
const newTodoText = document.getElementById('todo-input');

// 4. DOM Node Creation Fn's
// - Dynamic creation of DOM nodes needed upon user interaction
// - Here we will create a function that will create a todo item
function createTodoElement(todo) {
    const listItem = document.createElement('li');
    listItem.textContent = todo.text;

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = todo.completed;
    cb.addEventListener('change', (event) => onTodoStateChanged(todo));

    const delBtn = document.createElement('button');
    delBtn.textContent = 'delete';
    delBtn.addEventListener('click', (event) => onTodoObjectDelete(todo));

    listItem.prepend(cb);
    listItem.append(delBtn);

    return listItem;
}

// 5. RENDER FN
// - These functions will render the application state to the DOM
// - Here we will use a very naive but simple approach to re-render the list
// - IMPORTANT TAKEAWAY: The state drives the UI, any state change should trigger a re-render of the UI

function render() {
    todoList.innerHTML = '';
    for (let todoItem of state.todos) {
        if (!todoItem.completed) {
            const li = createTodoElement(todoItem);
            todoList.appendChild(li);
        }
    }
    todoListDone.innerHTML = '';
    for (let todoItem of state.todos) {
        if (todoItem.completed) {
            const li = createTodoElement(todoItem);
            todoListDone.appendChild(li);
        }
    }
}

// 6. EVENT HANDLERS
// - These functions handle user interaction e.g. button clicks, key presses etc.
// - These functions will call the state mutators and then call the render function
// - The naming convention for the event handlers is `on<Event>`
// - Here we will create a function that will handle the add button click
function onAddBtnPressed() {
    // alert('button pressed: ' + newTodoText.value);
    addNewTodoItemToState(newTodoText.value);
    render();
}

function onTodoStateChanged(todoObject) {
    toggleTodoState(todoObject);
    render();
}

function onTodoObjectDelete(todoObject) {
    deleteTodoObjectFromState(todoObject);
    render();
}

// 7. INIT BINDINGS
// - These are the initial bindings of the event handlers

addBtn.addEventListener('click', (event) => onAddBtnPressed());

// 8. INITIAL RENDER
// - Here will call the render function to render the initial state of the application
render();
