import { defineStore } from 'pinia'
import { ref } from "vue"

export const useGradesStore = defineStore('grades', () => {
    const grades = ref([])

    function setGrades(data) {
        grades.value = data
    }

    function isEmpty() {
        return grades.value.length == 0
    }

    return { grades, setGrades, isEmpty }
})