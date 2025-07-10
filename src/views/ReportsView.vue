<template>
  <div class="min-h-screen bg-white p-6 space-y-6">
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
    ReportSection3
  }
};
</script>


