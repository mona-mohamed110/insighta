<template>
  <div
    class="flex flex-col sm:flex-row items-center justify-center gap-6 bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow transition-all duration-300"
  >
    <!-- المخطط -->
    <div class="w-48 h-48 sm:w-56 sm:h-56">
      <Pie :data="chartData" :options="chartOptions" />
    </div>

    <!-- التسميات -->
    <div class="flex flex-col gap-3">
      <div
        v-for="(item, index) in pieLabels"
        :key="index"
        class="flex items-center gap-2 text-sm sm:text-base font-medium transition-colors"
      >
        <span
          :style="{ backgroundColor: item.color }"
          class="w-4 h-4 rounded"
        ></span>
        <span class="text-gray-700 dark:text-gray-200">
          {{ item.label }} — {{ item.percentage }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, ArcElement, Legend } from "chart.js";

ChartJS.register(Title, Tooltip, ArcElement, Legend);

const isDark = ref(
  window.matchMedia("(prefers-color-scheme: dark)").matches
);

// تحديث تلقائي عند تغيير النظام
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  isDark.value = e.matches;
});

// بيانات المخطط
const baseData = [45, 35, 20];

const chartData = ref({
  labels: ["Positive", "Neutral", "Negative"],
  datasets: [
    {
      data: baseData,
      backgroundColor: ["#22c55e", "#3b82f6", "#ef4444"],
      borderColor: isDark.value ? "#1f2937" : "#ffffff",
      borderWidth: 3,
    },
  ],
});

// إعدادات المخطط
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: isDark.value ? "#374151" : "#f9fafb",
      titleColor: isDark.value ? "#f9fafb" : "#111827",
      bodyColor: isDark.value ? "#f9fafb" : "#111827",
      borderColor: isDark.value ? "#4b5563" : "#e5e7eb",
      borderWidth: 1,
      displayColors: false,
    },
  },
});

// تسميات توضيحية بجانب المخطط
const pieLabels = [
  { label: "Positive", percentage: 45, color: "#22c55e" },
  { label: "Neutral", percentage: 35, color: "#3b82f6" },
  { label: "Negative", percentage: 20, color: "#ef4444" },
];

// تحديث ديناميكي عند التبديل بين Dark / Light
watch(isDark, (newVal) => {
  chartData.value.datasets[0].borderColor = newVal ? "#1f2937" : "#ffffff";
  chartOptions.value.plugins.tooltip.backgroundColor = newVal ? "#374151" : "#f9fafb";
  chartOptions.value.plugins.tooltip.titleColor = newVal ? "#f9fafb" : "#111827";
  chartOptions.value.plugins.tooltip.bodyColor = newVal ? "#f9fafb" : "#111827";
});
</script>
