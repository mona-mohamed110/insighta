<template>
  <div
    class="min-h-screen flex flex-col gap-8 sm:gap-12 p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300"
  >
    <ReportSection1 />
    <ReportSection2 />
    <ReportSection3 />
  </div>
</template>

<script>
import ReportSection1 from "@/components/ReportSection1.vue";
import ReportSection2 from "@/components/ReportSection2.vue";
import ReportSection3 from "@/components/ReportSection3.vue";

export default {
  name: "ReportsAnalyticsPage",
  components: {
    ReportSection1,
    ReportSection2,
    ReportSection3,
  },
};
</script>

<style scoped>
/* تحسين عرض العناصر عند الانتقال بين السكاشن */
div > * {
  scroll-margin-top: 80px;
}
</style>
