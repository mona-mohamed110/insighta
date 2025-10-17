<template>
  <section
    class="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 mb-6 transition-colors duration-300"
  >
    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
      Export Options
    </h2>
    <div class="flex flex-wrap gap-3">
      <button
        @click="exportPDF"
        class="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
        </svg>
        Export as PDF
      </button>

      <button
        @click="exportExcel"
        class="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
        </svg>
        Export as Excel
      </button>

      <button
        @click="exportCSV"
        class="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
        </svg>
        Export as CSV
      </button>

      <button
        @click="exportJSON"
        class="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
        </svg>
        Export Raw Data
      </button>
    </div>
  </section>
</template>

<script>
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export default {
  name: "ReportSection3",
  props: {
    reportData: {
      type: Array,
      required: true,
      default: () => [],
    },
    reportName: {
      type: String,
      default: "report",
    },
  },
  methods: {
    exportPDF() {
      const content = JSON.stringify(this.reportData, null, 2);
      const blob = new Blob([content], { type: "application/pdf" });
      saveAs(blob, `${this.reportName}.pdf`);
    },
    exportExcel() {
      const worksheet = XLSX.utils.json_to_sheet(this.reportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      const blob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      saveAs(blob, `${this.reportName}.xlsx`);
    },
    exportCSV() {
      if (!this.reportData.length) return;
      const keys = Object.keys(this.reportData[0]);
      const csvContent = [
        keys.join(","),
        ...this.reportData.map(row => keys.map(k => row[k]).join(","))
      ].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, `${this.reportName}.csv`);
    },
    exportJSON() {
      const blob = new Blob([JSON.stringify(this.reportData, null, 2)], {
        type: "application/json"
      });
      saveAs(blob, `${this.reportName}.json`);
    }
  }
};
</script>
