import Panel from "fontra/editor/panel.js";

export function start(editorController, pluginPath) {
  class MyPanel extends Panel {
    identifier = "panel-demo";
    iconPath = `${pluginPath}/dog.svg`;
    getContentElement() {
      const div = document.createElement("div");
      const button = document.createElement("button");
      button.innerHTML = "my button2";
      button.addEventListener("click", () => {
        alert(1);
      });
      div.appendChild(button);
      return div;
    }
  }
  customElements.define("panel-demo", MyPanel);
  editorController.addSidebarPanel(new MyPanel(editorController), "right");
}
