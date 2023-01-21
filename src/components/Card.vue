<template>
	<div class="bg-white my-4 p-3 rounded-xl">
		<div class="flex justify-between items-center">
			<div>
				<div class="font-semibold tracking-wide mb-1 text-base">
					{{ component.name }}
				</div>
				<div v-if="component.name.includes('ACTIVIDAD ESTUDIANTIL')" class="text-xs text-lime-700">
					{{ component.partial_1 }}
				</div>
				<div v-else :class="type_text + ' text-xs'">
					{{ approved ? 'Aprobado' : 'Reprobado' }}
				</div>
			</div>
			<div :class="total_style + ' font-semibold text-xl ml-2'">
				{{ component.total }}
			</div>
		</div>

	</div>
</template>

<script setup>
	const props = defineProps({
		component: Object,
		required: true
	})

	const approved = props.component.total >= 60;
	const type_text = approved ? 'text-lime-700' : 'text-red-600';
	const total_style = approved ? '' : 'text-red-600';

</script>