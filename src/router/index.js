import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import DashboardView from "@/views/DashboardView.vue";
import UsersView from "@/views/UsersView.vue";
import AnalyticsDashboard from "@/views/AnalyticsDashboard.vue";
import ReportsView from "@/views/ReportsView.vue";
import AIManagement from "@/views/AIManagement.vue";
import ParentChild from "@/views/ParentChild.vue";
import SettingsPage from "@/views/SettingsPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/app",
    component: MainLayout,
    children: [
      { path: "", redirect: "/app/dashboard" }, // مهم هنا: "/app/dashboard"
      { path: "dashboard", component: DashboardView },
      { path: "users", component: UsersView },
      { path: "analytics", component: AnalyticsDashboard },
      { path: "reports", component: ReportsView },
      { path: "ai-management", component: AIManagement },
      { path: "parent-child", component: ParentChild },
      { path: "settings", component: SettingsPage },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
