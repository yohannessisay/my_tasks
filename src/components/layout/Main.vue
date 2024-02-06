<template>
  <div class="flex h-screen ">
    <!-- Sidebar -->
    <Sidebar :toggleSidebar="toggleSidebar" />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <header
        class="flex bg-white rounded-2xl m-1 shadow-md dark:bg-gray-700 text-black  dark:text-white p-4 transition-all ease-in-out duration-500"
      >
        <svg
          @click="toggle"
          class="cursor-pointer hover:bg-slate-100 dark:fill-white dark:hover:fill-black text-green-500 rounded-md mr-2 transition-all duration-300 ease-in-out"
          width="30px"
          height="30px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>icn/menu</title>
          <path
            d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
            id="a"
          />
        </svg>
        <h1 class="text-2xl font-semibold">Welcome</h1>
      </header>

      <!-- Body -->
      <main
        class="dark:bg-gray-800 flex-1 overflow-x-hidden overflow-y-auto p-1 transition-all ease-in-out duration-500"
      >
        <div class="absolute bottom-10 mr-2 mb-2 fill-space">
          <Add />
        </div>
      </main>

    
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";
import Add from "../Todo/Add.vue";
const toggleSidebar = ref(false);
const toggle = () => {
  toggleSidebar.value = !toggleSidebar.value;
};
</script>
<style>
.fill-space{
  width: -webkit-fill-available;
}
</style>