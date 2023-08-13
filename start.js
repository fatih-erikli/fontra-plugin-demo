class Panel {
  getContentElement() {
    const div = document.createElement("div");
    div.innerHTML = "My plugin"
    return div;
  }

  attach() {
    console.log("Hello fontra");
  }

  detach() {
    console.log("Goodbye fontra");
  }
}

function main(fontra) {
  fontra.addSidebarPanel(new Panel(), "right");
}
