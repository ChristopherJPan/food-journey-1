// import React from "react";
// import { configure, shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import toJson from "enzyme-to-json";

// import RecipeList from "src/main/components/RecipeList";
// import NavBar from "src/main/components/NavBar";

// Newer Enzyme versions require an adapter to a particular version of React
// configure({ adapter: new Adapter() });

// xdescribe("React unit tests", () => {
// 	xdescribe("NavBar", () => {
// 		let wrapper;
// 		const props = {
// 			label: "Mega",
// 			text: "Markets",
// 		};

// 		xbeforeAll(() => {
// 			wrapper = shallow(<LabeledText {...props} />);
// 		});

// 		xit("Renders a <p> tag with the label in bold", () => {
// 			expect(wrapper.type()).toEqual("p");
// 			expect(wrapper.text()).toEqual("Mega: Markets");
// 			expect(wrapper.find("strong").text()).toMatch("Mega");
// 		});
// 	});

// 	xdescribe("RecipeList", () => {
// 		let wrapper;
// 		const props = {
// 			totalCards: 2,
// 			marketList: [{ location: "CodeLand", cards: 2 }],
// 			addCard: () => "you added a card :)",
// 			deleteCard: () => "you deleted a card :(",
// 		};

// 		xbeforeAll(() => {
// 			wrapper = shallow(<MarketsDisplay {...props} />);
// 		});

// 		// TODO: Test the following:
// 		//   1. A MarketsDisplay should have an h4 element to display the 'Markets'
// 		//   title
// 		xit('should have an h4 element to display the "Markets" title', () => {
// 			expect(wrapper.find("h4").exists()).toEqual(true);
// 		});

// 		//   2. A single Market is rendered for each market in the
// 		//   marketList prop
// 		xit("A single Market is rendered for each market in the marketList prop", () => {
// 			const market = wrapper.children().at(1);
// 			console.log(toJson(market));
// 			expect(market.hasClass("marketBox")).toEqual(true);
// 		});
// 	});
// });
