<template>
  <section class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm transition-colors duration-300">
    <div class="flex justify-between items-center mb-6 flex-wrap gap-2">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100">
        AI Content Management
      </h2>
      <div class="flex gap-3">
        <button
          class="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <i class="opacity-60">⬆️</i>
          Upload Keywords
        </button>
        <button
          class="flex items-center gap-2 bg-teal-700 text-white rounded-md px-4 py-2 text-sm hover:bg-teal-800 transition-colors"
        >
          <i class="opacity-80">🔄</i>
          Retrain Model
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      <div
        v-for="(metric, index) in metrics"
        :key="index"
        class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-xl relative transition hover:shadow-sm"
      >
        <div class="absolute top-3 right-3 text-gray-400 dark:text-gray-400 opacity-30 text-lg">
          {{ metric.icon }}
        </div>
        <h3 class="text-sm mb-1 font-medium text-gray-700 dark:text-gray-200">
          {{ metric.title }}
        </h3>
        <p class="text-xl font-bold text-gray-800 dark:text-gray-100">
          {{ metric.value }}%
        </p>
        <div class="bg-gray-200 dark:bg-gray-700 h-3 rounded-full mt-2 mb-2 overflow-hidden">
          <div
            class="bg-teal-700 h-3"
            :style="{ width: metric.value + '%' }"
          ></div>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-300">
          Target: {{ metric.target }}%
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const metrics = [
  { title: "Accuracy", value: 94.2, target: 95, icon: "✅" },
  { title: "Precision", value: 92.8, target: 90, icon: "🎯" },
  { title: "Recall", value: 89.5, target: 90, icon: "🔍" },
  { title: "F1-Score", value: 91.1, target: 92, icon: "📊" },
];
</script>
