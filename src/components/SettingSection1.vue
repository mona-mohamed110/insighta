<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-4xl font-semibold">System Settings</h1>
      <button
        class="flex items-center gap-2 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 rounded-full shadow text-sm font-medium text-gray-800"
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

    <section class="bg-white p-6 rounded-lg shadow mb-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-3xl font-semibold">Admin User Management</h2>
        <button
          class="bg-teal-700 hover:bg-teal-800 text-white px-3 py-1.5 rounded-md inline-flex items-center gap-1"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Admin
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full text-sm text-left">
          <thead class="border-b">
            <tr>
              <th class="py-3 text-gray-600">Name</th>
              <th class="py-3 text-gray-600">Email</th>
              <th class="py-3 text-gray-600">Role</th>
              <th class="py-3 text-gray-600">Last Login</th>
              <th class="py-3 text-gray-600">Status</th>
              <th class="py-3 text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr
              v-for="user in users"
              :key="user.email"
              class="hover:bg-gray-50"
            >
              <td class="py-4">{{ user.name }}</td>
              <td class="py-4">{{ user.email }}</td>
              <td class="py-4">
                <span :class="roleBadge(user.role)">
                  {{ user.role }}
                </span>
              </td>
              <td class="py-4">{{ user.lastLogin }}</td>
              <td class="py-4">
                <span :class="statusBadge(user.status)">
                  {{ user.status }}
                </span>
              </td>
              <td class="py-4">
                <div class="flex gap-2">
                  <button class="text-gray-500 hover:text-gray-700">
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <button class="text-gray-500 hover:text-gray-700">
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536M9 11l3.586-3.586a2 2 0 012.828 0l3.172 3.172a2 2 0 010 2.828L11 20H4v-7l5-5z"
                      />
                    </svg>
                  </button>
                  <button class="text-gray-500 hover:text-gray-700">
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
const users = [
  {
    name: "John Admin",
    email: "john@insighta.com",
    role: "Super Admin",
    lastLogin: "2024-01-15 14:30",
    status: "active",
  },
  {
    name: "Sarah Manager",
    email: "sarah@insighta.com",
    role: "Content Manager",
    lastLogin: "2024-01-15 12:15",
    status: "active",
  },
  {
    name: "Mike Analyst",
    email: "mike@insighta.com",
    role: "Data Analyst",
    lastLogin: "2024-01-14 18:45",
    status: "inactive",
  },
];

const roleBadge = (role) => {
  if (role === "Super Admin")
    return "bg-teal-700 text-white text-xs px-3 py-1 rounded-full";
  return "bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full";
};

const statusBadge = (status) => {
  return status === "active"
    ? "bg-teal-700 text-white text-xs px-3 py-1 rounded-full"
    : "bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full";
};
</script>
