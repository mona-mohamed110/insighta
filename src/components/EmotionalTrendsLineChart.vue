<template>
  <div class="h-80">
    <Line :data="lineData" :options="lineOptions" />
  </div>
</template>

<script setup>
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

const lineData = {
  labels: ["May 31", "Jun 7", "Jun 14", "Jun 21", "Jun 28", "Jul 5"],
  datasets: [
    {
      label: "Positive",
      data: [40, 42, 43, 41, 44, 45],
      borderColor: "#22c55e",
      backgroundColor: "rgba(34, 197, 94, 0.2)",
      tension: 0.3,
    },
    {
      label: "Neutral",
      data: [35, 34, 33, 36, 35, 34],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      tension: 0.3,
    },
    {
      label: "Negative",
      data: [25, 24, 24, 23, 21, 21],
      borderColor: "#ef4444",
      backgroundColor: "rgba(239, 68, 68, 0.2)",
      tension: 0.3,
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#374151",
        font: { size: 14 },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { color: "#374151" },
    },
    x: {
      ticks: { color: "#374151" },
    },
  },
};
</script>
