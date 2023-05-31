import { ref } from "vue";
import axios from "axios";
import { toast } from "../utils/toast.js";
import { useRouter } from "vue-router";
import { useGradesStore } from "../stores/useGrades.js";
import { storeToRefs } from "pinia";

export function useGrades() {
	const router = useRouter();
	const API_URL = import.meta.env.VITE_API_URL;
	const isLoading = ref(false);
	const store = useGradesStore();

	const { grades } = storeToRefs(store);

	async function getGrades(data) {
		isLoading.value = true;
		try {
			// const response = await axios.post(API_URL + "/v1/grades", data)
			const response = await axios.post(API_URL + "/test", data);
			store.setGrades(response.data);
			router.push({ name: "results" });
		} catch (e) {
			if (e.response.status == 401) {
				toast.error("Oops, algo no salio bien");
			} else {
				toast.error(Object.values(e.response.data.errors)[0].toString());
			}
		} finally {
			isLoading.value = false;
		}
	}

	return { getGrades, isLoading, grades, store, router };
}
