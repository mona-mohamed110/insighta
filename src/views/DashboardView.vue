<template>
  <div class="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Dashboard Content -->
    <main class="flex-1 overflow-y-auto p-4 sm:p-6">
      <div class="flex flex-col gap-6">

        <!-- Title -->
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100">
          Overview
        </h1>

        <!-- Overview Cards -->
        <OverviewCards />

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6 transition-colors">
            <h2 class="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 text-center lg:text-left">
              Current Emotional Distribution
            </h2>
            <EmotionalPieChart />
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6 transition-colors">
            <SystemHealthMonitor />
          </div>
        </div>

        <!-- Analytics Section -->
        <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mt-6">
          Analytics
        </h2>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6 transition-colors">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100 text-center lg:text-left">
            Emotional State Trends (Last 30 Days)
          </h3>
          <EmotionalTrendsLineChart />
        </div>

        <!-- User Management Section -->
        <h2 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mt-6">
          User Management
        </h2>

        <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6 transition-colors overflow-x-auto">
          <UserManagementTable />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import OverviewCards from "@/components/OverviewCards.vue";
import EmotionalPieChart from "@/components/EmotionalPieChart.vue";
import SystemHealthMonitor from "@/components/SystemHealthMonitor.vue";
import EmotionalTrendsLineChart from "@/components/EmotionalTrendsLineChart.vue";
import UserManagementTable from "@/components/UserManagementTable.vue";
</script>
