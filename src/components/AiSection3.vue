<template>
  <div class="space-y-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900 transition-colors duration-300">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Flagged AI Classifications</h2>

    <div
      v-for="(item, index) in classifications"
      :key="index"
      class="flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <!-- Left Content -->
      <div class="space-y-2">
        <p class="text-gray-800 dark:text-gray-100">"{{ item.text }}"</p>
        <div class="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
          <span
            class="px-2 py-0.5 rounded-full text-white"
            :class="badgeClass(item.sentiment)"
          >
            {{ item.sentiment }}
          </span>
          <span>Confidence: {{ item.confidence }}%</span>
          <span>{{ item.date }}</span>
        </div>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center space-x-2 mt-3 md:mt-0">
        <span
          v-if="item.status === 'approved'"
          class="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-0.5 rounded-full transition-colors duration-300"
        >
          approved
        </span>
        <template v-else>
          <button
            class="p-2 border border-gray-200 dark:border-gray-600 rounded hover:bg-green-50 dark:hover:bg-green-800 transition-colors"
            @click="approveItem(index)"
          >
            ✅
          </button>
          <button
            class="p-2 border border-gray-200 dark:border-gray-600 rounded hover:bg-red-50 dark:hover:bg-red-800 transition-colors"
            @click="rejectItem(index)"
          >
            ❌
          </button>
          <button
            class="p-2 border border-gray-200 dark:border-gray-600 rounded hover:bg-yellow-50 dark:hover:bg-yellow-800 transition-colors"
            @click="alertItem(index)"
          >
            ⚠️
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const classifications = reactive([
  {
    text: "I'm feeling really overwhelmed with everything right now...",
    sentiment: "negative",
    confidence: 75.0,
    date: "2024-01-15 14:30",
    status: "",
  },
  {
    text: "This new app feature is confusing me a lot",
    sentiment: "neutral",
    confidence: 62.0,
    date: "2024-01-15 14:25",
    status: "",
  },
  {
    text: "Having such a great day with my family!",
    sentiment: "positive",
    confidence: 91.0,
    date: "2024-01-15 14:20",
    status: "approved",
  },
]);

const badgeClass = (sentiment) => {
  switch (sentiment) {
    case "negative":
      return "bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-200";
    case "neutral":
      return "bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
    case "positive":
      return "bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200";
    default:
      return "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
  }
};

const approveItem = (index) => {
  classifications[index].status = "approved";
};
const rejectItem = (index) => {
  classifications[index].status = "rejected";
};
const alertItem = (index) => {
  alert(`Alert raised for: "${classifications[index].text}"`);
};
</script>
