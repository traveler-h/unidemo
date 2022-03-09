"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_index = require("../../utils/index.js");
const _sfc_main = {
  data() {
    return {
      canIUseGetUserProfile: false,
      hasUserProfile: false,
      userInfo: {}
    };
  },
  onLoad() {
    if (common_vendor.index.getUserProfile) {
      this.canIUseGetUserProfile = true;
    }
    const store = common_vendor.useStore();
    if (utils_index.getLocal("user")) {
      store.commit("setUserInfo", utils_index.getLocal("user"));
      this.userInfo = utils_index.getLocal("user");
      this.hasUserProfile = true;
      utils_index.setLocal("hasUserProfile", this.hasUserProfile);
    } else {
      this.userInfo = this.$store.state.userInfo;
    }
    console.log(this.userInfo);
  },
  methods: {
    getUserProfile(e) {
      if (this.canIUseGetUserProfile) {
        common_vendor.index.getUserProfile({
          desc: "\u7528\u4E8E\u5B8C\u5584\u4F1A\u5458\u8D44\u6599",
          success: (res) => {
            console.log(res);
            this.getUserInfo({
              detail: res
            });
          }
        });
      }
    },
    getUserInfo(e) {
      console.log(e);
      this.userInfo = e.detail.userInfo;
      this.$store.commit("setUserInfo", this.userInfo);
      utils_index.setLocal("user", this.userInfo);
      utils_index.setLocal("hasUserProfile", this.hasUserProfile);
      common_vendor.index.switchTab({
        url: "/pages/home/home"
      });
    },
    goHome() {
      common_vendor.index.switchTab({
        url: "/pages/home/home"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.hasUserProfile
  }, $data.hasUserProfile ? {
    b: $data.userInfo.avatarUrl,
    c: common_vendor.t($data.userInfo.nickName),
    d: common_vendor.o((...args) => $options.goHome && $options.goHome(...args))
  } : {
    e: common_vendor.o((...args) => $options.getUserProfile && $options.getUserProfile(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
