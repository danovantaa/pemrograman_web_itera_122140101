export class TaskStorage {
    constructor(key = 'tasks') {
      this.key = key;
    }
  
    getTasks() {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : [];
    }
  
    saveTasks(tasks) {
      localStorage.setItem(this.key, JSON.stringify(tasks));
    }
  
    addTask(task) {
      const tasks = this.getTasks();
      tasks.push(task);
      this.saveTasks(tasks);
    }
  
    deleteTask(index) {
      const tasks = this.getTasks();
      tasks.splice(index, 1);
      this.saveTasks(tasks);
    }
  
    updateTask(index, newTask) {
      const tasks = this.getTasks();
      tasks[index] = newTask;
      this.saveTasks(tasks);
    }
  }