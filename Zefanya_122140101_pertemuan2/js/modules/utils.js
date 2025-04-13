export const createTaskHTML = (task, index) => `
  <span><strong>${task.name}</strong> - Deadline: ${task.date} ${task.time}</span>
  <div class="action-buttons">
    <button class="edit-button" data-index="${index}">Edit</button>
    <button class="delete-button" data-index="${index}">Hapus</button>
  </div>
`;

export const getFormValues = () => {
  const name = document.getElementById('task-input').value.trim();
  const date = document.getElementById('task-date').value;
  const time = document.getElementById('task-time').value;
  return { name, date, time };
};

export const resetForm = () => document.getElementById('task-form').reset();