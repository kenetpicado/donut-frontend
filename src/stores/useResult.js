import { defineStore } from 'pinia'
import { ref } from "vue"

export const useResultStore = defineStore('result', () => {
  const result = ref([])

  function setResult(data) {
    result.value = data
  }

  function isResultEmpty() {
    return result.value.length == 0
  }

  return { result, setResult, isResultEmpty }
})