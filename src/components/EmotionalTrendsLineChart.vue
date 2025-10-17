<template>
  <div class="h-80 transition-colors duration-300 bg-white dark:bg-gray-900 p-4 rounded-xl">
    <Line :data="computedData" :options="computedOptions" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

// reactive flag لمعرفة إذا الـ html فيه كلاس "dark"
const isDark = ref(
  typeof document !== "undefined" && document.documentElement.classList.contains("dark")
);

// نراقب تغيّر class على الـ <html> بحيث يتغيّر isDark لما المستخدم يبدّل الثيم
let observer = null;
onMounted(() => {
  if (typeof MutationObserver !== "undefined") {
    observer = new MutationObserver(() => {
      isDark.value = document.documentElement.classList.contains("dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  }
});
onUnmounted(() => {
  if (observer) observer.disconnect();
});

// بيانات الرسم
const baseLabels = ["May 31", "Jun 7", "Jun 14", "Jun 21", "Jun 28", "Jul 5"];
const datasets = [
  {
    label: "Positive",
    data: [40, 42, 43, 41, 44, 45],
    borderColor: "#22c55e",
    backgroundColor: "rgba(34,197,94,0.18)",
    tension: 0.3,
    pointBackgroundColor: "#22c55e",
  },
  {
    label: "Neutral",
    data: [35, 34, 33, 36, 35, 34],
    borderColor: "#3b82f6",
    backgroundColor: "rgba(59,130,246,0.18)",
    tension: 0.3,
    pointBackgroundColor: "#3b82f6",
  },
  {
    label: "Negative",
    data: [25, 24, 24, 23, 21, 21],
    borderColor: "#ef4444",
    backgroundColor: "rgba(239,68,68,0.18)",
    tension: 0.3,
    pointBackgroundColor: "#ef4444",
  },
];

const computedData = computed(() => ({
  labels: baseLabels,
  datasets: datasets.map((ds) => ({ ...ds })),
}));

const computedOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: isDark.value ? "#e5e7eb" : "#374151",
        font: { size: 12 },
      },
    },
    tooltip: {
      backgroundColor: isDark.value ? "#374151" : "#ffffff",
      titleColor: isDark.value ? "#f9fafb" : "#111827",
      bodyColor: isDark.value ? "#f9fafb" : "#111827",
      borderColor: isDark.value ? "#4b5563" : "#e5e7eb",
      borderWidth: 1,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { color: isDark.value ? "#d1d5db" : "#374151" },
      grid: {
        color: isDark.value ? "rgba(255,255,255,0.06)" : "#e5e7eb",
      },
    },
    x: {
      ticks: { color: isDark.value ? "#d1d5db" : "#374151" },
      grid: {
        color: isDark.value ? "rgba(255,255,255,0.03)" : "#e5e7eb",
      },
    },
  },
}));
</script>
