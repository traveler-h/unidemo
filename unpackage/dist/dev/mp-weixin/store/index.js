"use strict";
var common_vendor = require("../common/vendor.js");
const store = new common_vendor.createStore({
  state: {
    userInfo: {
      avatarUrl: "",
      city: "",
      country: "",
      gender: "",
      language: "",
      nickName: "",
      province: ""
    }
  },
  getters: {},
  actions: {},
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
      return state;
    },
    getUserInfo(state) {
      return state.userInfo;
    }
  }
});
exports.store = store;
