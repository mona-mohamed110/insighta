<template>
  <div class="bg-white rounded-xl shadow p-4 sm:p-6">
    <div
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4"
    >
      <h2 class="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">
        User Management
      </h2>
      <div class="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          class="border border-gray-300 rounded-md px-3 py-1 w-48 sm:w-60 focus:outline-none focus:ring focus:border-blue-300 text-sm"
        />
        <button
          class="text-gray-700 border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-50 transition text-sm"
        >
          All Types
        </button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white rounded-xl">
        <thead>
          <tr class="bg-gray-200 text-gray-600">
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
            class="hover:bg-gray-50"
          >
            <td class="p-2">{{ user.name }}</td>
            <td
              class="p-2 text-gray-800"
              style="
                font-family: &quot;Inter&quot;, sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
              "
            >
              {{ user.email }}
            </td>
            <td class="p-2">
              <span
                :class="[
                  'px-2 py-1 rounded',
                  accountTypeBg(user.accountType),
                  'text-xs font-medium',
                ]"
              >
                {{ user.accountType }}
              </span>
            </td>
            <td class="p-2">{{ user.lastLogin }}</td>
            <td class="p-2">
              <span
                :class="[
                  'px-2 py-1 rounded',
                  emotionBg(user.emotion),
                  'text-xs font-medium',
                ]"
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
  if (type === "Parent") return "bg-[#F3E8FF] text-purple-700";
  if (type === "User") return "bg-[#F3F4F6] text-blue-700";
  if (type === "Child") return "bg-[#FFEDD5] text-yellow-700";
  return "";
};

const emotionBg = (emotion) => {
  if (emotion === "Positive") return "bg-[#DCFCE7] text-green-700";
  if (emotion === "Neutral") return "bg-[#DBEAFE] text-blue-700";
  if (emotion === "Negative") return "bg-[#FEE2E2] text-red-700";
  return "";
};
</script>
