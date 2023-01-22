<template>
	<Details :open="open" @closeDetails="open = false" :component="component"></Details>

	<div class="min-h-screen text-gray-800 mx-auto" style="width: 90%;">
		<div class="grid grid-cols-2 mb-4 gap-2 mx-auto lg:w-1/2">
			<button :class="styleFirstButton" @click="mainView = true">Notas</button>
			<button :class="styleSecondButton"  @click="mainView = false">Información</button>
		</div>

		<div v-if="mainView" class="lg:w-1/2 mx-auto">
			<template v-for="(cycle, index) in result.cycles" :key="index">
				<Header :title="cycle.name" />
				<Card v-for="(component, index) in cycle.components"
					:key="index" :component="component" @click="showDetails(component)"/>
			</template>
		</div>
		<div v-else class="lg:w-1/2 mx-auto">
			<Header title="Datos del la universidad" />
			<SimpleCard>
				<div>{{ result.university.full_name }}</div>
				<div>{{ result.university.name }}</div>
				<div>{{ result.university.academic_year }}</div>
				<div>{{ result.university.faculty }}</div>
				<div>{{ result.university.career }}</div>
			</SimpleCard>
			<Header title="Datos del alumno" />
			<SimpleCard>
				<div>{{ result.student.name }}</div>
				<div>{{ result.student.id }}</div>
				<div>{{ result.student.average }}</div>
				<div>{{ result.student.grade }}</div>
			</SimpleCard>
		</div>
		<div class="lg:w-1/2 mx-auto">
			<button @click="$router.push({name:'home'})" type="button" class="btn-primary mb-8">Regresar
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Card from "../components/Card.vue";
import SimpleCard from "../components/SimpleCard.vue";
import Header from "../components/Header.vue";
import Details from "../components/Details.vue";
import { useGrades } from "../composables/useGrades";

const open = ref(false)
const mainView = ref(true)
const { result, store, router } = useGrades();

const component = ref([]);

onMounted(() => {
	if(store.isResultEmpty()) {
		router.push({ name: "home" });
	}
})

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
