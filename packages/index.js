/*
 * @Author: fan wang
 * @Date: 2022-01-25 10:23:29
 * @LastEditTime: 2022-01-25 14:35:50
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-wf-ui\packages\index.js
 */
import WfSwitch from './switch/index.js';

const components = [
  WfSwitch
];

const install = function (Vue, options = {}) {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  WfSwitch
};
