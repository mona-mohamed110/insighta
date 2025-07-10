<template>
  <div class="p-6 space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-800">Analytics Dashboard</h1>
      <span class="text-sm text-gray-400">Data updated hourly</span>
    </div>

    <div class="bg-white rounded-lg shadow p-4">
      <LineChartComponent />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="bg-white rounded-lg shadow p-4">
        <h2 class="text-lg font-extrabold text-gray-900 mb-4 text-left">
          Most Used Social Platforms
        </h2>
        <BarChartComponent />
      </div>

      <div class="bg-white rounded-lg shadow p-4 flex flex-col">
        <h2 class="text-lg font-extrabold text-gray-900 mb-4 text-left w-full">
          Content Types Consumed
        </h2>
        <div class="flex-grow flex items-center justify-center">
          <PieChartComponent />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white rounded-lg shadow p-4 text-center">
        <p class="text-sm text-gray-500">Average Session Duration</p>
        <p class="text-xl font-semibold text-gray-800">24.5 min</p>
        <p class="text-xs text-green-600">+2.3 min from last week</p>
      </div>
      <div class="bg-white rounded-lg shadow p-4 text-center">
        <p class="text-sm text-gray-500">User Engagement Rate</p>
        <p class="text-xl font-semibold text-gray-800">78.2%</p>
        <p class="text-xs text-green-600">+5.1% from last week</p>
      </div>
      <div class="bg-white rounded-lg shadow p-4 text-center">
        <p class="text-sm text-gray-500">Content Interaction Rate</p>
        <p class="text-xl font-semibold text-gray-800">92.8%</p>
        <p class="text-xs text-green-600">+1.2% from last week</p>
      </div>
    </div>
  </div>
</template>

<script>
import LineChartComponent from "../components/EmotionalTrendsLineChart.vue";
import PieChartComponent from "../components/EmotionalPieChart.vue";
import BarChartComponent from "../components/BarChartComponent.vue";

export default {
  name: "AnalyticsDashboard",
  components: {
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
  },
};
</script>
