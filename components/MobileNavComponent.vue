<template>
	<div
		class="fixed inset-0 z-20 flex justify-center items-center bg-[#1079f9] bg-[url('/assets/img/ooorganize.svg')] bg-no-repeat bg-cover bg-bottom transition-transform duration-300"
		:class="{ 'translate-x-[100%]': !menuActive, 'translate-x-0': menuActive }"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="48"
			height="48"
			viewBox="0 0 24 24"
			class="absolute top-0 right-0"
			@click="emit('close-menu')"
		>
			<path
				fill="#fff"
				d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
			/>
		</svg>
		<div class="links flex flex-col gap-[32px] uppercase text-[28px] text-white font-semibold">
			<RouterLink
				:to="{ path: '/', hash: '#about-run' }"
				class="border-b-[1px] text-center"
				@click="emit('close-menu')"
			>
				o biegu
			</RouterLink>
			<RouterLink :to="{ path: '/', hash: '#prices' }" class="border-b-[1px] text-center" @click="emit('close-menu')">
				wpisowe
			</RouterLink>
			<a
				href="https://formularz.ultimasport.pl/390"
				target="_blank"
				class="border-b-[1px] text-center"
				@click="emit('close-menu')"
				>Zapisy</a
			>
			<a
				href="https://formularz.ultimasport.pl/uploads/regulations/390_Regulamin%20Bieg%20o%20Puchar%20Burmistrza%202025.pdf"
				target="_blank"
				class="border-b-[1px] text-center"
				@click="emit('close-menu')"
				>Regulamin</a
			>
			<RouterLink :to="{ path: '/', hash: '#contact' }" class="border-b-[1px] text-center" @click="emit('close-menu')">
				kontakt
			</RouterLink>

			<a href="https://www.facebook.com/klub.biegacza.katy.wroclawskie" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="mx-auto">
					<path
						fill="#fff"
						fill-rule="evenodd"
						d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21 21 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z"
					/>
				</svg>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	menuActive: Boolean,
})

const emit = defineEmits(['close-menu'])
</script>

<style scoped></style>
