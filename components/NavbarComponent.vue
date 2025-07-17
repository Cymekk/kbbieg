<template>
	<nav class="bg-[#fff] shadow-sm shadow-white">
		<div class="max-w-[1200px] mx-auto p-2 flex justify-between items-center">
			<RouterLink to="/">
				<img src="../assets/img/logo.png" alt="Logo Klubu Biegacza Kąty Wrocławskie" class="h-[80px]" />
			</RouterLink>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 24 24"
				class="lg:hidden"
				@click="isMenuVisible = true"
			>
				<path
					fill="#1079f9"
					fill-rule="evenodd"
					d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1"
					clip-rule="evenodd"
				/>
			</svg>
			<NavbarLinksComponent />
			<MobileNavComponent :menuActive="isMenuVisible" @close-menu="isMenuVisible = false" />
		</div>
	</nav>
</template>

<script setup lang="ts">
const isMenuVisible = ref(false)
</script>

<style scoped></style>
