<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Emotional Keywords -->
    <div class="border border-slate-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Emotional Keywords</h1>

      <div
        v-for="(category, idx) in categories"
        :key="idx"
        class="border border-slate-200 dark:border-gray-700 rounded-lg p-4 mb-4 transition-colors duration-300"
      >
        <div class="flex justify-between items-center mb-3">
          <strong class="text-base text-gray-700 dark:text-gray-200">{{ category.name }}</strong>
          <span class="text-xs bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 px-2 py-0.5 rounded-full transition-colors duration-300">
            {{ category.count }} keywords
          </span>
        </div>

        <div class="flex flex-wrap gap-2 mb-3">
          <span
            v-for="(word, i) in category.words"
            :key="i"
            class="text-sm border border-slate-300 dark:border-gray-600 rounded-full px-2 py-0.5 text-gray-700 dark:text-gray-200 transition-colors duration-300"
          >
            {{ word }}
          </span>
        </div>

        <div class="flex gap-3">
          <button
            class="flex items-center gap-1 border border-slate-300 dark:border-gray-600 rounded px-2 py-1 text-slate-600 dark:text-gray-200 hover:text-slate-800 dark:hover:text-white hover:border-slate-400 dark:hover:border-gray-500 transition-colors"
          >
            <i class="opacity-50">✏️</i>
            <span>Edit</span>
          </button>
          <button
            class="flex items-center gap-1 border border-slate-300 dark:border-gray-600 rounded px-2 py-1 text-slate-600 dark:text-gray-200 hover:text-slate-800 dark:hover:text-white hover:border-slate-400 dark:hover:border-gray-500 transition-colors"
          >
            <i class="opacity-50">⬆️</i>
            <span>Import</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Sentiment Detection Settings -->
    <div class="border border-slate-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Sentiment Detection Settings
      </h1>

      <div class="mb-4">
        <label class="block mb-1 font-medium text-gray-700 dark:text-gray-200">
          Sentiment Threshold: {{ threshold }}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          v-model="threshold"
          class="w-full accent-teal-700"
        />
      </div>

      <p class="text-xs text-gray-500 dark:text-gray-400 mb-4">
        Confidence level required for automatic classification
      </p>

      <div class="flex flex-col gap-3 text-gray-700 dark:text-gray-200">
        <label class="flex items-center gap-2">
          <input type="checkbox" v-model="actions.flagNegative" />
          Auto-flag high negative sentiment
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" v-model="actions.sendAlerts" />
          Send alerts for concerning content
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" v-model="actions.autoApprove" />
          Auto-approve high confidence positive
        </label>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const threshold = ref(75);

const actions = ref({
  flagNegative: true,
  sendAlerts: true,
  autoApprove: false,
});

const categories = [
  {
    name: "Positive",
    count: 127,
    words: ["happy", "joy", "excited", "love", "amazing"],
  },
  {
    name: "Neutral",
    count: 89,
    words: ["okay", "normal", "fine", "average", "regular"],
  },
  {
    name: "Negative",
    count: 156,
    words: ["sad", "angry", "depressed", "hate", "terrible"],
  },
];
</script>
