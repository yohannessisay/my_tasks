<template>
  <div class="m-2">
    <div class="relative float-label-input">
      <textarea 
        :id="name"
        :name="name"
        :rows="rows"
        placeholder=" "
        :class="
          isRequired
            ? `w-full bg-white focus:outline-none text-${
                textColor != '' ? textColor : 'black'
              } focus:shadow-outline border border-gray-300 rounded-md py-2 px-3 block appearance-none leading-normal focus:border-blue-400  ${additionalClass}`
            : `bg-white w-full focus:outline-none text-${
                textColor != '' ? textColor : 'black'
              } focus:shadow-outline border border-red-500 rounded-md py-2 px-3 block appearance-none leading-normal
              ${additionalClass}`
        "
      ></textarea>
      <label
        :for="name"
        class="absolute top-3 left-2 text-gray-400 pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker"
        >{{ label != "" ? label : "Label" }}</label
      >
    </div>
  </div>
</template>
<script setup>
const props = defineProps([
  "textColor",
  "isRequired",
  "label",
  "name",
  "rows",
  "additionalClass",
]);
</script>
<style scoped>
.float-label-input {
  margin-top: 32px 0;
}

.float-label-input:focus-within label,
.float-label-input input:not(:placeholder-shown) + label {
  transform: translateY(-1.5rem) scale(0.75);
  background-color: rgb(163, 163, 163);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  font-size: 18px;
}
</style>