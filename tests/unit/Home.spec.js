import { shallow } from "@vue/test-utils";
import Home from "@/pages/Home.vue";

describe("Home.spec.js", () => {
	let cmp;

	beforeEach(() => {
		cmp = shallow(Home, {
			data: {
				listCountry: [
					{
						Country: "Viet Nam",
						CountryCode: "VN",
					},
				],
			},
		});
	});

	it("has the expected html structure", () => {
		expect(cmp.element).toMatchSnapshot();
	});
});
