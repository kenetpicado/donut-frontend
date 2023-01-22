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
				<label v-if="component.tutorship">{{ component.tutorship }}</label>
				<label v-else-if="component.course">{{ component.course }}</label>
				<label v-else>{{ component.total }}</label>
			</div>
		</div>
	</div>
</template>

<script setup>
import  { computed } from 'vue'

const props = defineProps({
	component: Object,
	required: true
})

const approved = computed(() => {
	if (props.component.tutorship) {
		return props.component.tutorship >= 60;
	} else if (props.component.course) {
		return props.component.course >= 60;
	} else {
		return props.component.total >= 60;
	}
})

const type_text = computed(() => {
	return approved.value ? 'text-lime-700' : 'text-red-600';
})

const total_style = computed(() => {
	return approved.value ? '' : 'text-red-600';
})

</script>