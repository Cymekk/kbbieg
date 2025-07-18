<template>
	<header class="header relative">
		<NavbarComponent />
		<div class="absolute top-1/2 -translate-y-1/2 p-4 lg:left-1/2 lg:-translate-x-1/2 w-full">
			<h1
				class="text-[24px] lg:text-[32px] text-center text-white font-semibold font-[Poppins] xl:w-4/5 xl:mx-auto 2xl:w-3/5"
			>
				XVII Biegu o Puchar Burmistrza Miasta i Gminy Kąty Wrocławskie oraz III Memoriał Karola Chwastyka
			</h1>
			<div class="buttons mt-[16px] flex justify-center gap-[12px]">
				<a
					href="https://formularz.ultimasport.pl/390"
					target="_blank"
					class="header-link bg-emerald-400 hover:bg-emerald-500 shadow-emerald-400"
					>Zapisy</a
				>
				<a
					href="https://formularz.ultimasport.pl/uploads/regulations/390_Regulamin%20Bieg%20o%20Puchar%20Burmistrza%202025.pdf"
					target="_blank"
					class="header-link bg-blue-400 hover:bg-blue-500 shadow-blue-400"
					>Regulamin Biegu</a
				>
			</div>
			<div class="timer text-white mt-[16px] lg:mt-[32px]">
				<p class="text-center text-[22px] font-semibold lg:text-[28px]">Do startu pozostało:</p>
				<div class="flex gap-[24px] justify-center">
					<div class="flex flex-col items-center">
						<p class="text-[24px] lg:text-[26px]">{{ days }}</p>
						<p>Dni</p>
					</div>
					<div class="flex flex-col items-center">
						<p class="text-[24px] lg:text-[26px]">{{ hours }}</p>
						<p>Godzin</p>
					</div>
					<div class="flex flex-col items-center">
						<p class="text-[24px] lg:text-[26px]">{{ minutes }}</p>
						<p>Minut</p>
					</div>
					<div class="flex flex-col items-center">
						<p class="text-[24px] lg:text-[26px]">{{ seconds }}</p>
						<p>Sekund</p>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
const delta = ref(null)
const days = ref(null)
const hours = ref(null)
const minutes = ref(null)
const seconds = ref(null)

const startDate = new Date('09-14-2025 10:00').getTime()

const calculateRemainingTime = () => {
	delta.value = Math.abs(startDate - Date.now()) / 1000
	days.value = Math.floor(delta.value / 86400)
	delta.value = delta.value - days.value * 86400
	hours.value = Math.floor(delta.value / 3600) % 24
	delta.value = delta.value - hours.value * 3600
	minutes.value = Math.floor(delta.value / 60) % 60
	delta.value = delta.value - minutes.value * 60
	seconds.value = Math.floor(delta.value % 60)
}

calculateRemainingTime()

onMounted(() => {
	setInterval(calculateRemainingTime, 1000)
})
</script>

<style scoped></style>
