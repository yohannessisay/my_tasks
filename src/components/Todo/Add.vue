<template>
  <div class="flex shadow-md border p-1 w-full rounded-md">
    <div class="mr-2 mt-2">
      <svg
        @click="toggleFieldsVisibility"
        v-if="!saveMode"
        class="hover:bg-secondary cursor-pointer rounded-full hover:scale-110 text-white transition-all duration-300 ease-in-out"
        version="1.1"
        width="45"
        height="45"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32"
        enable-background="new 0 0 32 32"
        xml:space="preserve"
      >
        <rect x="10" y="15" class="dark:fill-white" width="12" height="2" />
        <rect x="15" y="10" width="2" height="12" class="dark:fill-white" />
        <circle
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-miterlimit="10"
          cx="16"
          cy="16"
          r="12"
        />
      </svg>
      <svg
        v-else
        class="dark:fill-white border-2 dark:hover:fill-white hover:scale-125 rounded-full p-1 cursor-pointer hover:bg-primary transition-all duration-300 ease-in-out"
        width="35px"
        height="35px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
      >
        <path
          d="M20.71,9.29l-6-6a1,1,0,0,0-.32-.21A1.09,1.09,0,0,0,14,3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10A1,1,0,0,0,20.71,9.29ZM9,5h4V7H9Zm6,14H9V16a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1Zm4-1a1,1,0,0,1-1,1H17V16a3,3,0,0,0-3-3H10a3,3,0,0,0-3,3v3H6a1,1,0,0,1-1-1V6A1,1,0,0,1,6,5H7V8A1,1,0,0,0,8,9h6a1,1,0,0,0,1-1V6.41l4,4Z"
        />
      </svg>

      <svg
        v-if="saveMode"
        @click="toggleFieldsVisibility"
        class="dark:fill-white mt-2 -ml-[2px] dark:hover:fill-white hover:scale-110 rounded-full p-1 cursor-pointer hover:bg-primary transition-all duration-300 ease-in-out"
        width="40px"
        height="40px"
        viewBox="0 0 30 30"
        id="_22_-_Down"
        data-name="22 - Down"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Path_209"
          data-name="Path 209"
          d="M16,1A15,15,0,1,0,31,16,15.007,15.007,0,0,0,16,1Zm0,2A13,13,0,1,1,3,16,13.006,13.006,0,0,1,16,3Z"
          transform="translate(-1 -1)"
          fill-rule="evenodd"
        />
        <path
          id="Path_210"
          data-name="Path 210"
          d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,1,0-1.414-1.414Z"
          transform="translate(-1 -1)"
          fill-rule="evenodd"
        />
      </svg>
    </div>

    <div
      v-if="areFieldsVisible"
      class="transition-all duration-300 ease-in-out fill-space"
    >
      <form>
        <TextField
          v-model="title"
          :fieldType="'input'"
          :textColor="'black'"
          :isRequired="true"
          :label="'Title'"
          :name="'title'"
          :type="'text'"
        ></TextField>
        <TextArea
          v-model="detail"
          :fieldType="'textarea'"
          :textColor="'black'"
          :isRequired="true"
          :label="'Detail'"
          :name="'detail'"
          :type="'textarea'"
          :rows="4"
          :additionalClass="'mt-4'"
        ></TextArea>
      </form>
    </div>
  </div>
</template>
<script setup>
import TextField from "../sharedComponents/textField.vue";
import TextArea from "../sharedComponents/textArea.vue";
import Accordion from "../sharedComponents/accordion.vue";
import { ref } from "vue";

const areFieldsVisible = ref(false);
const saveMode = ref(false);
const title = ref("");
const detail = ref("");
const toggleFieldsVisibility = () => {
  areFieldsVisible.value = !areFieldsVisible.value;
  saveMode.value = !saveMode.value;
};
</script>