class FontraPlugin {
  main(fontra) {
    fontra.addSidebarPanel(
      new (class {
        name = "my-panel";
        icon = "https://www.svgrepo.com/show/506176/cut.svg";

        getContentElement() {
          const div = document.createElement("div");
          div.innerHTML = "My plugin";
          return div;
        }

        attach() {
          console.log("Hello fontra");
        }

        detach() {
          console.log("Goodbye fontra");
        }
      })(),
      "right"
    );
  }
}
