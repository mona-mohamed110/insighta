<template>
  <header
    class="bg-white shadow p-4 flex justify-between items-center dark:bg-gray-800 dark:text-white"
  >
    <div class="flex items-center space-x-4">
      <button
        @click="$emit('toggle-sidebar')"
        class="material-icons cursor-pointer text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition"
      >
        menu
      </button>
      <h1
        class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white"
      >
        Mental Wellness Analytics Dashboard
      </h1>
    </div>

    <div class="flex items-center space-x-3 sm:space-x-4">
      <span
        @click="$emit('toggle-dark')"
        class="relative material-icons cursor-pointer text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition"
      >
        {{ darkMode ? "light_mode" : "dark_mode" }}
      </span>

د      <div class="relative">
        <span
          class="material-icons cursor-pointer text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition"
        >
          notifications
        </span>
        <span
          class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"
        ></span>
      </div>

      <div class="flex items-center space-x-2">
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="Admin"
          class="w-8 h-8 rounded-full object-cover"
        />
        <span class="font-medium text-gray-700 dark:text-white">Admin</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  darkMode: Boolean,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.material-icons {
  font-size: 24px;
}
</style>
