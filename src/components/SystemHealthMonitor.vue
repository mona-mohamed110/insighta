<template>
  <div class="bg-white rounded-lg p-4 sm:p-5 shadow flex flex-col h-full">
    <h2 class="text-lg sm:text-xl font-semibold mb-3">System Health Monitor</h2>

    <div class="flex flex-col gap-1">
      <div
        v-for="(status, index) in systemStatus"
        :key="index"
        class="py-2 flex items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <div
            :class="status.iconBg"
            class="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shrink-0"
          >
            <component :is="status.icon" class="w-3.5 h-3.5" />
          </div>
          <div class="flex flex-col leading-tight">
            <span class="text-sm sm:text-base font-medium">{{
              status.name
            }}</span>
            <span class="text-[11px] sm:text-xs text-gray-400"
              >Uptime: 99.9%</span
            >
          </div>
        </div>

        <div class="flex items-center gap-2">
          <span
            :class="[
              'h-3 w-3 rounded-full shrink-0',
              status.status === 'Healthy'
                ? 'bg-green-500'
                : status.status === 'Warning'
                  ? 'bg-yellow-400'
                  : 'bg-gray-400',
            ]"
          ></span>
          <span :class="status.color" class="text-xs sm:text-sm font-semibold">
            {{ status.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CheckCircleIcon,
  DatabaseIcon,
  ServerIcon,
  CloudIcon,
} from "@heroicons/vue/24/solid";

const systemStatus = [
  {
    name: "AI Service",
    status: "Healthy",
    color: "text-green-600",
    icon: CheckCircleIcon,
    iconBg: "bg-green-500",
  },
  {
    name: "Database",
    status: "Healthy",
    color: "text-green-600",
    icon: DatabaseIcon,
    iconBg: "bg-green-500",
  },
  {
    name: "Server",
    status: "Warning",
    color: "text-yellow-500",
    icon: ServerIcon,
    iconBg: "bg-yellow-400",
  },
  {
    name: "API",
    status: "Healthy",
    color: "text-green-600",
    icon: CloudIcon,
    iconBg: "bg-green-500",
  },
];
</script>
