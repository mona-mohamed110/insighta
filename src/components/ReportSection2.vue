<template>
  <section class="p-4 bg-white rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Recent Reports -->
    <div class="border border-gray-200 rounded p-4">
      <h2 class="text-2xl font-bold mb-4">Recent Reports</h2>
      <div class="space-y-3">
        <div class="border rounded p-3 flex justify-between items-center">
          <div>
            <h3 class="font-medium">Weekly Emotional Analysis Report</h3>
            <p class="text-sm text-gray-500">2024-01-15</p>
            <span class="text-xs bg-gray-200 px-2 py-0.5 rounded">Weekly</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-white bg-[#076372] px-2 py-0.5 rounded-full">completed</span>
            <button class="text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </button>
          </div>
        </div>

        <div class="border rounded p-3 flex justify-between items-center">
          <div>
            <h3 class="font-medium">Monthly User Engagement Summary</h3>
            <p class="text-sm text-gray-500">2024-01-01</p>
            <span class="text-xs bg-gray-200 px-2 py-0.5 rounded">Monthly</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-white bg-[#076372] px-2 py-0.5 rounded-full">completed</span>
            <button class="text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </button>
          </div>
        </div>

        <div class="border rounded p-3 flex justify-between items-center">
          <div>
            <h3 class="font-medium">High-Risk Users Quarterly Review</h3>
            <p class="text-sm text-gray-500">2024-01-01</p>
            <span class="text-xs bg-gray-200 px-2 py-0.5 rounded">Quarterly</span>
          </div>
          <div>
            <span class="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Processing</span>
          </div>
        </div>
      </div>
    </div>

    <!-- System Activity Logs -->
    <div class="border border-gray-200 rounded p-4">
      <h2 class="text-2xl font-bold mb-4">System Activity Logs</h2>
      <div class="space-y-3">
        <div class="rounded p-3 flex justify-between items-start" style="background-color: #F1F5F9;">
          <div class="flex gap-2">
            <span class="h-3 w-3 bg-green-500 rounded-full mt-1"></span>
            <div>
              <p>User emotional analysis completed successfully</p>
              <p class="text-xs text-gray-500">AI Service</p>
            </div>
          </div>
          <p class="text-xs text-gray-500">2024-01-15 14:30:22</p>
        </div>

        <div class="rounded p-3 flex justify-between items-start" style="background-color: #F1F5F9;">
          <div class="flex gap-2">
            <span class="h-3 w-3 bg-yellow-500 rounded-full mt-1"></span>
            <div>
              <p>High negative sentiment detected for user ID: 2847</p>
              <p class="text-xs text-gray-500">Monitoring System</p>
            </div>
          </div>
          <p class="text-xs text-gray-500">2024-01-15 14:28:15</p>
        </div>

        <div class="rounded p-3 flex justify-between items-start" style="background-color: #F1F5F9;">
          <div class="flex gap-2">
            <span class="h-3 w-3 bg-red-500 rounded-full mt-1"></span>
            <div>
              <p>Failed to process emotional keywords batch</p>
              <p class="text-xs text-gray-500">AI Service</p>
            </div>
          </div>
          <p class="text-xs text-gray-500">2024-01-15 14:25:03</p>
        </div>

        <div class="rounded p-3 flex justify-between items-start" style="background-color: #F1F5F9;">
          <div class="flex gap-2">
            <span class="h-3 w-3 bg-green-500 rounded-full mt-1"></span>
            <div>
              <p>Database backup completed successfully</p>
              <p class="text-xs text-gray-500">System</p>
            </div>
          </div>
          <p class="text-xs text-gray-500">2024-01-15 14:20:11</p>
        </div>
      </div>
    </div>
  </section>
</template>

