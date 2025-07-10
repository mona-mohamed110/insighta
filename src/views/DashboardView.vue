<template>
  <div class="flex-1 flex flex-col overflow-hidden">
    <!-- Dashboard Content -->
    <main class="flex-1 overflow-y-auto p-4 sm:p-6">
      <div class="flex flex-col gap-4 sm:gap-6">
        
        <h1 class="text-2xl sm:text-3xl font-bold text-black">Overview</h1>

        <OverviewCards />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div class="bg-white rounded-xl shadow p-4">
            <h2 class="text-lg sm:text-xl font-semibold mb-2">
              Current Emotional Distribution
            </h2>
            <EmotionalPieChart />
          </div>

          <div class="bg-white rounded-xl shadow p-4">
            <SystemHealthMonitor />
          </div>
        </div>

        
        <h2 class="text-xl sm:text-2xl font-bold text-black mt-2">
          Analytics
        </h2>++++

        <div class="bg-white rounded-xl shadow p-4">
          <h3 class="text-lg font-semibold mb-2">
            Emotional State Trends (Last 30 Days)
          </h3>
          <EmotionalTrendsLineChart />
        </div>

        
        <h2 class="text-xl sm:text-2xl font-bold text-black mt-2">
          User Management
        </h2>

        <div class="bg-white rounded-xl shadow p-4">
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
