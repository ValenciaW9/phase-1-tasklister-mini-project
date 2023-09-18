document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flatiron Task Lister</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="main-content">
    <h1>Task Lister Lite™️</h1>
    <form id="create-task-form" action="#" method="post">
      <label for="new-task-description">Task description:</label>
      <input
        type="text"
        id="new-task-description"
        name="new-task-description"
        placeholder="description"
      />
      <input type="submit" value="Create New Task" />
    </form>
    <ul id="tasks"></ul>

    <script src="./src/index.js"></script>
</body>
</html>
const form = document.getElementById('create-task-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const input = document.getElementById('new-task-description');
  const task = input.value;

  console.log(task);

  const taskList = document.getElementById('tasks');
  const taskItem = document.createElement('li');
  taskItem.textContent = task;

  taskList.appendChild(taskItem);
});