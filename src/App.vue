

<template>
  
    <div
      class=" h-dvh  bg-white dark:bg-gray-800 text-black dark:text-white transition-all ease-in-out duration-500"
    >
      <div class="fixed bottom-0 right-0 z-50 p-1">
        <input
          type="checkbox"
          class="sr-only toggled"
          id="darkmode-toggle"
          @click="toggleTheme"
          :checked="darkMode"
        />
        <label for="darkmode-toggle" class="toggle">
          <span>Toggle dark mode</span>
        </label>
      </div>
      <router-view></router-view>
    
    </div>
 
</template>

<script setup>
import "./styles/custom.css";
import Login from "./components/auth/login.vue";
import { ref, watch } from "vue";

const darkMode = ref(localStorage.getItem("theme") === "dark");

const toggleTheme = () => {
  darkMode.value = !darkMode.value;
};

watch(
  darkMode,
  (newValue) => {
    document.documentElement.classList.toggle("dark", newValue);
    localStorage.setItem("theme", newValue ? "dark" : "light");
  },
  { immediate: true }
);
</script>
 
 