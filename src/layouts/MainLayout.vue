<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar
      :sidebarOpen="sidebarOpen"
      :activeItem="activeItem"
      :sidebarItems="sidebarItems"
      :sidebarIcons="sidebarIcons"
      @toggle-sidebar="toggleSidebar"
      @update-active="updateActiveItem"
    />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar
        :darkMode="darkMode"
        @toggle-sidebar="toggleSidebar"
        @toggle-dark="toggleDarkMode"
      />

      <main class="flex-1 overflow-y-auto p-4 sm:p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "@/components/DashboardSidebar.vue";
import Navbar from "@/components/DashboardNavbar.vue";

const sidebarOpen = ref(false);
const activeItem = ref("Dashboard");
const darkMode = ref(false);

const sidebarItems = [
  "Dashboard",
  "Users",
  "Analytics",
  "Reports",
  "AI Management",
  "Parent/Child",
  "Settings",
];

const sidebarIcons = {
  Dashboard: "dashboard",
  Users: "people",
  Analytics: "analytics",
  Reports: "description",
  "AI Management": "smart_toy",
  "Parent/Child": "family_restroom",
  Settings: "settings",
};

const routeMap = {
  Dashboard: "/",
  Users: "/users",
  Analytics: "/analytics",
  Reports: "/reports",
  "AI Management": "/ai-management",
  "Parent/Child": "/parent-child",
  Settings: "/settings",
};

const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    const found = Object.entries(routeMap).find(
      ([key, val]) => val === newPath
    );
    activeItem.value = found ? found[0] : "Dashboard";
  },
  { immediate: true }
);

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}

function updateActiveItem(item) {
  activeItem.value = item;
}

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
}
</script>
