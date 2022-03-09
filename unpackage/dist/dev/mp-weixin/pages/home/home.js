"use strict";
var common_vendor = require("../../common/vendor.js");
var icon1 = "/static/imgs/ipzafk.svg";
var icon2 = "/static/imgs/z8uxz6.svg";
var icon3 = "/static/imgs/jyyc67.svg";
var icon4 = "/static/imgs/kpyvvj.svg";
var icon5 = "/static/imgs/lxd0u5.svg";
var icon6 = "/static/imgs/oe497p.svg";
var icon7 = "/static/imgs/vjha4h.svg";
var icon8 = "/static/imgs/vls0pj.svg";
var icon9 = "/static/imgs/w0xk1k.svg";
var icon10 = "/static/imgs/y0sx0n.svg";
var fu1 = "/static/imgs/fu(1).webp";
var fu2 = "/static/imgs/fu(2).webp";
var fu3 = "/static/imgs/fu(3).webp";
var fu4 = "/static/imgs/fu(4).webp";
var fu5 = "/static/imgs/fu(5).webp";
var fu6 = "/static/imgs/fu(6).webp";
const Banner = () => "../../components/Banner/Banner.js";
const _sfc_main = {
  setup(props, context) {
  },
  data() {
    const iconList = [{
      src: icon1,
      id: "001",
      name: "2022"
    }, {
      src: icon2,
      id: "002",
      name: "2022"
    }, {
      src: icon3,
      id: "003",
      name: "2022"
    }, {
      src: icon4,
      id: "004",
      name: "2022"
    }, {
      src: icon5,
      id: "005",
      name: "2022"
    }, {
      src: icon6,
      id: "006",
      name: "2022"
    }, {
      src: icon7,
      id: "007",
      name: "2022"
    }, {
      src: icon8,
      id: "008",
      name: "2022"
    }, {
      src: icon9,
      id: "009",
      name: "2022"
    }, {
      src: icon10,
      id: "0010",
      name: "2022"
    }];
    const fuList = [{
      src: fu1,
      id: "01",
      name: "\u600E\u4E48\u770B\u5F85996"
    }, {
      src: fu2,
      id: "02",
      name: "\u5E74\u8F7B\u4EBA\u8981\u4E0D\u8981\u88F8\u8F9E"
    }, {
      src: fu3,
      id: "03",
      name: "\u627E\u5DE5\u4F5C\u662F\u5174\u8DA3\u4F18\u5148\u8FD8\u662F\u5DE5\u8D44\u4F18\u5148"
    }, {
      src: fu4,
      id: "04",
      name: "\u9009\u62E9\u7559\u5728\u5927\u57CE\u5E02\u8FD8\u662F\u56DE\u5BB6\u53D1\u5C55"
    }, {
      src: fu5,
      id: "05",
      name: "\u4E0B\u73ED\u540E\u9886\u5BFC\u4FE1\u606F\u8BE5\u4E0D\u8BE5\u56DE"
    }, {
      src: fu6,
      id: "06",
      name: "\u600E\u4E48\u907F\u514D\u88AB\u540C\u4E8B\u7529\u9505"
    }];
    return {
      iconList,
      fuList
    };
  },
  components: {
    Banner
  },
  onLoad() {
    const query = common_vendor.index.createSelectorQuery().in(this);
    query.select(".swiper-item").boundingClientRect((data) => {
      this.itemWidth = data.width;
    }).exec();
  },
  methods: {}
};
if (!Array) {
  const _easycom_Banner2 = common_vendor.resolveComponent("Banner");
  _easycom_Banner2();
}
const _easycom_Banner = () => "../../components/Banner/Banner.js";
if (!Math) {
  _easycom_Banner();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.iconList, (item, k0, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    b: common_vendor.f($data.fuList, (fu, k0, i0) => {
      return {
        a: fu.src,
        b: common_vendor.t(fu.name),
        c: fu.id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
