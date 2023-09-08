const div = document.createElement("div");
div.innerHTML = "my div";

export function start(editorController, html) {
  editorController.addSidebarPanel({
    iconPath: "/images/gear.svg",
    identifier: "demo-panel",
    toggle() {},
    attach() {},
    contentElement: div
  }, 'right');
}
