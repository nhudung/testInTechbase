import Vue from "vue";
import Vuex from "vuex";
import { HTTP } from "@/plugins/axios";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {
		async getListCountry({}) {
			try {
				const response = await HTTP.get(`countries`);
				return {
					ok: true,
					data: response.data,
				};
			} catch (error) {
				return { ok: false, error };
			}
		},
		async getByCountry({}, param) {
			try {
				const response = await HTTP.get(`country/${param}`);
				return {
					ok: true,
					data: response.data,
				};
			} catch (error) {
				return { ok: false, error };
			}
		},
	},
	modules: {},
});
