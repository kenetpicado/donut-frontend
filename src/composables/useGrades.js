import { ref } from "vue";
import axios from "axios";
import { toast } from "../utils/toast.js";
import { useRouter } from "vue-router";

export function useGrades() {
	const router = useRouter();
	const results = ref([]);
	const API_URL = import.meta.env.VITE_API_URL;

	async function getGrades(data) {
		try {
			const response = await axios.post(API_URL + "v1/grades", data)
			results.value = response.data
			router.push({ name: "results" });
		} catch(e) {
			if (e.response.status == 401) {
				toast.error('Oops, algo no salio bien')
			} else {
				toast.error(Object.values(e.response.data.errors)[0])
			}
		}
	}

	return { getGrades, results }
}