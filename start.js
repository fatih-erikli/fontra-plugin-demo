export function start(editorController, html) {
  editorController.addSidebarPanel({
    iconPath: "/images/gear.svg",
    identifier: "demo-panel",
    toggle() {},
    attach() {},
    getContentElement() {
      return html.div({}, ['demo panel']);
    }
  }, 'right');
}
