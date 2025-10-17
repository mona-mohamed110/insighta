<template>
  <div class="p-4 md:p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
      <h1 class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
        Analytics Dashboard
      </h1>
      <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        Data updated hourly
      </span>
    </div>

    <!-- Line Chart -->
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3 sm:p-4 overflow-x-auto transition-colors duration-300">
      <!-- نمرر is-dark للكومبوننتات عشان لو محتاجين يضبطوا ChartJS -->
      <LineChartComponent :is-dark="isDark" />
    </div>

    <!-- Bar & Pie Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <!-- Bar Chart -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3 sm:p-4 transition-colors duration-300">
        <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 text-left">
          Most Used Social Platforms
        </h2>
        <div class="overflow-x-auto">
          <BarChartComponent :is-dark="isDark" />
        </div>
      </div>

      <!-- Pie Chart -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3 sm:p-4 flex flex-col transition-colors duration-300">
        <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 text-left">
          Content Types Consumed
        </h2>
        <div class="flex-grow flex items-center justify-center overflow-x-auto">
          <PieChartComponent :is-dark="isDark" />
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Average Session Duration
        </p>
        <p class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mt-1">
          24.5 min
        </p>
        <p class="text-xs text-green-600 dark:text-green-400 mt-1">+2.3 min from last week</p>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">User Engagement Rate</p>
        <p class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mt-1">
          78.2%
        </p>
        <p class="text-xs text-green-600 dark:text-green-400 mt-1">+5.1% from last week</p>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Content Interaction Rate
        </p>
        <p class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mt-1">
          92.8%
        </p>
        <p class="text-xs text-green-600 dark:text-green-400 mt-1">+1.2% from last week</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import LineChartComponent from "@/components/EmotionalTrendsLineChart.vue";
import PieChartComponent from "@/components/EmotionalPieChart.vue";
import BarChartComponent from "@/components/BarChartComponent.vue";

/*
  isDark: flag تفاعليّ يحدّث نفسه لو تغيّر كلاس .dark على <html>
  بنستخدم MutationObserver عشان التحديث يكون فوري لما المستخدم يبدّل الثيم على مستوى الأب.
*/
const isDark = ref(false);
let __observer = null;

onMounted(() => {
  if (typeof document !== "undefined") {
    // حالة البداية
    isDark.value = document.documentElement.classList.contains("dark");

    // راقب تغيّر class على <html>
    if (typeof MutationObserver !== "undefined") {
      __observer = new MutationObserver(() => {
        isDark.value = document.documentElement.classList.contains("dark");
      });
      __observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    }
  }
});

onUnmounted(() => {
  if (__observer) __observer.disconnect();
});
</script>

<style scoped>
/* شوية ستايل بسيط للسكولبار */
::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
</style>
