"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var utils_index = require("./utils/index.js");
var store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/home/home.js";
  "./pages/me/me.js";
  "./pages/active/active.js";
  "./pages/list/list.js";
}
const _sfc_main = {
  globalData: {
    text: "\u5168\u5C40\u53D8\u91CF"
  },
  onLaunch: function() {
    const store = common_vendor.useStore();
    console.log("App Launch");
    if (utils_index.getLocal("user")) {
      store.commit("setUserInfo", utils_index.getLocal("user"));
    }
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
