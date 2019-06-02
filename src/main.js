import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VCalendar from 'v-calendar'

Vue.use(VCalendar, {
  componentPrefix: 'vc' // Now use vc-calendar and vc-date-picker
})

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
