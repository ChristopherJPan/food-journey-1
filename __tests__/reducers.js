import subject from "../src/redux/reducers/reducers";

// initialize some dummy data
describe("recipe reducer", () => {
	let state;

	// before every test we want to initialize the data
	beforeEach(() => {
		state = {
			accountId: 0,
			account: "",
			accountFirstName: "",
			accountLastName: "",
			accountEmail: "",
			recipeList: [],
			currentRecipeId: 0,
		};
	});

	// test for default state

	xdescribe("default state", () => {
		it("should return a default state when given an undefined input", () => {
			expect(subject(undefined, { type: undefined })).toEqual(state);
		});
	});

	// test for unrecognized action types
	xdescribe("unrecognized action types", () => {
		it("should return the original without any duplication", () => {
			const action = { type: "PANTSLESS_THUNDERGOOSE" };
			expect(subject(state, action)).toBe(state);
		});
	});

	// test for action types
	describe("CREATERECIPE", () => {
		//   const newRecipe = {
		//     account: state.account,
		//     recipeId: currentRecipeId,
		//     recipeName: action.payload.recipeName,
		//     ingredients: action.payload.ingredients,
		//     instructions: action.payload.instructions,
		//   }

		//   ingredients: [{
		//     name: document.getElementById('ingredientName').value,
		//     quantity: document.getElementById('ingredientQuantity').value,
		//     unitOfMeasurement: document.getElementById('ingredientUnit').value
		//   }],
		const fakePayload = {
			recipeName: "Braised ostrich legs",
			ingredients: [
				{
					name: "Ostrich leg",
					quantity: 2,
					unitOfMeasurement: "legs",
				},
			],
			instructions: "pan fry that shiet",
		};
		const action = {
			type: "CREATERECIPE",
			payload: fakePayload,
		};
		// testing if sent payload matches the recipelist item
		it("should have the sent recipe in the recipeList", () => {
			// deconstruct to grab the recipeList
			const { recipeList } = subject(state, action);
			expect(recipeList[0]).toEqual({...fakePayload, recipeId: 1, account: ""});
		});

		// testing if the recipeId incremented to 1
		it("should increment recipeId by 1", () => {
			const { currentRecipeId } = subject(state, action);
			expect(currentRecipeId).toEqual(1);
		});

		// testing if new state object doesn't mutate the original state (not.toBe)
		it("should be the new state", () => {
			const newState = subject(state, action);
			expect(newState).not.toBe(state);
		});
	});

	xdescribe("LOGIN", () => {
		const action = {
			type: "LOGIN",
			payload: {}, // ???
		};
	});

	xdescribe("SEARCHING", () => {
		const action = {
			type: "SEARCHING",
			payload: {}, // ???
		};
	});

	xdescribe("GET_INITIAL_STATE", () => {
		const action = {
			type: "GET_INITIAL_STATE",
			payload: {}, // ???
		};
	});
});
