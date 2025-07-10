<template>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
    <div class="w-48 h-48 sm:w-56 sm:h-56">
      <Pie :data="pieData" :options="pieOptions" />
    </div>

    <div class="flex flex-col gap-2">
      <div
        v-for="(item, index) in pieLabels"
        :key="index"
        class="flex items-center gap-2 text-sm font-medium"
      >
        <span
          :style="{ backgroundColor: item.color }"
          class="w-4 h-4 rounded"
        ></span>
        <span class="text-gray-700"
          >{{ item.label }} {{ item.percentage }}%</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, ArcElement);

const pieData = {
  labels: ["Positive", "Neutral", "Negative"],
  datasets: [
    {
      data: [45, 35, 20],
      backgroundColor: ["#22c55e", "#3b82f6", "#ef4444"],
    },
  ],
};

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
};

const pieLabels = [
  { label: "Positive", percentage: 45, color: "#22c55e" },
  { label: "Neutral", percentage: 35, color: "#3b82f6" },
  { label: "Negative", percentage: 20, color: "#ef4444" },
];
</script>
