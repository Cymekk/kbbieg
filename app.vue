<template>
	<div>
		<nuxt-page />
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: 'XVII Bieg o Puchar Burmistrza Miasta i Gminy Kąty Wrocławskie / III Memoriał Karola Chwastyka',
	ogTitle: 'XVII Bieg o Puchar Burmistrza Miasta i Gminy Kąty Wrocławskie / III Memoriał Karola Chwastyka',
	description: 
		'Biegaj z nami w Kątach Wrocławskich! 14 września 2025 – 5 km lub 10 km w sportowej atmosferze. Start o 10:00 – zapisz się już teraz!',
	ogDescription:
		'Biegaj z nami w Kątach Wrocławskich! 14 września 2025 – 5 km lub 10 km w sportowej atmosferze. Start o 10:00 – zapisz się już teraz!',
	ogImage: 'https://bieg.kbkatywr.pl/poster.png',
	ogImageAlt: 
		'Plakat reklamujący XVII Bieg o Puchar Burmistrza Miasta i Gminy Kąty Wrocławskie  III Memoriał Karola Chwastyka',
	ogUrl: 'https://bieg.kbkatywr.pl/',
	ogType: 'website',
	fbAppId: 746039874584169,
})
useHead({
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-WYMVH5YHWY'
    },
    {
      innerHTML: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WYMVH5YHWY');",
      type: 'text/javascript'
    }
  ]
})
</script>
