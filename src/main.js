// import { createApp } from "vue";
// import App from "./App.vue";
// import { createRouter, createWebHistory } from "vue-router";
// import DashboardView from "./views/DashboardView.vue";
// import "./main.css";

// const routes = [{ path: "/", component: DashboardView }];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// createApp(App).use(router).mount("#app");
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // ✅ استدعاء الراوتر من ملف منفصل
import "./main.css";

createApp(App).use(router).mount("#app");
