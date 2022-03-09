"use strict";
var common_vendor = require("../common/vendor.js");
function setLocal(key, value) {
  common_vendor.index.setStorageSync(key, value);
}
function getLocal(key) {
  let value = null;
  value = common_vendor.index.getStorageSync(key);
  return value;
}
exports.getLocal = getLocal;
exports.setLocal = setLocal;
