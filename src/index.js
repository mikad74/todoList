import "./css/style.css";
import "../node_modules/flatpickr/dist/flatpickr.css"
import flatpickr from "flatpickr"
import { createDiv, createTaskButton, hideForm } from "./domManip.js";
import { createInputBar } from "./inputBar.js";

// Setup DOM
function setupDom() {
  console.log("settingUpDom");
  let elements = {};
  elements.header = createDiv("header");
  elements.content = createDiv("content");
  const todoList = createDiv("todo-list");
  const inputBar = createDiv("new-task");
  const inputBarElements = createInputBar();
  const newTaskButton = createTaskButton();
  for (const element in inputBarElements) {
    inputBar.appendChild(inputBarElements[element]);
  }
  todoList.appendChild(inputBar);
  todoList.appendChild(newTaskButton)
  const taskList = createDiv("task-list");
  todoList.appendChild(taskList);
  elements.content.appendChild(todoList);
  elements.footer = createDiv("footer");
  for (const item in elements) {
    document.body.appendChild(elements[item]);
  }
  hideForm()
}
setupDom();
