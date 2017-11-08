/**
 * @description: IOC实现文件
 * @author: mazp.
 * @date: 17/11/6.
 * @see:  www.mazhanpeng.com
 */

import Service from '../'
import Data from '../../data'

/**
 * @description 初始化函数
 */
function init() {

  // service 依赖输入部分
  if (this.$options.vuei) {
    this.$i = {};
    this.$options.vuei.forEach((key) => {
      if (Service[key]) {
        this.$i[key] = Service[key]
      } else {
        console.warn(`vuei: IOC容器中不存在 ${key} 属性!`)
      }
    })
  }

  // data 依赖注入部分
  if (this.$options.vued) {
    this.$d = {};

    this.$options.vued.forEach((key) => {
      if (Data[key]) {
        this.$d[key] = Data[key]
      } else {
        console.warn(`vued: IOC容器中不存在 ${key} 属性!`)
      }
    })
  }
}

/**
 * @description 重写vue的init函数
 * @param Vue
 */
export default function install (Vue) {

  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: init });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init
        ? [init].concat(options.init)
        : init;
      _init.call(this, options);
    };
  }
}
