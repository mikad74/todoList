import flatpickr from "flatpickr";
import { addTask } from "./task.js"
// simple function to create a div with a list of classes

function hideForm() {
  const form = document.querySelector('.new-task')
  form.classList.add("hidden")
  const button = document.querySelector('#new-task-btn')
  button.classList.remove("hidden")
}

function showTaskInput() {
  const form = document.querySelector('.new-task')
  form.classList.remove("hidden")
  const button = document.querySelector('#new-task-btn')
  button.classList.add("hidden")
}

function createDiv(...classes) {
  const myDiv = document.createElement("div");
  for (var i = 0; i < classes.length; i++) {
    myDiv.classList.add(classes[i]);
  }
  return myDiv;
}

function createTextInput(id, placeholder) {
  const label = document.createElement("label");
  const myInput = document.createElement("input");
  myInput.id = id;
  myInput.name = id
  label.innerHTML = placeholder;
  myInput.type = "text";
  myInput.placeholder = placeholder;
  label.appendChild(myInput);

  return label;
}

function createDateInput(id) {
  const myInput = document.createElement("input");
  myInput.id = id;
  myInput.name = id
  const label = document.createElement("label");
  label.innerHTML = "Due Date";
  myInput.type = "date";
  myInput.placeholder = "Due Date";
  const config = {
    enableTime: true,
    dateFormat: "F j, Y H:i",
  };
  flatpickr(myInput, config);
  label.appendChild(myInput);

  return label;
}

function createPriorityInput(id) {
  const label = document.createElement("label");
  label.innerHTML = "Priority";
  const myInput = document.createElement("select");
  myInput.id = id + "-select";
  myInput.name = id
  const high = document.createElement("option");
  high.value = "high";
  high.innerHTML = "High";
  const medium = document.createElement("option");
  medium.value = "medium";
  medium.innerHTML = "medium";
  medium.selected = true;
  const low = document.createElement("option");
  low.value = "low";
  low.innerHTML = "low";
  myInput.appendChild(high);
  myInput.appendChild(medium);
  myInput.appendChild(low);
  label.appendChild(myInput);

  return label;
}

function createSubmitButton(id) {
  const myInput = document.createElement("button");
  myInput.id = id;
  myInput.name = id;
  myInput.type = "submit"
  myInput.onclick = () => {addTask()}

  return myInput;
}

function createTaskButton() {
  const myItem = document.createElement("button")
  const buttonDiv = createDiv("new-task-btn-container")
  myItem.id = "new-task-btn"
  myItem.innerHTML = "New Task"
  myItem.classList.add("hidden")
  myItem.onclick = () => {showTaskInput()}
  buttonDiv.appendChild(myItem)

  return buttonDiv
}

export {
  createDiv,
  createTextInput,
  createDateInput,
  createPriorityInput,
  createSubmitButton,
  hideForm,
  createTaskButton,
};
