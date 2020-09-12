import { mount } from "@vue/test-utils";
import CasesInCountry from "@/components/CasesInCountry.vue";

describe("CasesInCountry.spec.js", () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(CasesInCountry, {
			// Beaware that props is overriden using `propsData`
			propsData: {
				data: [
					{
						Country: "Viet Nam",
						CountryCode: "VN",
						Province: "",
						City: "",
						CityCode: "",
						Lat: "14.06",
						Lon: "108.28",
						Confirmed: 0,
						Deaths: 0,
						Recovered: 0,
						Active: 0,
						Date: "2020-01-22T00:00:00Z",
					},
				],
			},
		});
	});

	it('has received ["Cat"] as the message property', () => {
		expect(cmp.vm.data).toEqual([
			{
				Country: "Viet Nam",
				CountryCode: "VN",
				Province: "",
				City: "",
				CityCode: "",
				Lat: "14.06",
				Lon: "108.28",
				Confirmed: 0,
				Deaths: 0,
				Recovered: 0,
				Active: 0,
				Date: "2020-01-22T00:00:00Z",
			},
		]);
	});
	it("has the expected html structure", () => {
		expect(cmp.element).toMatchSnapshot();
	});
	it("is a CasesInCountry component", () => {
		expect(cmp.is(CasesInCountry)).toBe(true);
	});
	// Vue instance
	it("CasesInCountry is a vue instances", () => {
		expect(cmp.isVueInstance()).toBe(true);
	});
});
