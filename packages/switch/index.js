/*
 * @Author: fan wang
 * @Date: 2022-01-25 10:27:12
 * @LastEditTime: 2022-01-25 14:28:27
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-wf-ui\packages\switch\index.js
 */

import WfSwitch from './wf-switch';

WfSwitch.install = Vue => Vue.component(WfSwitch.name, WfSwitch);

export default WfSwitch;
