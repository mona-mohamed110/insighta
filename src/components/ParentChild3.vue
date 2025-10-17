<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 p-4">
    <!-- Alert Configuration -->
    <div
      class="p-4 rounded-xl shadow-md bg-white dark:bg-gray-900 transition-colors"
    >
      <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Alert Configuration
      </h2>

      <!-- Notification Triggers -->
      <div class="mb-4">
        <p class="text-base sm:text-lg font-medium mb-2 text-gray-600 dark:text-gray-300">
          Notification Triggers
        </p>
        <ul class="space-y-3">
          <li
            v-for="(item, index) in triggers"
            :key="index"
            class="flex items-center justify-between"
          >
            <span class="text-sm sm:text-base text-gray-700 dark:text-gray-200">
              {{ item.label }}
            </span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                v-model="item.checked"
              />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-teal-600 dark:bg-gray-700 dark:peer-checked:bg-teal-500 transition"
              ></div>
              <div
                class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow dark:bg-gray-300 peer-checked:translate-x-5 transition-transform"
              ></div>
            </label>
          </li>
        </ul>
      </div>

      <!-- Recent Alerts -->
      <div>
        <p class="text-lg sm:text-xl font-medium mb-2 text-gray-600 dark:text-gray-300">
          Recent Alerts
        </p>
        <ul class="space-y-2">
          <li
            v-for="(alert, index) in alerts"
            :key="index"
            class="flex items-center px-3 py-2 rounded"
            :class="alertClass(alert.type)"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01M12 5c-3.866 0-7 3.134-7 7s3.134 7 7 7 
                7-3.134 7-7-3.134-7-7-7z"
              />
            </svg>
            <span>
              <strong>{{ alert.name }}</strong> - {{ alert.message }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Wellness Resources -->
    <div
      class="p-4 rounded-xl shadow-md bg-white dark:bg-gray-900 transition-colors flex flex-col"
    >
      <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Wellness Resources for Parents
      </h2>

      <div class="flex-1 space-y-3">
        <div
          v-for="(resource, index) in resources"
          :key="index"
          class="border rounded-lg p-3 border-gray-200 dark:border-gray-700 transition-colors"
        >
          <div class="flex justify-between items-center mb-1">
            <p class="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-200">
              {{ resource.title }}
            </p>
            <span class="text-xs text-gray-500 dark:text-gray-400">{{ resource.tag }}</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {{ resource.description }}
          </p>
          <button
            class="inline-flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded px-2 py-1 transition-colors"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 12h16M12 4l8 8-8 8"
              />
            </svg>
            Share with Parents
          </button>
        </div>
      </div>

      <!-- Footer Button -->
      <button
        class="mt-6 bg-[#076372] hover:bg-[#065358] dark:bg-teal-700 dark:hover:bg-teal-600 text-white w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7562 9.93343C13.7495 8.9601 14.7562 7.79343 14.7562 6.26676C14.7562 5.2943 14.3699 4.36167 13.6822 3.67404C12.9946 2.98641 12.062 2.6001 11.0895 2.6001C9.91619 2.6001 9.08952 2.93343 8.08952 3.93343C7.08952 2.93343 6.26285 2.6001 5.08952 2.6001C4.11706 2.6001 3.18443 2.98641 2.49679 3.67404C1.80916 4.36167 1.42285 5.2943 1.42285 6.26676C1.42285 7.8001 2.42285 8.96676 3.42285 9.93343L8.08952 14.6001L12.7562 9.93343Z"
            stroke="#F8FAFC"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Send Wellness Tips
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "AlertAndWellnessSection",
  data() {
    return {
      triggers: [
        { label: "High negative sentiment detected", checked: true },
        { label: "Concerning keywords flagged", checked: true },
        { label: "Unusual activity patterns", checked: false },
        { label: "Extended periods of negative mood", checked: true },
      ],
      alerts: [
        {
          name: "Michael Brown",
          message: "High negative sentiment",
          type: "negative",
        },
        {
          name: "Emma Johnson",
          message: "Unusual activity pattern",
          type: "warning",
        },
        {
          name: "Alice Johnson",
          message: "Positive engagement",
          type: "positive",
        },
      ],
      resources: [
        {
          title: "Digital Wellness for Teens",
          tag: "Screen Time",
          description: "Guide to healthy social media habits",
        },
        {
          title: "Recognizing Mental Health Signs",
          tag: "Awareness",
          description: "Early indicators to watch for in teenagers",
        },
        {
          title: "Communication Strategies",
          tag: "Parenting",
          description: "How to talk to teens about emotions",
        },
      ],
    };
  },
  methods: {
    alertClass(type) {
      switch (type) {
        case "negative":
          return "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300";
        case "warning":
          return "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
        case "positive":
          return "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300";
        default:
          return "bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
      }
    },
  },
};
</script>
