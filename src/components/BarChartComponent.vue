<template>
  <div class="w-full">
    <canvas ref="barChart"></canvas>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Chart from "chart.js/auto";

export default {
  name: "BarChartComponent",
  setup() {
    const barChart = ref(null);

    onMounted(() => {
      new Chart(barChart.value, {
        type: "bar",
        data: {
          labels: [
            "TikTok",
            "Instagram",
            "Facebook",
            "Twitter",
            "YouTube",
            "Snapchat",
          ],
          datasets: [
            {
              label: "Usage",
              data: [4500, 3100, 2800, 1900, 5000, 1600],
              backgroundColor: "#3B82F6", // اللون الأزرق
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });

    return {
      barChart,
    };
  },
};
</script>
