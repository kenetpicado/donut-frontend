<template>
	<Details :open="openDetails" @closeDetails="openDetails = false" :component="componentDetails"></Details>

	<div class="min-h-screen text-gray-800 mx-auto" style="width: 90%;">
		<div class="grid grid-cols-2 mb-4 gap-2 mx-auto lg:w-1/2">
			<button :class="['w-full', showGrades ? 'btn-primary' : 'btn-secondary']" @click="showGrades = true">
				Notas
			</button>
			<button :class="['w-full', showGrades ? 'btn-secondary' : 'btn-primary']" @click="showGrades = false">
				Información
			</button>
		</div>

		<div v-if="showGrades" class="lg:w-1/2 mx-auto">
			<template v-for="(cycle, index) in grades.cycles" :key="index">

				<HeaderCycle :title="cycle.name" />

				<template v-for="(component, index) in cycle.components" :key="index">
					<CardComponent :component="component" @click="showDetails(component)" />
				</template>

			</template>
		</div>

		<div v-else class="lg:w-1/2 mx-auto">

			<HeaderCycle title="Datos del la universidad" />
			<SimpleCard>
				<div>{{ grades.university.full_name }}</div>
				<div>{{ grades.university.name }}</div>
				<div>{{ grades.university.academic_year }}</div>
				<div>{{ grades.university.faculty }}</div>
				<div>{{ grades.university.career }}</div>
			</SimpleCard>

			<HeaderCycle title="Datos del alumno" />
			<SimpleCard>
				<div>{{ grades.student.name }}</div>
				<div>{{ grades.student.id }}</div>
				<div>{{ grades.student.average }}</div>
				<div>{{ grades.student.grade }}</div>
			</SimpleCard>
		</div>
		<div class="lg:w-1/2 mx-auto">
			<button @click="$router.push({ name: 'home' })" type="button" class="btn-primary mb-8">
				Regresar
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import CardComponent from "../components/CardComponent.vue";
import SimpleCard from "../components/SimpleCard.vue";
import HeaderCycle from "../components/HeaderCycle.vue";
import Details from "../components/Details.vue";
import { useGrades } from "../composables/useGrades";

const openDetails = ref(false)
const showGrades = ref(true)
const { grades, store, router } = useGrades();

const componentDetails = ref([]);

if (store.isEmpty()) {
	router.push({ name: "home" });
}

function showDetails(data) {
	componentDetails.value = data
	openDetails.value = true
}

</script>
