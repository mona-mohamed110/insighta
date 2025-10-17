<template>
  <header
    class="bg-white shadow p-4 flex justify-between items-center dark:bg-gray-800 dark:text-white relative"
  >
    <!-- الشمال: زرار المينيو والعنوان -->
    <div class="flex items-center space-x-4">
      <button
        @click="$emit('toggle-sidebar')"
        class="material-icons cursor-pointer text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition"
      >
        menu
      </button>
      <h1
        class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white"
      >
        Mental Wellness Analytics Dashboard
      </h1>
    </div>

    <!-- اليمين: الدارك مود، النوتيفيكيشن، والصورة -->
    <div class="flex items-center space-x-3 sm:space-x-4">
      <!-- تبديل الدارك مود -->
      <span
        @click="$emit('toggle-dark')"
        class="material-icons cursor-pointer text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition"
      >
        {{ darkMode ? "light_mode" : "dark_mode" }}
      </span>

      <!-- النوتيفيكيشن -->
      <div class="relative" ref="notifWrapper">
        <span
          class="material-icons cursor-pointer text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition relative"
          @click.stop="toggleNotifications"
        >
          notifications
          <span
            v-if="notifications.length > 0"
            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center animate-pulse"
          >
            {{ notifications.length }}
          </span>
        </span>

        <transition name="fade">
          <div
            v-if="showNotifications"
            class="absolute right-0 mt-2 w-72 sm:w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden"
          >
            <div
              class="p-3 border-b border-gray-200 dark:border-gray-700 font-semibold text-gray-800 dark:text-white"
            >
              Notifications
            </div>
            <ul class="max-h-64 overflow-y-auto">
              <li
                v-for="(notif, index) in notifications"
                :key="index"
                class="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer"
              >
                <span class="material-icons text-teal-600 dark:text-teal-400 mt-1">
                  info
                </span>
                <div class="flex-1">
                  <p class="text-sm text-gray-800 dark:text-gray-100">
                    {{ notif.title }}
                  </p>
                  <p class="text-xs text-gray-400 dark:text-gray-300">
                    {{ notif.time }}
                  </p>
                </div>
              </li>
              <li
                v-if="notifications.length === 0"
                class="p-4 text-gray-500 dark:text-gray-400 text-center"
              >
                No new notifications
              </li>
            </ul>
          </div>
        </transition>
      </div>

      <!-- صورة المستخدم -->
      <div class="flex items-center space-x-2">
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="Admin"
          class="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";

const props = defineProps({
  darkMode: Boolean,
});

const showNotifications = ref(false);
const notifWrapper = ref(null);

const notifications = ref([
  { title: "New user registered", time: "2m ago" },
  { title: "Server CPU usage is high", time: "10m ago" },
  { title: "Backup completed successfully", time: "1h ago" },
  { title: "Password changed successfully", time: "3h ago" },
]);

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value;
};

const handleClickOutside = (event) => {
  if (notifWrapper.value && !notifWrapper.value.contains(event.target)) {
    showNotifications.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.material-icons {
  font-size: 24px;
}

/* الأنيميشن */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
