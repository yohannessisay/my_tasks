<template>
  <div>
    <button
      :class="`${bgColor !== '' ? bgColor : 'bg-blue-500'}
      hover:bg-teal-600
       ${textColor !== '' ? textColor : 'text-black'} 
  ${elevation}
  font-bold py-2 px-4 rounded inline-flex w-full items-center justify-center
  overflow-hidden focus:outline-none focus:ring focus:border-transparent transition-all duration-300 ${additionalClass}`"
    >
      <span class="m-1"> {{ name }}</span>
      <span v-html="svg"></span>
    </button>
  </div>
</template>
<script setup>
const props = defineProps([
    "textColor",
    "bgColor",
    "onHoverBgColor",
    "type",
    "elevation",
    "name",
    "svg",
    "additionalClass"
  ]);
</script>