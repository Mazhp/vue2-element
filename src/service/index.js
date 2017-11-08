/**
 * @description: 服务注册文件
 * @author: mazp.
 * @date: 17/11/6.
 * @see:  www.mazhanpeng.com
 */

import utils from './utils'
import moment from 'moment'
import lodash from 'lodash'
import cookies from 'js-cookie'
import vuei from './plugin/vuei'

let Service = {
  moment,
  lodash,
  cookies,
  utils,
};

const install = function (Vue) {
  if (install.installed) { return }

  Vue.use(vuei);
};

export default Service;
export {
  install
}
