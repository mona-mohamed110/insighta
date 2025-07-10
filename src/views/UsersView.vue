<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-semibold">User Management</h1>
      <button
        class="bg-[#0D1C2E] text-white px-4 py-2 rounded hover:bg-[#12283A] transition"
      >
        Add New User
      </button>
    </div>

    <!-- Search & Filters Container -->
    <div
      class="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex flex-col md:flex-row md:items-center gap-3"
    >
      <input
        type="text"
        placeholder="Search users..."
        class="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />
      <select
        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      >
        <option>All Emotions</option>
        <option>Positive</option>
        <option>Neutral</option>
        <option>Negative</option>
      </select>

      <select
        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      >
        <option>All Types</option>
        <option>Parent</option>
        <option>User</option>
        <option>Child</option>
      </select>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto bg-white border border-gray-200 rounded-lg">
      <table class="min-w-full">
        <thead>
          <tr class="text-left border-b border-gray-200">
            <th class="px-4 py-3 font-medium">Name</th>
            <th class="px-4 py-3 font-medium">Email</th>
            <th class="px-4 py-3 font-medium">Type</th>
            <th class="px-4 py-3 font-medium">Last Login</th>
            <th class="px-4 py-3 font-medium">Emotional State</th>
            <th class="px-4 py-3 font-medium">Status</th>
            <th class="px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr
            v-for="(user, index) in users"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="px-4 py-4">{{ user.name }}</td>
            <td class="px-4 py-4">{{ user.email }}</td>
            <td class="px-4 py-4">
              <span :class="user.typeClass">{{ user.type }}</span>
            </td>
            <td class="px-4 py-4">{{ user.lastLogin }}</td>
            <td class="px-4 py-4">
              <span :class="user.emotionClass">{{ user.emotion }}</span>
            </td>
            <td class="px-4 py-4">
              <span :class="user.statusClass">{{ user.status }}</span>
            </td>
            <td class="px-4 py-4 flex gap-2">
              <button class="text-gray-600 hover:text-gray-900">👁️</button>
              <button class="text-gray-600 hover:text-gray-900">🚫</button>
              <button class="text-gray-600 hover:text-gray-900">⚠️</button>
            </td>
          </tr>
          <!-- Pagination Row -->
          <tr>
            <td colspan="7" class="px-4 py-4">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500"
                  >Showing 1-5 of 5 users</span
                >
                <div class="flex gap-2">
                  <button
                    class="border border-gray-300 text-gray-500 px-3 py-1 rounded hover:bg-gray-100"
                  >
                    Previous
                  </button>
                  <button
                    class="border border-gray-300 text-gray-500 px-3 py-1 rounded hover:bg-gray-100"
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
const users = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    type: "parent",
    typeClass: "bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded",
    lastLogin: "2024-01-15 14:30",
    emotion: "positive",
    emotionClass: "bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded",
    status: "active",
    statusClass: "bg-[#076372] text-white text-xs px-2 py-0.5 rounded",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    type: "user",
    typeClass: "bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded",
    lastLogin: "2024-01-15 12:15",
    emotion: "neutral",
    emotionClass: "bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded",
    status: "active",
    statusClass: "bg-[#076372] text-white text-xs px-2 py-0.5 rounded",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    type: "child",
    typeClass: "bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded",
    lastLogin: "2024-01-15 16:45",
    emotion: "negative",
    emotionClass: "bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded",
    status: "monitored",
    statusClass: "bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded",
  },
  {
    name: "David Brown",
    email: "david@example.com",
    type: "user",
    typeClass: "bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded",
    lastLogin: "2024-01-14 20:22",
    emotion: "positive",
    emotionClass: "bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded",
    status: "active",
    statusClass: "bg-[#076372] text-white text-xs px-2 py-0.5 rounded",
  },
  {
    name: "Sarah Davis",
    email: "sarah@example.com",
    type: "parent",
    typeClass: "bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded",
    lastLogin: "2024-01-15 09:30",
    emotion: "neutral",
    emotionClass: "bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded",
    status: "active",
    statusClass: "bg-[#076372] text-white text-xs px-2 py-0.5 rounded",
  },
];
</script>
