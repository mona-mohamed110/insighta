<template>
  <section class="w-full bg-white p-4 rounded-lg shadow mb-6">
    <h2 class="text-2xl font-bold mb-4">Linked Parent-Child Accounts</h2>

    <div class="overflow-x-auto">
      <table class="min-w-full text-left text-sm">
        <thead class="border-b bg-gray-50">
          <tr>
            <th class="px-4 py-2 font-medium text-gray-600">Parent</th>
            <th class="px-4 py-2 font-medium text-gray-600">Child</th>
            <th class="px-4 py-2 font-medium text-gray-600">Age</th>
            <th class="px-4 py-2 font-medium text-gray-600">Emotional State</th>
            <th class="px-4 py-2 font-medium text-gray-600">Last Activity</th>
            <th class="px-4 py-2 font-medium text-gray-600">Alerts</th>
            <th class="px-4 py-2 font-medium text-gray-600">Sharing</th>
            <th class="px-4 py-2 font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr>
            <td class="px-4 py-3">
              <div class="font-medium text-gray-800">Alice Johnson</div>
              <div class="text-gray-500 text-xs">alice@example.com</div>
            </td>
            <td class="px-4 py-3">Emma Johnson</td>
            <td class="px-4 py-3">14</td>
            <td class="px-4 py-3">
              <span
                class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                >positive</span
              >
            </td>
            <td class="px-4 py-3">2024-01-15 16:45</td>
            <td class="px-4 py-3">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked />
                <div
                  class="w-11 h-6 bg-gray-200 peer-checked:bg-green-500 rounded-full relative transition-colors duration-300"
                >
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform duration-300"
                  ></div>
                </div>
              </label>
            </td>
            <td class="px-4 py-3">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked />
                <div
                  class="w-11 h-6 bg-gray-200 peer-checked:bg-blue-500 rounded-full relative transition-colors duration-300"
                >
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform duration-300"
                  ></div>
                </div>
              </label>
            </td>
            <td class="px-4 py-3 flex gap-3 text-gray-500">
              <button aria-label="View">
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
              <button aria-label="Alert">
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
              <button aria-label="Share">
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

          <tr>
            <td class="px-4 py-3">
              <div class="font-medium text-gray-800">David Brown</div>
              <div class="text-gray-500 text-xs">david@example.com</div>
            </td>
            <td class="px-4 py-3">Michael Brown</td>
            <td class="px-4 py-3">16</td>
            <td class="px-4 py-3">
              <span
                class="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs"
                >negative</span
              >
            </td>
            <td class="px-4 py-3">2024-01-15 14:20</td>
            <td class="px-4 py-3">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked />
                <div
                  class="w-11 h-6 bg-gray-200 peer-checked:bg-green-500 rounded-full relative transition-colors duration-300"
                >
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform duration-300"
                  ></div>
                </div>
              </label>
            </td>
            <td class="px-4 py-3">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" />
                <div
                  class="w-11 h-6 bg-gray-200 peer-checked:bg-blue-500 rounded-full relative transition-colors duration-300"
                >
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform duration-300"
                  ></div>
                </div>
              </label>
            </td>
            <td class="px-4 py-3 flex gap-3 text-gray-500">
              <button aria-label="View">
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
              <button aria-label="Alert">
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
              <button aria-label="Share">
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

          <tr>
            <td class="px-4 py-3">
              <div class="font-medium text-gray-800">Sarah Davis</div>
              <div class="text-gray-500 text-xs">sarah@example.com</div>
            </td>
            <td class="px-4 py-3">Jessica Davis</td>
            <td class="px-4 py-3">13</td>
            <td class="px-4 py-3">
              <span
                class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                >neutral</span
              >
            </td>
            <td class="px-4 py-3">2024-01-15 18:10</td>
            <td class="px-4 py-3">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" />
                <div
                  class="w-11 h-6 bg-gray-200 peer-checked:bg-green-500 rounded-full relative transition-colors duration-300"
                >
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform duration-300"
                  ></div>
                </div>
              </label>
            </td>
            <td class="px-4 py-3">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked />
                <div
                  class="w-11 h-6 bg-gray-200 peer-checked:bg-blue-500 rounded-full relative transition-colors duration-300"
                >
                  <div
                    class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform duration-300"
                  ></div>
                </div>
              </label>
            </td>
            <td class="px-4 py-3 flex gap-3 text-gray-500">
              <button aria-label="View">
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
              <button aria-label="Alert">
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
              <button aria-label="Share">
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
