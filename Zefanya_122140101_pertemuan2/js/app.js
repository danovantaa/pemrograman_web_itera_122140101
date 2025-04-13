import { TaskStorage } from './modules/data.js';
import { createTaskHTML, getFormValues, resetForm } from './modules/utils.js';

const taskList = document.getElementById('task-list');
const form = document.getElementById('task-form');
const storage = new TaskStorage();

let isEditing = false;
let editingIndex = null;

const renderTasks = () => {
  taskList.innerHTML = '';
  const tasks = storage.getTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = `todo ${getThemeClass()}`;
    li.innerHTML = createTaskHTML(task, index);
    taskList.appendChild(li);
  });
};

const getThemeClass = () => {
  const theme = document.body.classList;
  if (theme.contains('light')) return 'light-todo';
  if (theme.contains('darker')) return 'darker-todo';
  return 'standard-todo';
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const task = getFormValues();

  if (!task.name || !task.date || !task.time) return;

  if (isEditing) {
    storage.updateTask(editingIndex, task);
    isEditing = false;
    editingIndex = null;
  } else {
    storage.addTask(task);
  }

  resetForm();
  renderTasks();
};

const handleTaskAction = (e) => {
  if (e.target.classList.contains('delete-button')) {
    const index = parseInt(e.target.dataset.index);
    storage.deleteTask(index);
    renderTasks();
  }

  if (e.target.classList.contains('edit-button')) {
    const index = parseInt(e.target.dataset.index);
    const task = storage.getTasks()[index];

    document.getElementById('task-input').value = task.name;
    document.getElementById('task-date').value = task.date;
    document.getElementById('task-time').value = task.time;

    isEditing = true;
    editingIndex = index;
  }
};

export const initApp = async () => {
  form.addEventListener('submit', handleFormSubmit);
  taskList.addEventListener('click', handleTaskAction);
  renderTasks(); 
};