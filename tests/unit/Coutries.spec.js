import { mount } from "@vue/test-utils";
import Coutries from "@/components/Coutries.vue";

describe("Coutries.spec.js", () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(Coutries, {
			// Beaware that props is overriden using `propsData`
			propsData: {
				data: [
					{
						Country: "Israel",
						Slug: "israel",
						ISO2: "IL",
					},
				],
			},
		});
	});

	it("has received data as the message property", () => {
		expect(cmp.vm.data).toEqual([
			{
				Country: "Israel",
				Slug: "israel",
				ISO2: "IL",
			},
		]);
	});
	it("has the expected html structure", () => {
		expect(cmp.element).toMatchSnapshot();
	});
	it("is a Coutries component", () => {
		expect(cmp.is(Coutries)).toBe(true);
	});
	// Vue instance
	it("Coutries is a vue instances", () => {
		expect(cmp.isVueInstance()).toBe(true);
	});
});
