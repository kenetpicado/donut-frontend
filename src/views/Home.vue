<template>
	<div class="min-h-screen">
		<loading v-model:active="isLoading" :is-full-page="true"/>

		<div class="grid h-screen place-items-center">

			<div class="flex flex-col">
				<div class="text-lg font-bold tracking-wide text-center mb-2">donut</div>
				 <form @submit.prevent="getGrades(form)" class="w-48">
					<input type="text" v-model="form.id" class="input-primary" placeholder="Carnet">
					<input type="password" v-model="form.password" class="input-primary" placeholder="PIN">

					<select v-model="form.year" class="select-primary appearance-none">
						<option value="" disabled selected>Año</option>
						<option v-for="year in years" value="year" :key="year">{{ year }}</option>
					</select>

					<button class="btn-primary w-full" type="submit">Entrar</button>
				 </form>

				<p class="text-center mt-4 text-slate-800" style="font-size: 0.7rem;">
					Copyrigth 2023
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { useGrades } from "../composables/useGrades"
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const { getGrades, isLoading } = useGrades();

const form = reactive({
	id: '16-01275-0',
	password: 'FIPHU1',
	year: ''
})

const years = [2022, 2021, 2020, 2019, 2018, 2017];

</script>

