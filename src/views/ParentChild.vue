<template>
  <main
    class="min-h-screen p-4 sm:p-6 space-y-6 sm:space-y-8 overflow-x-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <ParentChild1 />
    <ParentChild2 />
    <ParentChild3 />
  </main>
</template>

<script>
import ParentChild1 from "../components/ParentChild1.vue";
import ParentChild2 from "../components/ParentChild2.vue";
import ParentChild3 from "../components/ParentChild3.vue";

export default {
  name: "ParentChild",
  components: {
    ParentChild1,
    ParentChild2,
    ParentChild3,
  },
};
</script>
