import {
  createDiv,
  createTextInput,
  createDateInput,
  createPriorityInput,
  createSubmitButton,
} from "./domManip.js";

// Create an Input Bar
// Contents:
//  - title
//  - description
//  - due date
//  - priority
//  - notes
//  - done

function createInputBar() {
  console.log("setting up input bar");
  const elements = {};
  elements.firstRow = createDiv("first-row");
  const title = createDiv("title");
  const titleInput = createTextInput("title", "Title");
  title.appendChild(titleInput);
  const dueDate = createDiv("due-date");
  const dueDateInput = createDateInput("dueDate");
  dueDate.appendChild(dueDateInput);
  elements.firstRow.appendChild(title);
  elements.firstRow.appendChild(dueDate);
  elements.secondRow = createDiv("second-row");
  const description = createDiv("description");
  const descriptionInput = createTextInput("description", "Description");
  elements.secondRow.appendChild(description);
  const priority = createDiv("priority");
  const priorityInput = createPriorityInput("priority");
  description.appendChild(descriptionInput);
  priority.appendChild(priorityInput);
  elements.secondRow.appendChild(priority);
  elements.thirdRow = createDiv("third-row");
  const submit = createSubmitButton("submit");
  submit.innerText = "Add task";
  elements.thirdRow.appendChild(submit);

  return elements;
}

export { createInputBar };
