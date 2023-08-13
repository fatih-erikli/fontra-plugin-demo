class FontraPlugin {
  enter() {
    console.log("Hello fontra");
  }
  exit() {
    console.log("Goodbye fontra");
  }
  main(fontra) {
    fontra.addSidebarPanel({
      name: "my-panel",
      icon: "/images/gear.svg",
      getContentElement() {
        const div = document.createElement("div");
        div.innerHTML = "My plugin";
        return div;
      },
      attach() {
        
      },
      detach() {
        
      }
    },
      "right"
    );
  }
}
