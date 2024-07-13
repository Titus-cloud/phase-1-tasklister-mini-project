document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
  });

  function addTask(task) {
    const taskItem = document.createElement('li');
    taskItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }
});
