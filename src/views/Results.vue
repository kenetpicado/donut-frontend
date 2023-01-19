<script setup>
import Card from "../components/Card.vue";
import Header from "../components/Header.vue";

</script>

<template>
	<div class="min-h-screen text-gray-800 mx-auto" style="width: 90%;">
		<div class="grid grid-cols-2 mb-4 gap-4">
			<button class="btn-primary w-full">Notas</button>
			<button class="btn-secondary w-full">Información</button>
		</div>
		<Header />
		<Card />
		<Card />
		<Header />
	</div>
</template>
