class FontraPlugin {
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
        console.log("Hello fontra");
      },
      detach() {
        console.log("Goodbye fontra");
      }
    },
      "right"
    );
  }
}
