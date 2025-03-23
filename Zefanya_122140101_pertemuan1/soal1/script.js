class TodoApp {
    constructor() {
        this.todoList = JSON.parse(localStorage.getItem("todos")) || [];
        this.render();
    }

    addTodo(task) {
        const errorMessage = document.getElementById("pesan-eror");
        
        if (task.trim().length === 0) {
            errorMessage.classList.remove("hidden"); 
            return;
        }

        errorMessage.classList.add("hidden"); 
        this.todoList.push({ task, completed: false });
        this.render();
    }

    toggleComplete(index) {
        this.todoList[index].completed = !this.todoList[index].completed;
        this.render();
    }

    deleteTodo(index) {
        this.todoList.splice(index, 1);
        this.render();
    }

    saveTodos() {
        localStorage.setItem("todos", JSON.stringify(this.todoList));

        const saveMessage = document.getElementById("pesan-simpan");
        saveMessage.classList.remove("hidden");

        this.todoList = [];
        this.render();

        setTimeout(() => {
            saveMessage.classList.add("hidden");
        }, 3000);
    }

    render() {
        const listElement = document.getElementById("todo-list");
        listElement.innerHTML = "";

        this.todoList.forEach((todo, index) => {
            const li = document.createElement("li");
            li.className = "flex items-center justify-between p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition";

            li.innerHTML = `
                <div class="flex items-center gap-3">
                    <input type="checkbox" id="todo-${index}" ${todo.completed ? "checked" : ""} 
                        class="w-5 h-5 accent-blue-500 cursor-pointer">
                    <label for="todo-${index}" class="text-lg ${todo.completed ? 'text-green-500 line-through' : 'text-black'}">
                        ${todo.task}
                    </label>
                </div>
                <button class="text-red-500 hover:text-red-700 text-xl transition">
                    Hapus
                </button>
            `;

            const checkbox = li.querySelector("input[type='checkbox']");
            checkbox.addEventListener("change", () => this.toggleComplete(index));

            const deleteButton = li.querySelector("button");
            deleteButton.addEventListener("click", () => this.deleteTodo(index));

            listElement.appendChild(li);
        });
    }
}

const app = new TodoApp();

document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("task-input");
    app.addTodo(taskInput.value);
    taskInput.value = ""; 
    taskInput.focus(); 
});

document.getElementById("btn-save").addEventListener("click", function() {
    app.saveTodos();
});