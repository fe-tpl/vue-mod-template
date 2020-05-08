import "./index.less";
import Vue from "vue";

const baseRate = 10 / 750;
const convertPxToRem = function (px) {
  return `${px * baseRate}rem`;
};

/**
 * 将px转换成html
 * @param {string} tplHtml 模板html
 * @return {string} 返回转换处理后的html字符串
 */
const convertHtmlPxToRem = function (tplHtml) {
  let regExp = /\d+px/gm;
  let match = tplHtml.match(regExp);
  match = match || [];
  for (let i = 0; i < match.length; i++) {
    let regExp1 = /(\d+)px/gm;
    let px = 0;
    if (regExp1.test(match[i])) {
      px = Number(RegExp.$1);
    }
    tplHtml = tplHtml.replace(`${match[i]}`, `${px * baseRate}rem`);
  }
  return tplHtml;
}

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
