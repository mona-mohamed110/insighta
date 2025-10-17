<template>
  <section
    class="p-4 bg-white dark:bg-gray-900 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 transition-colors duration-300"
  >
    <!-- Recent Reports -->
    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Recent Reports
      </h2>

      <div class="space-y-3">
        <div
          v-for="(report, i) in reports"
          :key="i"
          class="border border-gray-200 dark:border-gray-700 rounded-lg p-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
        >
          <div>
            <h3 class="font-medium text-gray-800 dark:text-gray-100">
              {{ report.title }}
            </h3>
            <p class="text-sm text-gray-500">{{ report.date }}</p>
            <span
              class="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-0.5 rounded"
            >
              {{ report.type }}
            </span>
          </div>

          <div class="flex items-center gap-2">
            <span
              class="text-xs font-medium px-2 py-0.5 rounded-full"
              :class="{
                'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400':
                  report.status === 'completed',
                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400':
                  report.status === 'processing'
              }"
            >
              {{ report.status }}
            </span>

            <button
              v-if="report.status === 'completed'"
              class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- System Activity Logs -->
    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        System Activity Logs
      </h2>

      <div class="space-y-3">
        <div
          v-for="(log, i) in logs"
          :key="i"
          class="rounded-lg p-3 flex justify-between items-start bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
        >
          <div class="flex gap-2">
            <span
              class="h-3 w-3 rounded-full mt-1"
              :class="{
                'bg-green-500': log.color === 'green',
                'bg-yellow-500': log.color === 'yellow',
                'bg-red-500': log.color === 'red'
              }"
            ></span>
            <div>
              <p class="text-gray-800 dark:text-gray-100">
                {{ log.message }}
              </p>
              <p class="text-xs text-gray-500">{{ log.service }}</p>
            </div>
          </div>
          <p class="text-xs text-gray-500">{{ log.time }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReportSection2",
  data() {
    return {
      reports: [
        {
          title: "Weekly Emotional Analysis Report",
          date: "2024-01-15",
          type: "Weekly",
          status: "completed",
        },
        {
          title: "Monthly User Engagement Summary",
          date: "2024-01-01",
          type: "Monthly",
          status: "completed",
        },
        {
          title: "High-Risk Users Quarterly Review",
          date: "2024-01-01",
          type: "Quarterly",
          status: "processing",
        },
      ],
      logs: [
        {
          message: "User emotional analysis completed successfully",
          service: "AI Service",
          time: "2024-01-15 14:30:22",
          color: "green",
        },
        {
          message: "High negative sentiment detected for user ID: 2847",
          service: "Monitoring System",
          time: "2024-01-15 14:28:15",
          color: "yellow",
        },
        {
          message: "Failed to process emotional keywords batch",
          service: "AI Service",
          time: "2024-01-15 14:25:03",
          color: "red",
        },
        {
          message: "Database backup completed successfully",
          service: "System",
          time: "2024-01-15 14:20:11",
          color: "green",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* تحسين بسيط للانتقالات */
section {
  transition: background-color 0.3s ease;
}
</style>
