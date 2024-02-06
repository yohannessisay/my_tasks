<template>
 	<div class='card p-4'>
				<details class='transition duration-500 bg-yellow-200	hover:bg-yellow-400 cursor-pointer p-8 border-solid border-l-8 border-yellow-400 rounded-md'>
					<summary class='flex items-center justify-space-between focus:outline-none'>
						<header class='flex justify-center items-center'>
							<svg class='w-10 h-10' viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M32.6066 22H11.3934" stroke="#202842" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M22 11.3934V32.6066" stroke="#202842" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<h1 class='leading-5 flex self-center text-black text-xl'>What’s the best Wi-Fi name you’ve seen?</h1>
						</header>
					</summary>
					<div class='content ml-10 text-lg'>
						<ul class='list-disc p-4'>
							<li>Mom Use This One</li>
							<li>I Now Declare You Husband and Wi-Fi</li>
							<li>Benjamin FrankLAN</li>
							<li>Martin Router King</li>
						</ul>
					</div>
				</details>
			</div>
</template>
<script setup>
const props = defineProps(["header"]);
</script>
<style scoped>
summary header > svg {
  transform: scale(1) rotate(0deg);
  transition: 0.5s;
}

details summary::-webkit-details-marker {
  display: none;
}

details[open] {
  transition: 0.5s;
  transform-origin: center center;
  transform-box: fill-box;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
details[open] summary header > svg {
  transform: scale(1) rotate(45deg);
  transition: 0.5s;
}
details[open] summary header > h1 {
  font-weight: bold;
}
details[open] summary::marker {
  display: none;
}
details[open] summary:focus {
  outline: none;
}

.content > p {
  margin: 1rem 0;
}

details[open] summary ~ * {
  -webkit-animation: sweep 0.5s ease-in-out;
          animation: sweep 0.5s ease-in-out;
}

@-webkit-keyframes sweep {
  0% {
    opacity: 0;
    transform: translateX(-2.5rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes sweep {
  0% {
    opacity: 0;
    transform: translateX(-2.5rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>