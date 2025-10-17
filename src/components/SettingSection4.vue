<template>
  <section class="bg-white dark:bg-gray-900 p-4 rounded-lg shadow mb-6 border border-gray-200 dark:border-gray-700 transition-colors">
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
      Security & Privacy Settings
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Access Control -->
      <div class="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
        <p class="text-xl font-medium text-gray-700 dark:text-gray-200 mb-2">Access Control</p>
        <ul class="space-y-2">
          <li class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-200">Two-factor authentication required</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-10 h-6 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div class="absolute left-1 top-1 bg-white dark:bg-gray-200 w-4 h-4 rounded-full transition peer-checked:translate-x-4"></div>
              </div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-200">Session timeout (30 minutes)</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-10 h-6 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div class="absolute left-1 top-1 bg-white dark:bg-gray-200 w-4 h-4 rounded-full transition peer-checked:translate-x-4"></div>
              </div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-200">IP whitelist enforcement</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer">
              <div class="w-10 h-6 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div class="absolute left-1 top-1 bg-white dark:bg-gray-200 w-4 h-4 rounded-full transition peer-checked:translate-x-4"></div>
              </div>
            </label>
          </li>
        </ul>
      </div>

      <!-- Data Protection -->
      <div class="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
        <p class="text-xl font-medium text-gray-700 dark:text-gray-200 mb-2">Data Protection</p>
        <ul class="space-y-2">
          <li class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-200">Encrypt sensitive data at rest</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-10 h-6 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div class="absolute left-1 top-1 bg-white dark:bg-gray-200 w-4 h-4 rounded-full transition peer-checked:translate-x-4"></div>
              </div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-200">Audit log all admin actions</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-10 h-6 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div class="absolute left-1 top-1 bg-white dark:bg-gray-200 w-4 h-4 rounded-full transition peer-checked:translate-x-4"></div>
              </div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-200">Auto-delete old user data (90 days)</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer">
              <div class="w-10 h-6 border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div class="absolute left-1 top-1 bg-white dark:bg-gray-200 w-4 h-4 rounded-full transition peer-checked:translate-x-4"></div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
