
class Task {
  constructor(tasknameInput) {
    this.tasknameInput = tasknameInput;
  }
}

class UserInterface {
  constructor() {
    this.tasknameInput = document.getElementById('task-input');

    this.form = document.getElementById('form');
    this.tableBody = document.getElementById('table-body');

    this.tasks = [];
  }

  bindEventListeners() {
    this.form.addEventListener('submit', (e) => this.onFromSubmit(e));
  }

  onFromSubmit(event) {
   event.preventDefault();

    const task = new Task(
      this.tasknameInput.value,
    );

    this.tasks.push(task);
    this.populateTaskTable();

    this.tasknameInput.value = '';

  }
  populateTaskTable() {

    this.tableBody.innerHTML = '';

    for (const task of this.tasks) {

      const row = document.createElement('tr');

      const taskCell = document.createElement('td');
      const completeCell = document.createElement('td');
      const actionsCell = document.createElement('td');

      const completeButton = document.createElement('button');

      
      taskCell.innerHTML = task.tasknameInput;

      completeButton.innerHTML = 'Complete';

      //removeButton.addEventListener('click', (e) => this.onRemoveButtonClick(task))

      completeButton.addEventListener('click', (e) => {
        actionsCell.append('done');

      })
      completeCell.append(completeButton);


      row.append(taskCell);
      row.append(completeCell);
      row.append(actionsCell);
      this.tableBody.append(row);
    }

  }



  onRemoveButtonClick(taskToRemove) {
    
    this.tasks = this.tasks.filter((task) => {
      console.log('done');
      return task.tasknameInput !== taskToRemove.tasknameInput;
    });

    this.populateTaskTable();
  }
}


  const ui = new UserInterface();
  ui.bindEventListeners();