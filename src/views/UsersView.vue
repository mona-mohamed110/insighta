<template>
  <div
    class="p-4 md:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300"
  >
    <!-- Header -->
    <div
      class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4"
    >
      <h1 class="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
        User Management
      </h1>
      <button
        class="bg-[#0D1C2E] text-white px-4 py-2 rounded-lg hover:bg-[#12283A] transition text-sm dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Add New User
      </button>
    </div>

    <!-- Filters -->
    <div
      class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6 flex flex-col md:flex-row md:items-center gap-3 transition-colors duration-300"
    >
      <input
        type="text"
        placeholder="Search users..."
        class="w-full md:flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400 dark:focus:border-blue-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      />

      <select
        class="w-full md:w-auto border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400 dark:focus:border-blue-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      >
        <option>All Emotions</option>
        <option>Positive</option>
        <option>Neutral</option>
        <option>Negative</option>
      </select>

      <select
        class="w-full md:w-auto border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400 dark:focus:border-blue-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      >
        <option>All Types</option>
        <option>Parent</option>
        <option>User</option>
        <option>Child</option>
      </select>
    </div>

    <!-- Table -->
    <div
      class="overflow-x-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-300"
    >
      <table class="min-w-full text-sm text-gray-900 dark:text-gray-100">
        <thead>
          <tr class="text-left border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
            <th class="px-3 py-2 font-medium">Name</th>
            <th class="px-3 py-2 font-medium">Email</th>
            <th class="px-3 py-2 font-medium">Type</th>
            <th class="px-3 py-2 font-medium">Last Login</th>
            <th class="px-3 py-2 font-medium">Emotion</th>
            <th class="px-3 py-2 font-medium">Status</th>
            <th class="px-3 py-2 font-medium">Actions</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
          <tr
            v-for="(user, index) in users"
            :key="index"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <td class="px-3 py-3 whitespace-nowrap">{{ user.name }}</td>
            <td class="px-3 py-3 whitespace-nowrap">{{ user.email }}</td>
            <td class="px-3 py-3">
              <span :class="badgeClass(user.type, 'type')">{{ user.type }}</span>
            </td>
            <td class="px-3 py-3 whitespace-nowrap">{{ user.lastLogin }}</td>
            <td class="px-3 py-3">
              <span :class="badgeClass(user.emotion, 'emotion')">{{ user.emotion }}</span>
            </td>
            <td class="px-3 py-3">
              <span :class="badgeClass(user.status, 'status')">{{ user.status }}</span>
            </td>
            <td class="px-3 py-3 flex gap-2">
              <button
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                👁️
              </button>
              <button
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                🚫
              </button>
              <button
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                ⚠️
              </button>
            </td>
          </tr>

          <!-- Pagination -->
          <tr>
            <td colspan="7" class="px-3 py-3">
              <div
                class="flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="text-xs sm:text-sm">Showing 1–5 of 5 users</span>
                <div class="flex gap-2">
                  <button
                    class="border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    Previous
                  </button>
                  <button
                    class="border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
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
    name: "Alice Johnson",
    email: "alice@example.com",
    type: "Parent",
    lastLogin: "2024-01-15 14:30",
    emotion: "Positive",
    status: "Active",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    type: "User",
    lastLogin: "2024-01-15 12:15",
    emotion: "Neutral",
    status: "Active",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    type: "Child",
    lastLogin: "2024-01-15 16:45",
    emotion: "Negative",
    status: "Monitored",
  },
  {
    name: "David Brown",
    email: "david@example.com",
    type: "User",
    lastLogin: "2024-01-14 20:22",
    emotion: "Positive",
    status: "Active",
  },
  {
    name: "Sarah Davis",
    email: "sarah@example.com",
    type: "Parent",
    lastLogin: "2024-01-15 09:30",
    emotion: "Neutral",
    status: "Active",
  },
]);

const badgeClass = (value, category) => {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const styles = {
    type: {
      Parent: {
        light: "bg-purple-100 text-purple-700",
        dark: "bg-purple-900/30 text-purple-300",
      },
      User: {
        light: "bg-gray-100 text-gray-700",
        dark: "bg-gray-700/50 text-gray-300",
      },
      Child: {
        light: "bg-orange-100 text-orange-700",
        dark: "bg-orange-900/30 text-orange-300",
      },
    },
    emotion: {
      Positive: {
        light: "bg-green-100 text-green-700",
        dark: "bg-green-900/30 text-green-300",
      },
      Neutral: {
        light: "bg-blue-100 text-blue-700",
        dark: "bg-blue-900/30 text-blue-300",
      },
      Negative: {
        light: "bg-red-100 text-red-700",
        dark: "bg-red-900/30 text-red-300",
      },
    },
    status: {
      Active: {
        light: "bg-[#076372] text-white",
        dark: "bg-[#0EA5E9]/30 text-blue-300",
      },
      Monitored: {
        light: "bg-gray-100 text-gray-700",
        dark: "bg-gray-700/50 text-gray-300",
      },
    },
  };

  const current = styles[category]?.[value];
  if (!current) return "px-2 py-0.5 rounded text-xs";

  return `px-2 py-0.5 rounded text-xs font-medium ${isDark ? current.dark : current.light}`;
};
</script>
