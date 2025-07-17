<template>
	<ul class="hidden lg:flex gap-[12px] text-black text-[18px] uppercase">
		<RouterLink
			:to="{ path: '/', hash: '#about-run' }"
			class="hover:text-[#1079f9] cursor-pointer transition-colors duration-300"
		>
			o biegu
		</RouterLink>

		<RouterLink
			:to="{ path: '/', hash: '#prices' }"
			class="hover:text-[#1079f9] cursor-pointer transition-colors duration-300"
		>
			wpisowe
		</RouterLink>
		<a
			href="https://formularz.ultimasport.pl/390"
			target="_blank"
			class="hover:text-[#1079f9] cursor-pointer transition-colors duration-300"
			>Zapisy</a
		>
		<a
			href="https://formularz.ultimasport.pl/uploads/regulations/390_Regulamin%20Bieg%20o%20Puchar%20Burmistrza%202025.pdf"
			target="_blank"
			class="hover:text-[#1079f9] cursor-pointer transition-colors duration-300"
			>Regulamin Biegu</a
		>
		<RouterLink
			:to="{ path: '/', hash: '#contact' }"
			class="hover:text-[#1079f9] cursor-pointer transition-colors duration-300"
		>
			kontakt
		</RouterLink>
	</ul>
</template>

<script setup lang="ts"></script>

<style scoped></style>
