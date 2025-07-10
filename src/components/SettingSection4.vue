<template>
  <section class="bg-white p-4 rounded-lg shadow mb-6">
    <h2 class="text-3xl font-semibold mb-4">
      Security & Privacy Settings
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Access Control -->
      <div>
        <p class="text-xl font-medium text-gray-700 mb-2">Access Control</p>
        <ul class="space-y-2">
          <li class="flex items-center justify-between">
            <span>Two-factor authentication required</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div
                  class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-4"
                ></div>
              </div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span>Session timeout (30 minutes)</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div
                  class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-4"
                ></div>
              </div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span>IP whitelist enforcement</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer">
              <div class="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div
                  class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-4"
                ></div>
              </div>
            </label>
          </li>
        </ul>
      </div>

      <!-- Data Protection -->
      <div>
        <p class="text-xl font-medium text-gray-700 mb-2">Data Protection</p>
        <ul class="space-y-2">
          <li class="flex items-center justify-between">
            <span>Encrypt sensitive data at rest</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div
                  class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-4"
                ></div>
              </div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span>Audit log all admin actions</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div
                  class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-4"
                ></div>
              </div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span>Auto-delete old user data (90 days)</span>
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer">
              <div class="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-teal-600 transition">
                <div
                  class="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-4"
                ></div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
