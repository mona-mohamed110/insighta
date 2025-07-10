<template>
  <section class="bg-white p-6 rounded-lg shadow-sm">
    <div class="flex justify-between items-center mb-6 flex-wrap gap-2">
      <h2 class="text-xl font-semibold">AI Content Management</h2>
      <div class="flex gap-3">
        <button
          class="flex items-center gap-2 border border-slate-300 rounded-md px-4 py-2 text-sm hover:bg-slate-50"
        >
          <i class="opacity-60">⬆️</i>
          Upload Keywords
        </button>
        <button
          class="flex items-center gap-2 bg-teal-700 text-white rounded-md px-4 py-2 text-sm hover:bg-teal-800"
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
        class="bg-slate-50 border border-slate-200 p-5 rounded-xl relative transition hover:shadow-sm"
      >
        <div class="absolute top-3 right-3 text-slate-400 opacity-30 text-lg">
          {{ metric.icon }}
        </div>
        <h3 class="text-sm mb-1 font-medium">{{ metric.title }}</h3>
        <p class="text-xl font-bold">{{ metric.value }}%</p>
        <div class="bg-slate-200 h-3 rounded-full mt-2 mb-2 overflow-hidden">
          <div
            class="bg-teal-700 h-3"
            :style="{ width: metric.value + '%' }"
          ></div>
        </div>
        <p class="text-xs text-slate-500">Target: {{ metric.target }}%</p>
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
