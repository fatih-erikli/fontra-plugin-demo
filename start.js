export function start(editorController) {
  editorController.addSidebarPanel({
    iconPath: "/images/gear.svg",
    identifier: "demo-panel",
    toggle() {},
    attach() {},
    getContentElement() {
      const div = document.createElement("div");
      div.innerHTML = "demo panel";
      return div;
    }
  }, 'right');
}
