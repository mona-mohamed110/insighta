<template>
  <section class="p-4 bg-white rounded-lg shadow mb-6">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-4xl font-extrabold tracking-tight">
        Reports & Analytics
      </h2>
      <div class="flex gap-3">
        <!-- Schedule Report Button -->
        <button
          class="flex items-center border px-5 py-3 text-lg rounded hover:bg-gray-100"
        >
          <!-- Calendar Icon -->
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
            />
          </svg>
          Schedule Report
        </button>
        <button
          class="flex items-center text-white px-5 py-3 text-lg rounded hover:opacity-90"
          style="background-color: #076372"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
          Generate Report
        </button>
      </div>
    </div>

    <div class="bg-white p-6 rounded shadow space-y-6">
      <!-- Generate New Report -->
      <div>
        <h2 class="text-2xl font-bold mb-6">Generate New Report</h2>
        <div class="grid grid-cols-3 gap-4">
          <div
            class="bg-[#076372] text-white p-6 rounded flex flex-col items-center cursor-pointer hover:opacity-90"
          >
            <div class="flex items-center mb-3 text-lg">
              <svg
                class="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
                ></path>
              </svg>
              Weekly Report
            </div>
            <p class="text-sm">Last 7 days analysis</p>
          </div>
          <div
            class="border border-gray-200 p-6 rounded flex flex-col items-center cursor-pointer hover:bg-gray-50"
          >
            <div class="flex items-center mb-3 text-lg">
              <svg
                class="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
                ></path>
              </svg>
              Monthly Report
            </div>
            <p class="text-sm">Last 30 days summary</p>
          </div>
          <div
            class="border border-gray-200 p-6 rounded flex flex-col items-center cursor-pointer hover:bg-gray-50"
          >
            <div class="flex items-center mb-3 text-lg">
              <svg
                class="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14"
                ></path>
              </svg>
              Quarterly Report
            </div>
            <p class="text-sm">90 days comprehensive</p>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-4">
        <div
          class="border border-gray-200 p-6 rounded flex items-center justify-between"
        >
          <div>
            <p class="text-sm text-gray-500">High-Risk Users</p>
            <p class="text-2xl font-semibold">23</p>
            <p class="text-sm text-gray-500">-3 from last week</p>
          </div>
          <div class="flex items-center justify-center w-12 h-12 bg-red-50 rounded-full">
            <svg
              class="w-7 h-7 text-red-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856C18.07 18.42 19 16.35 19 14c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 2.35.93 4.42 2.062 6z"
              />
            </svg>
          </div>
        </div>
        <div
          class="border border-gray-200 p-6 rounded flex items-center justify-between"
        >
          <div>
            <p class="text-sm text-gray-500">User Improvements</p>
            <p class="text-2xl font-semibold">156</p>
            <p class="text-sm text-gray-500">+12 from last week</p>
          </div>
          <div class="flex items-center justify-center w-12 h-12 bg-green-50 rounded-full">
            <svg
              class="w-7 h-7 text-green-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12l5 5L20 7"
              />
            </svg>
          </div>
        </div>
        <div
          class="border border-gray-200 p-6 rounded flex items-center justify-between"
        >
          <div>
            <p class="text-sm text-gray-500">New Registrations</p>
            <p class="text-2xl font-semibold">89</p>
            <p class="text-sm text-gray-500">+5 from last week</p>
          </div>
          <div class="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full">
            <svg
              class="w-7 h-7 text-blue-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.121 17.804A6 6 0 0112 4a6 6 0 016.879 13.804M12 14v6m-3-3h6"
              />
            </svg>
          </div>
        </div>
        <div
          class="border border-gray-200 p-6 rounded flex items-center justify-between"
        >
          <div>
            <p class="text-sm text-gray-500">Active Sessions</p>
            <p class="text-2xl font-semibold">1247</p>
            <p class="text-sm text-gray-500">+45 from yesterday</p>
          </div>
          <div class="flex items-center justify-center w-12 h-12 bg-purple-50 rounded-full">
            <svg
              class="w-7 h-7 text-purple-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

