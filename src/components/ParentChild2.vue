<template>
  <section class="w-full bg-white dark:bg-gray-900 p-4 rounded-lg shadow mb-6 transition-colors duration-300">
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
      Linked Parent-Child Accounts
    </h2>

    <!-- ✅ جدول متجاوب -->
    <div class="overflow-x-auto rounded-lg border border-gray-100 dark:border-gray-700">
      <table class="min-w-full text-left text-sm text-gray-700 dark:text-gray-300">
        <thead class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
          <tr>
            <th class="px-3 py-2">Parent</th>
            <th class="px-3 py-2">Child</th>
            <th class="px-3 py-2">Age</th>
            <th class="px-3 py-2">Emotional State</th>
            <th class="px-3 py-2 hidden md:table-cell">Last Activity</th>
            <th class="px-3 py-2 text-center">Alerts</th>
            <th class="px-3 py-2 text-center">Sharing</th>
            <th class="px-3 py-2 text-center">Actions</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          <tr v-for="(item, i) in users" :key="i" class="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td class="px-3 py-3">
              <div class="font-medium text-gray-800 dark:text-gray-100">{{ item.parent }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ item.email }}</div>
            </td>

            <td class="px-3 py-3">{{ item.child }}</td>
            <td class="px-3 py-3">{{ item.age }}</td>

            <td class="px-3 py-3">
              <span
                :class="[
                  'px-2 py-1 rounded-full text-xs font-medium capitalize',
                  item.state === 'positive'
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : item.state === 'negative'
                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                ]"
              >
                {{ item.state }}
              </span>
            </td>

            <td class="px-3 py-3 hidden md:table-cell">
              {{ item.last }}
            </td>

            <!-- Switches -->
            <td class="px-3 py-3 text-center">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" :checked="item.alert" />
                <div
                  class="w-10 h-5 bg-gray-200 rounded-full relative transition peer-checked:bg-green-500 dark:bg-gray-700"
                >
                  <div
                    class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"
                  ></div>
                </div>
              </label>
            </td>

            <td class="px-3 py-3 text-center">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" :checked="item.share" />
                <div
                  class="w-10 h-5 bg-gray-200 rounded-full relative transition peer-checked:bg-blue-500 dark:bg-gray-700"
                >
                  <div
                    class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5"
                  ></div>
                </div>
              </label>
            </td>

            <!-- Actions -->
            <td class="px-3 py-3 text-center flex justify-center gap-2 text-gray-500 dark:text-gray-400">
              <button class="hover:text-gray-700 dark:hover:text-gray-100" aria-label="View">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button class="hover:text-gray-700 dark:hover:text-gray-100" aria-label="Alert">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M12 9a9 9 0 100 6 9 9 0 000-6z"
                  />
                </svg>
              </button>
              <button class="hover:text-gray-700 dark:hover:text-gray-100" aria-label="Share">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 12v1a2 2 0 002 2h4m4 0h4a2 2 0 002-2v-1m-6-4l-4 4m0 0l4 4m-4-4h12"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const users = [
  {
    parent: "Alice Johnson",
    email: "alice@example.com",
    child: "Emma Johnson",
    age: 14,
    state: "positive",
    last: "2024-01-15 16:45",
    alert: true,
    share: true,
  },
  {
    parent: "David Brown",
    email: "david@example.com",
    child: "Michael Brown",
    age: 16,
    state: "negative",
    last: "2024-01-15 14:20",
    alert: true,
    share: false,
  },
  {
    parent: "Sarah Davis",
    email: "sarah@example.com",
    child: "Jessica Davis",
    age: 13,
    state: "neutral",
    last: "2024-01-15 18:10",
    alert: false,
    share: true,
  },
];
</script>
