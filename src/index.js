import "./css/style.css";
import { createDiv } from "./domManip.js";

// Setup DOM
function setupDom() {
  console.log("settingUpDom");
  let elements = {};
  elements.header = createDiv("header");
  elements.content = createDiv("content");
  elements.content.appendChild(createDiv("todo-list"));
  elements.footer = createDiv("footer");
  for (const item in elements) {
    document.body.appendChild(elements[item]);
  }
}
setupDom();
