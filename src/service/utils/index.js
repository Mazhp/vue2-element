/**
 * @description: 组件
 * @author: mazp.
 * @date: 17/11/6.
 * @see:  www.mazhanpeng.com
 */

import _ from 'lodash';

/**
 * @description memoize 缓存对象
 * @type {{}}
 */
let memoize_cache = {};

export default  {
	/**
   * @description 生成 UUID
   * @returns {string} 生成的 UUID
   */
  createUUID () {
    let s = [];
    let hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    return s.join('');
  },

  /**
   * @description 从 URL 上获取参数
   * @param name 参数名
   * @returns {String} 参数值
   */
  getQueryString (name) {
    let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r !== null) return decodeURIComponent(r[2]); return null
  },

  /**
   * @description 合并选项
   * @param target 需要合并的目标
   * @return {*} 目标
   */
  merge (target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
      let source = arguments[i];
      for (let prop in source) {
        if (source.hasOwnProperty(prop)) {
          let value = source[prop];
          if (value !== undefined) {
            target[prop] = value
          }
        }
      }
    }

    return target;
  },

  /**
   * @description 合并对象, 当目标中含有这个属性时候才合并否则不操作
   * @param target 需要合并的目标
   * @return {*} 目标
   */
  ownMerge (target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
      let source = arguments[i];
      for (let prop in source) {
        if (source.hasOwnProperty(prop)) {
          let value = source[prop];
          if (target.hasOwnProperty(prop) && value !== undefined) {
            target[prop] = value
          }
        }
      }
    }

    return target;
  },

  /**
   * @description 字符串首字母大写
   * @param str 字符串
   * @return {string} 首字母大写的字符串
   */
  firstUpperCase (str) {
    return str.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
      return $1.toUpperCase() + $2.toLowerCase()
    })
  },

  /**
   * @description 创建缓存对象函数
   * @param name {String} 缓存对象的键
   * @param obj {Object} 缓存对象的值
   * @returns {Object} 缓存对象的值
   */
  memoize (name, obj) {
    if (obj !== undefined)
      memoize_cache[name] = _.cloneDeep(obj);
    return _.cloneDeep(memoize_cache[name]);
  },

  /**
   * @description 将字符串转化为布尔值
   * @param str {String} 待转化的字符串
   * @return {boolean} 转化后的值
   */
  string2Boolean: (str) => str === 'false' ? false : Boolean(str)
}
