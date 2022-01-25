/*
 * @Author: fan wang
 * @Date: 2022-01-25 09:50:15
 * @LastEditTime: 2022-01-25 13:20:02
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-wf-ui\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
