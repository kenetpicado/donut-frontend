<template>
	<div class="min-h-screen text-gray-800 mx-auto" style="width: 90%;">
		<div class="grid grid-cols-2 mb-4 gap-4">
			<button class="btn-primary w-full" role="button">Notas</button>
			<button class="btn-secondary w-full">Información</button>
		</div>
		<template v-for="(cycle, index) in results.cycles" :key="index">
			<Header :title="cycle.name" />
			<Card v-for="(component, index) in cycle.components" :key="index" :component="component"/>
		</template>
	</div>
</template>

<script setup>
import Card from "../components/Card.vue";
import Header from "../components/Header.vue";
import { useGrades } from "../composables/useGrades"

const results = JSON.parse(localStorage.getItem("results"));

</script>
