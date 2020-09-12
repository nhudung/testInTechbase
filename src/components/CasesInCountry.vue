<template>
	<div>
		<template>
			<v-data-table
				:headers="headers"
				:items="data"
				:items-per-page="10"
				:sort-by.sync="sortBy"
				:sort-desc.sync="sortDesc"
			>
				<template v-slot:item.Date="{ item }">
					<span>{{ getDate(item.Date) }}</span>
				</template>
			</v-data-table>
		</template>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				require: true,
			},
		},
		data() {
			return {
				headers: [
					{
						text: "Country",
						align: "center",
						value: "Country",
						sortable: true,
					},
					{ text: "Date", value: "Date", sortable: true },
					{ text: "City", value: "City" },
					{ text: "Confirmed", value: "Confirmed" },
					{ text: "Deaths", value: "Deaths" },
					{ text: "Recovered", value: "Recovered" },
					{ text: "Active", value: "Active" },
				],
				sortBy: "Date",
				sortDesc: true,
			};
		},
		methods: {
			getDate(date) {
				return date.slice(0, 10);
			},
		},
	};
</script>

<style></style>
