<template>
  <aside
    v-show="sidebarOpen"
    class="w-56 bg-[#065666] text-white flex flex-col transition-all duration-300"
  >
    <div class="p-4 text-lg font-bold flex items-center space-x-2">
      <span class="flex items-center space-x-2">
        <span class="w-16 h-16">
          <svg
            class="w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="30"
              y="37"
              width="32"
              height="32"
              rx="8"
              fill="url(#paint0_linear_29_883)"
            />
            <path
              d="M54.3333 52.9998H52.2666C51.9024 52.9991 51.548 53.1176 51.2576 53.3373C50.9671 53.557 50.7566 53.8658 50.6583 54.2165L48.7 61.1832C48.6873 61.2264 48.661 61.2645 48.625 61.2915C48.5889 61.3186 48.545 61.3332 48.5 61.3332C48.4549 61.3332 48.411 61.3186 48.375 61.2915C48.3389 61.2645 48.3126 61.2264 48.3 61.1832L43.7 44.8165C43.6873 44.7732 43.661 44.7352 43.625 44.7082C43.5889 44.6811 43.545 44.6665 43.5 44.6665C43.4549 44.6665 43.411 44.6811 43.375 44.7082C43.3389 44.7352 43.3126 44.7732 43.3 44.8165L41.3416 51.7832C41.2437 52.1325 41.0344 52.4403 40.7457 52.6598C40.4569 52.8794 40.1044 52.9988 39.7416 52.9998H37.6666"
              stroke="white"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_29_883"
                x1="30"
                y1="37"
                x2="62"
                y2="69"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3B82F6" />
                <stop offset="1" stop-color="#9333EA" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="text-xl font-bold">Insighta</span>
      </span>
    </div>
    <nav class="flex-1">
      <ul class="space-y-1">
        <li v-for="item in sidebarItems" :key="item">
          <router-link
            :to="getRoute(item)"
            class="flex items-center space-x-3 px-3 py-2 rounded-md text-sm"
            :class="isActiveRoute(getRoute(item)) ? 'bg-white text-[#065666] font-semibold' : 'hover:bg-[#0b4c59]'"
          >
            <span class="material-icons">{{ sidebarIcons[item] }}</span>
            <span>{{ item }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { defineProps } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  sidebarOpen: Boolean,
  sidebarItems: Array,
  sidebarIcons: Object,
});

const route = useRoute();

function getRoute(item) {
  switch (item) {
    case "Dashboard":
      return "/app/dashboard";
    case "Users":
      return "/app/users";
    case "Analytics":
      return "/app/analytics";
    case "Reports":
      return "/app/reports";
    case "AI Management":
      return "/app/ai-management";
    case "Parent/Child":
      return "/app/parent-child";
    case "Settings":
      return "/app/settings";
    default:
      return "/app/dashboard";
  }
}

function isActiveRoute(path) {
  return route.path === path;
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.material-icons {
  font-size: 20px;
}
</style>
