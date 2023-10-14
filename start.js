import { objectsEqual } from "fontra/core/utils.js";

const div = document.createElement("div");
const button = document.createElement("button");
button.innerHTML = "my button";
button.addEventListener("click", () => {alert(1)});
div.appendChild(button);

export function start(editorController, pluginPath) {
  editorController.addSidebarPanel({icon: `${pluginPath}/dog.svg`, name: "demo-panel"}, "right", div);
  console.log('function from fontra utils', objectsEqual);
}
