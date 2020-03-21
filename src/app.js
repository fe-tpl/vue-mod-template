import "./index.less";
import Vue from "vue";

export default (mockData) => {
  let app = new Vue({
    template: require("./index.html"),
    components: {},
    data() {
      return {
        ...mockData
      };
    },
    methods: {
      confirmHandle(selectedValue) {
        alert(selectedValue);
      }
    }
  });
  return app;
}