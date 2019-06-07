import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VCalendar from "v-calendar";
import "./boot";

console.log({
  currRoute: router.currentRoute,
  href: new URLSearchParams(location.search)
});

Vue.use(VCalendar, {
  componentPrefix: "vc" // Now use vc-calendar and vc-date-picker
});

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

window.Vue = Vue;
window.vRouter = router;
window.vStore = store;
