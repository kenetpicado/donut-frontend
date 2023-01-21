<template>
	<Details :open="open" @closeDetails="open = false" :component="component"></Details>

	<div class="min-h-screen text-gray-800 mx-auto" style="width: 90%;">
		<div class="grid grid-cols-2 mb-4 gap-2 mx-auto lg:w-1/2">
			<button :class="styleFirstButton" @click="mainView = true">Notas</button>
			<button :class="styleSecondButton"  @click="mainView = false">Información</button>
		</div>

		<div v-if="mainView" class="lg:w-1/2 mx-auto">
			<template v-for="(cycle, index) in results.cycles" :key="index">
				<Header :title="cycle.name" />
				<Card v-for="(component, index) in cycle.components"
					:key="index" :component="component" @click="showDetails(component)"/>
			</template>
		</div>
		<div v-else class="lg:w-1/2 mx-auto">
			<Header title="Datos del la universidad" />
			<SimpleCard>
				<div>{{ results.university.full_name }}</div>
				<div>{{ results.university.name }}</div>
				<div>{{ results.university.academic_year }}</div>
				<div>{{ results.university.faculty }}</div>
				<div>{{ results.university.career }}</div>
			</SimpleCard>
			<Header title="Datos del alumno" />
			<SimpleCard>
				<div>{{ results.student.name }}</div>
				<div>{{ results.student.id }}</div>
				<div>{{ results.student.average }}</div>
				<div>{{ results.student.grade }}</div>
			</SimpleCard>
		</div>
		<div class="lg:w-1/2 mx-auto">
			<button @click="$router.push({name:'home'})" type="button" class="btn-primary mb-8">Regresar
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
import Card from "../components/Card.vue";
import SimpleCard from "../components/SimpleCard.vue";
import Header from "../components/Header.vue";
import Details from "../components/Details.vue";

const open = ref(false)
const mainView = ref(true)
const results = JSON.parse(localStorage.getItem("results"));

const component = ref([]);

if(results === null) {
	window.location.href = "/";
}

function showDetails(component) {
	open.value = true
	this.component = component
}

const styleFirstButton = computed(() => {
	if(mainView.value) {
		return "btn-primary w-full";
	} else {
		return "btn-secondary w-full";
	}
})

const styleSecondButton = computed(() => {
	if(!mainView.value) {
		return "btn-primary w-full";
	} else {
		return "btn-secondary w-full";
	}
})

</script>
