const fs = require("fs");
const path = require("path");
// const db = require()
require("regenerator-runtime/runtime");
const request = require("supertest");

const server = "http://localhost:3000";
const db = require("../server/models/foodModel");

// const testFile = path.resolve(__dirname, '../server/db/markets.test.json');
/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe("Route integration", () => {
  xdescribe("/api/recipes", () => {
    describe("GET", () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it("responds with 200 status and text/html content type", () =>
        request(server)
          .get("/")
          .expect("Content-Type", /text\/html/)
          .expect(200));
    });
  });

  describe("/api/recipes", () => {
    describe("POST", () => {
      const dummyData = {
        recipeName: "Braised Ostrich Legs",
        ingredients: [
          {
            name: "ostrich leg",
            quantity: "10",
            unitOfMeasurement: "grams",
          },
        ],
        instructions: "braise it, sire",
      };
      it("responds with 200 status", () =>
        request(server)
          .post("/api/recipes")
          .send(JSON.stringify(dummyData))
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            return done();
          }));
    });
  });

  xdescribe("/api/recipeByIngredient", () => {
    describe("POST", () => {
      it("responds with 200 status and application/json content type", () =>
        request(server)
          .get("/markets")
          .expect("Content-Type", /json/)
          .expect(200));
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });
      // For this test, you'll need to inspect the body of the response and
      // ensure it contains the markets list. Check the markets.dev.json file
      // in the dev database to get an idea of what shape you're expecting.
      it('markets from "DB" json are in body of response', async () => {
        const res = await request(server).get("/markets");
        const markets = JSON.parse(fs.readFileSync(testFile));
        expect(res.body).toEqual(markets);
      });
    });
  });

  xdescribe("/api/login", () => {
    describe("POST", () => {});
  });
});
