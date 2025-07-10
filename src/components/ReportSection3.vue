<template>
  <section class="p-4 bg-white rounded-lg border border-gray-200 mb-6">
    <h2 class="text-2xl font-bold mb-4">Export Options</h2>
    <div class="flex flex-wrap gap-3">
      <button
        @click="exportPDF"
        class="flex items-center gap-2 border px-3 py-2 rounded text-sm hover:bg-gray-100"
      >
        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
        </svg>
        Export as PDF
      </button>
      <button
        @click="exportExcel"
        class="flex items-center gap-2 border px-3 py-2 rounded text-sm hover:bg-gray-100"
      >
        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
        </svg>
        Export as Excel
      </button>
      <button
        @click="exportCSV"
        class="flex items-center gap-2 border px-3 py-2 rounded text-sm hover:bg-gray-100"
      >
        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
        </svg>
        Export as CSV
      </button>
      <button
        @click="exportJSON"
        class="flex items-center gap-2 border px-3 py-2 rounded text-sm hover:bg-gray-100"
      >
        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
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
  methods: {
    exportPDF() {
      const blob = new Blob(
        ["Example PDF Export Content.\nThis is just sample text."],
        { type: "application/pdf" }
      );
      saveAs(blob, "report.pdf");
    },
    exportExcel() {
      const data = [
        { Name: "John Doe", Score: 85 },
        { Name: "Jane Smith", Score: 92 },
        { Name: "Alice Johnson", Score: 78 }
      ];
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      const blob = new Blob([excelBuffer], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      saveAs(blob, "report.xlsx");
    },
    exportCSV() {
      const csvContent =
        "Name,Score\nJohn Doe,85\nJane Smith,92\nAlice Johnson,78";
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, "report.csv");
    },
    exportJSON() {
      const data = [
        { Name: "John Doe", Score: 85 },
        { Name: "Jane Smith", Score: 92 },
        { Name: "Alice Johnson", Score: 78 }
      ];
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json"
      });
      saveAs(blob, "report.json");
    }
  }
};
</script>

