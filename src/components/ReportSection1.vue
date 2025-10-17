<template>
  <section
    class="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md transition-colors duration-300 mb-8"
  >
    <!-- Header -->
    <div
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
    >
      <h2
        class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-800 dark:text-white"
      >
        Reports & Analytics
      </h2>

      <div class="flex flex-wrap gap-3">
        <!-- Schedule Report Button -->
        <button
          class="flex items-center border border-gray-300 dark:border-gray-700 px-4 py-2.5 text-base sm:text-lg rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-200"
        >
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
            />
          </svg>
          Schedule Report
        </button>

        <!-- Generate Report Button -->
        <button
          class="flex items-center text-white px-4 py-2.5 text-base sm:text-lg rounded-lg hover:opacity-90 transition-all duration-200"
          style="background-color: #076372"
        >
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
          Generate Report
        </button>
      </div>
    </div>

    <!-- Generate New Report -->
    <div
      class="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm space-y-6 transition-colors duration-300"
    >
      <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Generate New Report
      </h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center"
      >
        <div
          class="bg-[#076372] text-white p-6 rounded-xl flex flex-col items-center cursor-pointer hover:opacity-90 transition-all"
        >
          <div class="flex items-center mb-2 text-lg font-medium">
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
              />
            </svg>
            Weekly Report
          </div>
          <p class="text-sm opacity-90">Last 7 days analysis</p>
        </div>

        <div
          class="border border-gray-200 dark:border-gray-700 p-6 rounded-xl flex flex-col items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
        >
          <div class="flex items-center mb-2 text-lg font-medium text-gray-800 dark:text-gray-200">
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
              />
            </svg>
            Monthly Report
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            Last 30 days summary
          </p>
        </div>

        <div
          class="border border-gray-200 dark:border-gray-700 p-6 rounded-xl flex flex-col items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
        >
          <div class="flex items-center mb-2 text-lg font-medium text-gray-800 dark:text-gray-200">
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
              />
            </svg>
            Quarterly Report
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            90 days comprehensive
          </p>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="border border-gray-200 dark:border-gray-700 p-5 rounded-xl flex items-center justify-between bg-white dark:bg-gray-900 transition-all"
        >
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ stat.title }}
            </p>
            <p class="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              {{ stat.value }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ stat.change }}
            </p>
          </div>
          <div
            :class="`flex items-center justify-center w-12 h-12 rounded-full ${stat.bg}`"
          >
            <component :is="stat.icon" class="w-7 h-7" :class="stat.color" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReportSection1",
  data() {
    return {
      stats: [
        {
          title: "High-Risk Users",
          value: 23,
          change: "-3 from last week",
          bg: "bg-red-50 dark:bg-red-900/30",
          color: "text-red-500",
          icon: {
            template: `
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856C18.07 18.42 19 16.35 19 14c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 2.35.93 4.42 2.062 6z"/>
              </svg>
            `,
          },
        },
        {
          title: "User Improvements",
          value: 156,
          change: "+12 from last week",
          bg: "bg-green-50 dark:bg-green-900/30",
          color: "text-green-500",
          icon: {
            template: `
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5L20 7"/>
              </svg>
            `,
          },
        },
        {
          title: "New Registrations",
          value: 89,
          change: "+5 from last week",
          bg: "bg-blue-50 dark:bg-blue-900/30",
          color: "text-blue-500",
          icon: {
            template: `
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A6 6 0 0112 4a6 6 0 016.879 13.804M12 14v6m-3-3h6"/>
              </svg>
            `,
          },
        },
        {
          title: "Active Sessions",
          value: 1247,
          change: "+45 from yesterday",
          bg: "bg-purple-50 dark:bg-purple-900/30",
          color: "text-purple-500",
          icon: {
            template: `
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            `,
          },
        },
      ],
    };
  },
};
</script>
