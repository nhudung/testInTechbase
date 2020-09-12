<template>
	<div class="wrapHome">
		<v-container>
			<h1 class="title">CORONAVIRUS COVID19</h1>
			<v-row>
				<v-col cols="12" sm="4">
					<Coutries :data="listCountry" @getByCountry="getByCountry" />
				</v-col>
				<v-col cols="12" sm="8">
					<CasesInCountry :data="listcasesByCountry" />
				</v-col>
			</v-row>
		</v-container>
		<div>
			<v-dialog v-model="dialog" width="500">
				<v-card>
					<v-card-text class="style-message">
						{{ message }}
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" text @click="dialog = false">
							Close
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
	</div>
</template>

<script>
	import Coutries from "@/components/Coutries";
	import CasesInCountry from "@/components/CasesInCountry";
	import { mapActions } from "vuex";
	export default {
		components: {
			Coutries,
			CasesInCountry,
		},
		data() {
			return {
				listCountry: [],
				listcasesByCountry: [],
				dialog: false,
				message: "",
			};
		},
		created() {
			this.getListCountry();
			this.getByCountry();
		},
		methods: {
			...mapActions({
				apiGetListCountry: "getListCountry",
				apigetByCountry: "getByCountry",
			}),
			async getListCountry() {
				const response = await this.apiGetListCountry();
				if (this.failRespone(response)) return;
				this.listCountry = response.data;
			},
			async getByCountry(slug) {
				if (!slug) {
					slug = "vietnam";
				}
				const response = await this.apigetByCountry(slug);
				if (this.failRespone(response)) return;
				this.listcasesByCountry = response.data;
			},
			failRespone(response) {
				if (!response.ok) {
					this.message = response.error.message;
					this.dialog = true;
					return true;
				}
			},
		},
	};
</script>

<style lang="scss">
	.wrapHome {
		font-family: "Roboto", sans-serif;
		.title {
			text-align: center;
			margin: 50px 0;
		}
	}
	.v-dialog > .v-card > .v-card__text.style-message {
		text-align: center;
		font-size: 20px;
		padding: 30px 0;
	}
</style>
