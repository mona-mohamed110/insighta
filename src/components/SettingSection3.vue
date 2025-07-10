<template>
  <section class="bg-white p-4 rounded-lg shadow mb-6">
    <h2 class="text-3xl font-semibold text-gray-800 mb-4">
      System Usage & Performance
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="metric in metrics"
        :key="metric.title"
        class="border rounded p-3 flex flex-col"
      >
        <div class="flex justify-between items-center mb-1">
          <p class="text-sm font-medium">{{ metric.title }}</p>
          <svg
            class="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16v16H4z" />
          </svg>
        </div>
        <p class="text-xl font-semibold mb-1">{{ metric.value }}</p>
        <span
          :class="statusClass(metric.status)"
          class="self-start inline-flex items-center whitespace-nowrap"
        >
          {{ metric.status }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const metrics = [
  { title: "System Uptime", value: "99.8%", status: "excellent" },
  { title: "API Response Time", value: "145ms", status: "good" },
  { title: "Database Performance", value: "98.5%", status: "excellent" },
  { title: "Storage Usage", value: "67%", status: "good" },
  { title: "Memory Usage", value: "45%", status: "excellent" },
  { title: "CPU Usage", value: "23%", status: "excellent" },
];

const statusClass = (status) => {
  return status === "good"
    ? "text-xs bg-gray-100 text-gray-700 px-3 py-0.5 rounded-full"
    : "text-xs bg-teal-600 text-white px-3 py-0.5 rounded-full";
};
</script>
