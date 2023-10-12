import { objectsEqual } from "/core/utils.js";

const div = document.createElement("div");
const button = document.createElement("button");
button.innerHTML = "my button";
button.addEventListener("click", () => {alert(1)});
div.appendChild(button);

export function start(editorController, html) {
  editorController.addSidebarPanel({
    iconPath: "/images/gear.svg",
    identifier: "demo-panel",
    toggle() {},
    attach() {},
    contentElement: div
  }, 'right');
  console.log('function from fontra utils', objectsEqual);
}
