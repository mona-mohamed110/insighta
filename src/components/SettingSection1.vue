<template>
  <div class="w-full overflow-hidden">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
      <h1 class="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">System Settings</h1>
      <button
        class="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 px-4 py-2 rounded-full shadow text-sm font-medium text-gray-800 dark:text-gray-200 w-fit mx-auto sm:mx-0"
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4564 8.00016H13.803C13.5117 7.99954 13.2282 8.09437 12.9958 8.27014C12.7634 8.44592 12.595 8.69296 12.5164 8.9735L10.9497 14.5468C10.9396 14.5814 10.9186 14.6119 10.8897 14.6335C10.8609 14.6551 10.8258 14.6668 10.7897 14.6668C10.7537 14.6668 10.7186 14.6551 10.6897 14.6335C10.6609 14.6119 10.6398 14.5814 10.6297 14.5468L6.94971 1.4535C6.93962 1.41888 6.91856 1.38847 6.88971 1.36683C6.86086 1.34519 6.82578 1.3335 6.78971 1.3335C6.75365 1.3335 6.71856 1.34519 6.68971 1.36683C6.66086 1.38847 6.63981 1.41888 6.62971 1.4535L5.06305 7.02683C4.98469 7.30627 4.8173 7.55251 4.58629 7.72817C4.35528 7.90384 4.07326 7.99933 3.78305 8.00016H2.12305"
            stroke="#020817"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        System Status
      </button>
    </div>

    <!-- Table Section -->
    <section class="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow mb-6 transition-colors">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">Admin User Management</h2>
        <button
          class="bg-teal-700 hover:bg-teal-800 text-white px-3 py-1.5 rounded-md inline-flex items-center gap-1 text-sm sm:text-base w-fit mx-auto sm:mx-0"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Add Admin
        </button>
      </div>

      <!-- Table for large screens -->
      <div class="hidden sm:block overflow-x-auto">
        <table class="min-w-full text-sm text-left border-collapse border border-gray-200 dark:border-gray-700">
          <thead class="border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th class="py-3 px-2 text-gray-700 dark:text-white whitespace-nowrap border-b border-gray-200 dark:border-gray-700">Name</th>
              <th class="py-3 px-2 text-gray-700 dark:text-white whitespace-nowrap border-b border-gray-200 dark:border-gray-700">Email</th>
              <th class="py-3 px-2 text-gray-700 dark:text-white whitespace-nowrap border-b border-gray-200 dark:border-gray-700">Role</th>
              <th class="py-3 px-2 text-gray-700 dark:text-white whitespace-nowrap border-b border-gray-200 dark:border-gray-700">Last Login</th>
              <th class="py-3 px-2 text-gray-700 dark:text-white whitespace-nowrap border-b border-gray-200 dark:border-gray-700">Status</th>
              <th class="py-3 px-2 text-gray-700 dark:text-white whitespace-nowrap border-b border-gray-200 dark:border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="user in users" :key="user.email" class="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td class="py-3 px-2 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">{{ user.name }}</td>
              <td class="py-3 px-2 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">{{ user.email }}</td>
              <td class="py-3 px-2 border-b border-gray-200 dark:border-gray-700">
                <span :class="roleBadge(user.role)">
                  {{ user.role }}
                </span>
              </td>
              <td class="py-3 px-2 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">{{ user.lastLogin }}</td>
              <td class="py-3 px-2 border-b border-gray-200 dark:border-gray-700">
                <span :class="statusBadge(user.status)">
                  {{ user.status }}
                </span>
              </td>
              <td class="py-3 px-2 border-b border-gray-200 dark:border-gray-700">
                <div class="flex gap-2">
                  <button class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">✏️</button>
                  <button class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">❌</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Cards for mobile -->
      <div class="space-y-4 sm:hidden">
        <div
          v-for="user in users"
          :key="user.email"
          class="border rounded-lg p-4 shadow-sm border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors"
        >
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-semibold text-lg text-gray-900 dark:text-white">{{ user.name }}</h3>
            <span :class="statusBadge(user.status)">{{ user.status }}</span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-1">
            <strong>Email:</strong> {{ user.email }}
          </p>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-1">
            <strong>Role:</strong>
            <span :class="roleBadge(user.role)">{{ user.role }}</span>
          </p>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
            <strong>Last Login:</strong> {{ user.lastLogin }}
          </p>
          <div class="flex gap-3 justify-end">
            <button class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">✏️</button>
            <button class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">❌</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const users = [
  { name: "John Admin", email: "john@insighta.com", role: "Super Admin", lastLogin: "2024-01-15 14:30", status: "active" },
  { name: "Sarah Manager", email: "sarah@insighta.com", role: "Content Manager", lastLogin: "2024-01-15 12:15", status: "active" },
  { name: "Mike Analyst", email: "mike@insighta.com", role: "Data Analyst", lastLogin: "2024-01-14 18:45", status: "inactive" },
];

const roleBadge = (role) => {
  if (role === "Super Admin") return "bg-teal-700 text-white text-xs px-3 py-1 rounded-full";
  return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs px-3 py-1 rounded-full";
};

const statusBadge = (status) => {
  return status === "active"
    ? "bg-teal-700 text-white text-xs px-3 py-1 rounded-full"
    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs px-3 py-1 rounded-full";
};
</script>
