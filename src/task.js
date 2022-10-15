import { hideForm } from "./domManip.js";
// Setup task object
// Contents:
//  - title
//  - description
//  - due date
//  - priority
//  - notes
//  - done

const Tasks = {};

function createTask(inputObject) {
  return {
    title: inputObject.title,
    description: inputObject.description,
    dueDate: inputObject.dueDate,
    priority: inputObject.priority,
    notes: "",
    done: false,
    addNote() {
      console.log("Adding Note");
    },
    toggleCompletion() {
      console.log("toggleCompletion");
    },
  };
}

function addTask() {
  console.log("Adding task");
  const inputObject = {};
  inputObject.title = document.getElementById("title").value;
  inputObject.dueDate = document.getElementById("dueDate").value;
  inputObject.description = document.getElementById("description").value;
  inputObject.priority = document.getElementById("priority-select").value;
  for (const item in inputObject) {
    console.log(inputObject[item]);
  }
  Tasks[inputObject.title] = createTask(inputObject);
  console.log(Tasks);
  hideForm()
}

export { addTask };
