<template>
  <div
    class="bg-white dark:bg-gray-900 rounded-xl shadow p-4 sm:p-6 transition-colors duration-300"
  >
    <!-- Header -->
    <div
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"
    >
      <h2 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-0 text-gray-900 dark:text-white">
        User Management
      </h2>
      <div class="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          class="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md px-3 py-1 w-48 sm:w-60 focus:outline-none focus:ring focus:border-blue-400 dark:focus:border-blue-600 text-sm text-gray-900 dark:text-gray-100"
        />
        <button
          class="text-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm"
        >
          All Types
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white dark:bg-gray-900 rounded-xl text-gray-800 dark:text-gray-100">
        <thead>
          <tr class="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <th class="text-left p-2">Name</th>
            <th class="text-left p-2">Email</th>
            <th class="text-left p-2">Account Type</th>
            <th class="text-left p-2">Last Login</th>
            <th class="text-left p-2">Emotional State</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in users"
            :key="index"
            class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <td class="p-2">{{ user.name }}</td>
            <td
              class="p-2 text-gray-800 dark:text-gray-100"
              style="font-family: 'Inter', sans-serif; font-size: 16px; line-height: 24px;"
            >
              {{ user.email }}
            </td>
            <td class="p-2">
              <span
                :class="[ 'px-2 py-1 rounded text-xs font-medium', accountTypeBg(user.accountType) ]"
              >
                {{ user.accountType }}
              </span>
            </td>
            <td class="p-2">{{ user.lastLogin }}</td>
            <td class="p-2">
              <span
                :class="[ 'px-2 py-1 rounded text-xs font-medium', emotionBg(user.emotion) ]"
              >
                {{ user.emotion }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const users = ref([
  {
    name: "John Doe",
    email: "john@example.com",
    accountType: "Parent",
    lastLogin: "2024-07-03",
    emotion: "Positive",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    accountType: "User",
    lastLogin: "2024-07-02",
    emotion: "Neutral",
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    accountType: "Child",
    lastLogin: "2024-07-01",
    emotion: "Negative",
  },
  {
    name: "Sarah Willson",
    email: "sarah@example.com",
    accountType: "User",
    lastLogin: "2024-06-30",
    emotion: "Positive",
  },
]);

const accountTypeBg = (type) => {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const light = {
    Parent: "bg-purple-100 text-purple-700",
    User: "bg-blue-100 text-blue-700",
    Child: "bg-yellow-100 text-yellow-700",
  };

  const dark = {
    Parent: "bg-purple-900/30 text-purple-300",
    User: "bg-blue-900/30 text-blue-300",
    Child: "bg-yellow-900/30 text-yellow-300",
  };

  return isDark ? dark[type] : light[type];
};

const emotionBg = (emotion) => {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const light = {
    Positive: "bg-green-100 text-green-700",
    Neutral: "bg-blue-100 text-blue-700",
    Negative: "bg-red-100 text-red-700",
  };

  const dark = {
    Positive: "bg-green-900/30 text-green-300",
    Neutral: "bg-blue-900/30 text-blue-300",
    Negative: "bg-red-900/30 text-red-300",
  };

  return isDark ? dark[emotion] : light[emotion];
};
</script>
