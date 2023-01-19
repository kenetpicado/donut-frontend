<template>
	<div class="min-h-screen">
		<div class="grid h-screen place-items-center">

			<div class="flex flex-col">
				<div class="text-lg font-bold tracking-wide text-center mb-2">donut</div>

				<input type="text" name="" class="input-primary" placeholder="Carnet">
				<input type="password" name="" class="input-primary" placeholder="PIN">

				<select name="" id="" class="input-primary appearance-none">
					<option v-for="year in years" value="year" :key="year">{{ year }}</option>
				</select>

				<button class="btn-primary w-full" @click="$router.push('results')">Entrar</button>

				<p class="text-center mt-4 text-slate-800" style="font-size: 0.7rem;">
					Copyrigth 2023
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>

const years = [2022, 2021, 2020, 2019, 2018, 2017];

</script>

