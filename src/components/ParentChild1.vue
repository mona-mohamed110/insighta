<template>
  <section class="w-full bg-white p-4 rounded-lg shadow mb-6">
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
    >
      <h1 class="text-2xl font-bold mb-4">Parent-Child Account Management</h1>
      <button
        class="mt-2 md:mt-0 inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-base font-medium px-5 py-3 rounded-lg"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6566 14V12.6667C10.6566 11.9594 10.3756 11.2811 9.87553 10.781C9.37543 10.281 8.69715 10 7.98991 10H3.98991C3.28266 10 2.60439 10.281 2.10429 10.781C1.60419 11.2811 1.32324 11.9594 1.32324 12.6667V14"
            stroke="#F8FAFC"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.98991 7.33333C7.46267 7.33333 8.65658 6.13943 8.65658 4.66667C8.65658 3.19391 7.46267 2 5.98991 2C4.51715 2 3.32324 3.19391 3.32324 4.66667C3.32324 6.13943 4.51715 7.33333 5.98991 7.33333Z"
            stroke="#F8FAFC"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.6572 13.9998V12.6664C14.6568 12.0756 14.4601 11.5016 14.0981 11.0346C13.7361 10.5677 13.2293 10.2341 12.6572 10.0864"
            stroke="#F8FAFC"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6572 2.08643C11.2308 2.23329 11.7393 2.56689 12.1023 3.03463C12.4654 3.50237 12.6625 4.07765 12.6625 4.66976C12.6625 5.26187 12.4654 5.83715 12.1023 6.30489C11.7393 6.77262 11.2308 7.10623 10.6572 7.25309"
            stroke="#F8FAFC"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Link New Accounts
      </button>
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
        <div
          class="flex items-center justify-center w-12 h-12 bg-red-50 rounded-full"
        >
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
        <div
          class="flex items-center justify-center w-12 h-12 bg-green-50 rounded-full"
        >
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
        <div
          class="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full"
        >
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
        <div
          class="flex items-center justify-center w-12 h-12 bg-purple-50 rounded-full"
        >
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
  </section>
</template>
