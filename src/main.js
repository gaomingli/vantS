// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { createApp } from 'vue';
import { Button } from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
const app = createApp();
app.use(Button);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})