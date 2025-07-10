<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
    <!-- Alert Configuration -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">
        Alert Configuration
      </h2>

      <!-- Notification Triggers -->
      <div class="mb-4">
        <p class="text-lg font-medium text-gray-600 mb-2">
          Notification Triggers
        </p>
        <ul class="space-y-3">
          <li class="flex items-center justify-between">
            <span class="text-sm">High negative sentiment detected</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-teal-600 transition"
              ></div>
              <div
                class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow peer-checked:translate-x-5 transition-transform"
              ></div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-sm">Concerning keywords flagged</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-teal-600 transition"
              ></div>
              <div
                class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow peer-checked:translate-x-5 transition-transform"
              ></div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-sm">Unusual activity patterns</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-teal-600 transition"
              ></div>
              <div
                class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow peer-checked:translate-x-5 transition-transform"
              ></div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-sm">Extended periods of negative mood</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-teal-600 transition"
              ></div>
              <div
                class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow peer-checked:translate-x-5 transition-transform"
              ></div>
            </label>
          </li>
        </ul>
      </div>

      <!-- Recent Alerts -->
      <div>
        <p class="text-xl font-medium text-gray-600 mb-2">Recent Alerts</p>
        <ul class="space-y-2">
          <li
            class="flex items-center bg-red-50 text-red-700 px-3 py-2 rounded"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01M12 5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
              />
            </svg>
            <span
              ><strong>Michael Brown</strong> - High negative sentiment</span
            >
          </li>
          <li
            class="flex items-center bg-yellow-50 text-yellow-700 px-3 py-2 rounded"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01M12 5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
              />
            </svg>
            <span
              ><strong>Emma Johnson</strong> - Unusual activity pattern</span
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Wellness Resources -->
    <div class="bg-white p-4 rounded-lg shadow flex flex-col">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">
        Wellness Resources for Parents
      </h2>
      <div class="flex-1 space-y-3">
        <div class="border rounded p-3">
          <div class="flex justify-between items-center mb-1">
            <p class="font-medium">Digital Wellness for Teens</p>
            <span class="text-xs text-gray-500">Screen Time</span>
          </div>
          <p class="text-sm text-gray-500 mb-2">
            Guide to healthy social media habits
          </p>
          <button
            class="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded px-2 py-1"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 12h16M12 4l8 8-8 8"
              />
            </svg>
            Share with Parents
          </button>
        </div>

        <div class="border rounded p-3">
          <div class="flex justify-between items-center mb-1">
            <p class="font-medium">Recognizing Mental Health Signs</p>
            <span class="text-xs text-gray-500">Awareness</span>
          </div>
          <p class="text-sm text-gray-500 mb-2">
            Early indicators to watch for in teenagers
          </p>
          <button
            class="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded px-2 py-1"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 12h16M12 4l8 8-8 8"
              />
            </svg>
            Share with Parents
          </button>
        </div>

        <div class="border rounded p-3">
          <div class="flex justify-between items-center mb-1">
            <p class="font-medium">Communication Strategies</p>
            <span class="text-xs text-gray-500">Parenting</span>
          </div>
          <p class="text-sm text-gray-500 mb-2">
            How to talk to teens about emotions
          </p>
          <button
            class="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded px-2 py-1"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 12h16M12 4l8 8-8 8"
              />
            </svg>
            Share with Parents
          </button>
        </div>
      </div>

      <!-- Footer Button -->
      <button
        class="mt-4 bg-[#076372] hover:bg-[#065358] text-white w-full py-2 rounded inline-flex items-center justify-center gap-2"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7562 9.93343C13.7495 8.9601 14.7562 7.79343 14.7562 6.26676C14.7562 5.2943 14.3699 4.36167 13.6822 3.67404C12.9946 2.98641 12.062 2.6001 11.0895 2.6001C9.91619 2.6001 9.08952 2.93343 8.08952 3.93343C7.08952 2.93343 6.26285 2.6001 5.08952 2.6001C4.11706 2.6001 3.18443 2.98641 2.49679 3.67404C1.80916 4.36167 1.42285 5.2943 1.42285 6.26676C1.42285 7.8001 2.42285 8.96676 3.42285 9.93343L8.08952 14.6001L12.7562 9.93343Z"
            stroke="#F8FAFC"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Send Wellness Tips
      </button>
    </div>
  </section>
</template>
