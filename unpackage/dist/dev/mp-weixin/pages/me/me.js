"use strict";
var common_vendor = require("../../common/vendor.js");
common_vendor.useStore();
const _sfc_main = {
  data() {
    return {
      userInfo: {}
    };
  },
  onLoad() {
    this.userInfo = this.$store.state.userInfo;
    console.log(this.userInfo);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.userInfo.avatarUrl,
    b: common_vendor.t($data.userInfo.nickName),
    c: common_vendor.t($data.userInfo.gender === 0 ? "\u5973" : "\u7537"),
    d: common_vendor.t($data.userInfo.country || "\u5317\u4EAC")
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
