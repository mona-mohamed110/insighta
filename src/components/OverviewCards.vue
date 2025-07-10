<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div
      v-for="(card, index) in overviewCards"
      :key="index"
      class="bg-white rounded-xl p-4 shadow flex items-center justify-between"
    >
      <div>
        <h2 class="text-sm text-gray-500">{{ card.title }}</h2>
        <p class="text-2xl font-bold">{{ card.value }}</p>
        <p class="text-xs text-green-600">{{ card.sub }}</p>
      </div>
      <div :class="card.iconBg" class="w-10 h-10 flex items-center justify-center rounded-md">
        <component :is="card.icon" class="w-5 h-5 text-gray-700" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserIcon, ChartBarIcon, DocumentTextIcon, CheckCircleIcon } from '@heroicons/vue/24/solid'

const overviewCards = [
  {
    title: "Total Users",
    value: "12,847",
    sub: "+12.5% from last month",
    icon: UserIcon,
    iconBg: "bg-blue-100"
  },
  {
    title: "Daily Active Users",
    value: "8,432",
    sub: "+8.2% from last month",
    icon: ChartBarIcon,
    iconBg: "bg-green-100"
  },
  {
    title: "Emotional Reports",
    value: "45,231",
    sub: "+5.7% from last month",
    icon: DocumentTextIcon,
    iconBg: "bg-purple-100"
  },
  {
    title: "System Uptime",
    value: "99.8%",
    sub: "+0.2% from last month",
    icon: CheckCircleIcon,
    iconBg: "bg-teal-100"
  }
]
</script>
