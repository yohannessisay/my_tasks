<template>
  <div class="m-2">
    <div class="relative float-label-input">
      <input
        :type="type"
        :id="name"
        :name="name"
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
        :style="type == 'password' ? 'padding-right:2.5 rem' : ''"
      />

      <label
        :for="name"
        class="absolute top-3 left-2 text-gray-400 pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker"
        >{{ label != "" ? label : "Label" }}</label
      >

      <button
        v-if="type == 'password'"
        name="showPassword"
        class="absolute top-0 right-0 border border-l rounded-r-md px-4 py-[10px] mr-[1px] bg-gray-300"
        @click="togglePassword()"
      >
        <svg
          v-show="!passwordVisible"
          class="w-5 h-5"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 8.5V7.5C12.5 6.94772 12.0523 6.5 11.5 6.5H1.5C0.947715 6.5 0.5 6.94772 0.5 7.5V13.5C0.5 14.0523 0.947715 14.5 1.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V12.5M12.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5C6.5 11.6046 7.39543 12.5 8.5 12.5H12.5M12.5 8.5C13.6046 8.5 14.5 9.39543 14.5 10.5C14.5 11.6046 13.6046 12.5 12.5 12.5M3.5 6.5V3.5C3.5 1.84315 4.84315 0.5 6.5 0.5C8.15685 0.5 9.5 1.84315 9.5 3.5V6.5M12 10.5H13M10 10.5H11M8 10.5H9"
            stroke="#000000"
          />
        </svg>

        <svg
          v-show="passwordVisible"
          class="w-5 h-5"
          viewBox="0 0 16 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill="#444"
            d="M8 8v-3.1c0-2.2-1.8-3.9-3.9-3.9h-0.3c-2.2 0-3.8 1.7-3.8 3.9v2.1h2v-2.1c0-1.1 0.7-1.9 1.8-1.9h0.3c1 0 1.9 0.8 1.9 1.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-7zM11 14h-1v-1.8c-0.6 0-1-0.6-1-1.1 0-0.6 0.4-1.1 1-1.1s1 0.4 1 0.9v3.1z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps([
  "textColor",
  "isRequired",
  "label",
  "name",
  "type",
  "additionalClass",
  "fieldType",
]);
const passwordVisible = ref(false);
const togglePassword = () => {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  passwordVisible.value = !passwordVisible.value;
};
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