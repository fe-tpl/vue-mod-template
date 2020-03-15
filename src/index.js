import createApp from "./app";

class VueModTpl {
  constructor(moduleWrapperEle) {
    this.moduleWrapperEle = moduleWrapperEle;
    let dataStr = this.moduleWrapperEle.firstElementChild.value;
    this.data = JSON.parse(decodeURIComponent(dataStr)) || {};
    this.render();
  }
  render() {
    let app = createApp(this.data);
    app.$mount(this.moduleWrapperEle.children[1]);
    return app;
  }
}
let moduleEles = document.querySelectorAll(".freedom-module-wrapper{module-name}");
for (var i = 0; i < moduleEles.length; i++) {
  new VueModTpl(moduleEles[i]);
}
