<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-gray-900"
    >
      <div
        class="w-12 h-12 flex items-center justify-center rounded-full mb-3"
        :class="[card.iconBg, card.iconDarkBg]"
      >
        <component :is="card.icon" class="w-6 h-6" />
      </div>

      <div class="w-12 border-t-2 border-gray-200 dark:border-gray-700 mb-3"></div>

      <h3 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
        {{ card.value }}
      </h3>
      <p class="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4">
        {{ card.label }}
      </p>

      <div
        class="w-full flex justify-between text-xs sm:text-sm text-white rounded-md py-2 px-3 sm:px-4 transition-colors"
        :class="[card.bottomBg, card.bottomDarkBg]"
      >
        <div class="text-left">
          <p class="font-bold">{{ card.leftValue }}</p>
          <p class="text-[10px] sm:text-xs">{{ card.leftLabel }}</p>
        </div>
        <div class="text-right">
          <p class="font-bold">{{ card.rightValue }}</p>
          <p class="text-[10px] sm:text-xs">{{ card.rightLabel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserIcon, ClockIcon, ArrowDownTrayIcon } from "@heroicons/vue/24/outline";

export default {
  name: "DashboardCards",
  components: {
    UserIcon,
    ClockIcon,
    ArrowDownTrayIcon,
  },
  data() {
    return {
      cards: [
        {
          icon: UserIcon,
          iconBg: "bg-orange-100 text-orange-500",
          iconDarkBg: "dark:bg-orange-900/40 dark:text-orange-300",
          value: "2500",
          label: "Visitors",
          leftValue: "35k",
          leftLabel: "Friends",
          rightValue: "128",
          rightLabel: "Posts",
          bottomBg: "bg-[#3b5998]",
          bottomDarkBg: "dark:bg-[#2d4373]",
        },
        {
          icon: ClockIcon,
          iconBg: "bg-blue-100 text-blue-500",
          iconDarkBg: "dark:bg-blue-900/40 dark:text-blue-300",
          value: "123.50",
          label: "Average Time",
          leftValue: "584k",
          leftLabel: "Followers",
          rightValue: "978",
          rightLabel: "Tweets",
          bottomBg: "bg-[#1da1f2]",
          bottomDarkBg: "dark:bg-[#0d8ddb]",
        },
        {
          icon: ArrowDownTrayIcon,
          iconBg: "bg-green-100 text-green-500",
          iconDarkBg: "dark:bg-green-900/40 dark:text-green-300",
          value: "1,805",
          label: "Downloads",
          leftValue: "758+",
          leftLabel: "Contacts",
          rightValue: "356",
          rightLabel: "Profiles",
          bottomBg: "bg-[#0077b5]",
          bottomDarkBg: "dark:bg-[#005582]",
        },
      ],
    };
  },
};
</script>
