<template>
	<div class="coutries-select">
		<v-overflow-btn
			:items="data"
			label="Viet Nam"
			editable
			item-value="Slug"
			item-text="Country"
			@change="handleClick"
		></v-overflow-btn>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				required: true,
			},
		},
		methods: {
			handleClick(value) {
				this.$emit("getByCountry", value);
			},
		},
	};
</script>

<style lang="scss">
	.coutries-select {
		.v-input__slot {
			border-color: transparent !important;
			box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
		}
		.v-input {
			padding: 0;
			margin: 0;
		}
	}
</style>
