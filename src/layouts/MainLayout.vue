<template>
  <div
    :class="{ dark: darkMode }"
    class="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
  >
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

      <main
        class="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
      >
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
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

// ✅ حفظ الوضع اللي المستخدم اختاره في LocalStorage
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    darkMode.value = true;
    document.documentElement.classList.add("dark");
  }
});

watch(
  () => route.path,
  (newPath) => {
    const found = Object.entries(routeMap).find(
      ([, val]) => val === newPath
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

// ✅ التبديل بين Dark و Light وتحديث الصفحة كلها
function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
</script>
