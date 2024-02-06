<template>
  <div >
    <aside
      :class="
        props.toggleSidebar
          ? 'bg-slate-200 shadow-lg dark:bg-gray-800   p-1 overflow-y-hidden h-dvh  text-black w-16 md:w-16 border-slate-600 dark:border-r-2  transition-all ease-in-out duration-500'
          : 'bg-slate-200 shadow-lg dark:bg-gray-800    p-1 overflow-y-hidden h-dvh border-slate-600 dark:border-r-2  text-black w-16 md:w-72   transition-all ease-in-out duration-500'
      "
    >
      <div class="flex justify-center text-black border-white">
        <h2 class="text-2xl font-semibold dark:text-white mt-4">Todo</h2>
      </div>
      <hr class="mt-4 border-t border-t-slate-600 border-black" />
      <h2 class="text-2xl font-semibold dark:text-white mt-4">Todo</h2>
      <h2 class="text-2xl font-semibold dark:text-white mt-4">Todo</h2>
      <h2 class="text-2xl font-semibold dark:text-white mt-4">Todo</h2>
      <h2 class="text-2xl font-semibold dark:text-white mt-4">Todo</h2>
      <h2 class="text-2xl font-semibold dark:text-white mt-4">Todo</h2>
      <h2 class="text-2xl font-semibold dark:text-white mt-4">Todo</h2>
      <h2 class="text-2xl font-semibold dark:text-white mt-4">Todo</h2>
      <h2 class="text-2xl font-semibold dark:text-white mt-4">Todo</h2> 
    </aside>
  </div>
</template>
<script setup>
const props = defineProps(["toggleSidebar"]);
</script>
