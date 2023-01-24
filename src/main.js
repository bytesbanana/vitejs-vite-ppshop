import { createApp } from "vue";
import * as VueRouter from "vue-router";
import "./style.css";
import App from "./App.vue";
import UploadSlip from "./page/UploadSlip.vue";
import UploadResult from "./page/UploadResult.vue";

const routes = [
  { path: "/slip", component: UploadSlip },
  { path: "/result", component: UploadResult },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(router);
app.mount("#app");
