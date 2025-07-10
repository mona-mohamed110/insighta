<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <!-- Alert Threshold Controls -->
    <div class="bg-white p-6 rounded-xl shadow border">
      <h2 class="text-3xl font-semibold text-gray-800 mb-4">Alert Threshold Controls</h2>

      <div class="mb-6">
        <label class="block font-medium text-sm text-slate-700 mb-1">
          Negative Sentiment Alert Threshold: <span class="font-semibold">80%</span>
        </label>
        <input type="range" min="0" max="100" value="80" class="w-full accent-teal-700">
        <p class="text-xs text-slate-500 mt-1">Trigger alerts when negative sentiment exceeds this level</p>
      </div>

      <div class="mb-6">
        <label class="block font-medium text-sm text-slate-700 mb-1">
          High-Risk User Alert Threshold: <span class="font-semibold">3 incidents</span>
        </label>
        <input type="range" min="0" max="10" value="3" class="w-full accent-teal-700">
        <p class="text-xs text-slate-500 mt-1">Mark users as high-risk after this many negative incidents</p>
      </div>

      <div>
        <p class="text-sm font-medium text-slate-700 mb-3">Notification Settings</p>
        <ul class="space-y-3">
          <li class="flex items-center justify-between">
            <span class="text-sm text-slate-700">Email notifications</span>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-teal-600 relative after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4"></div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-sm text-slate-700">SMS alerts for critical issues</span>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer">
              <div class="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-teal-600 relative after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4"></div>
            </label>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-sm text-slate-700">Daily summary reports</span>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" checked>
              <div class="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-teal-600 relative after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4"></div>
            </label>
          </li>
        </ul>
      </div>
    </div>

    <!-- API & Service Configuration -->
    <div class="bg-white p-6 rounded-xl shadow border flex flex-col justify-between">
      <div>
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">API & Service Configuration</h2>

        <div class="mb-4">
          <label class="block text-sm font-medium text-slate-700 mb-1">OpenAI API Key</label>
          <div class="flex gap-2">
            <input type="text" value="sk-..." class="w-full border border-slate-300 rounded-md px-3 py-2 text-sm bg-white text-slate-700">
            <button class="border border-slate-300 rounded-md p-2 hover:bg-slate-100">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5332 5.39974L12.0665 6.93307C12.1912 7.05522 12.3587 7.12364 12.5332 7.12364C12.7077 7.12364 12.8753 7.05522 12.9999 6.93307L14.3999 5.53307C14.522 5.40845 14.5904 5.24091 14.5904 5.06641C14.5904 4.8919 14.522 4.72436 14.3999 4.59974L12.8665 3.06641" stroke="#020817" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.1998 1.7334L7.7998 8.1334" stroke="#020817" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.19987 14.3997C7.22491 14.3997 8.86654 12.7581 8.86654 10.7331C8.86654 8.70803 7.22491 7.06641 5.19987 7.06641C3.17483 7.06641 1.5332 8.70803 1.5332 10.7331C1.5332 12.7581 3.17483 14.3997 5.19987 14.3997Z" stroke="#020817" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-slate-700 mb-1">Database Connection</label>
          <div class="flex gap-2">
            <input type="text" value="postgresql://..." class="w-full border border-slate-300 rounded-md px-3 py-2 text-sm bg-white text-slate-700">
            <button class="border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-md">Test</button>
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-slate-700 mb-1">Redis Cache URL</label>
          <div class="flex gap-2">
            <input type="text" value="redis://..." class="w-full border border-slate-300 rounded-md px-3 py-2 text-sm bg-white text-slate-700">
            <button class="border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-md">Test</button>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <p class="text-sm font-medium text-slate-700 mb-3">Service Status</p>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center justify-between">
            <span>AI Service</span><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Connected</span>
          </li>
          <li class="flex items-center justify-between">
            <span>Database</span><span class="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Connected</span>
          </li>
          <li class="flex items-center justify-between">
            <span>Cache</span><span class="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs">Warning</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
