import assert from "node:assert/strict";
import test from "node:test";
import { total } from "../src/invoice.ts";

test("arrondit la TVA au centime le plus proche", () => {
  assert.equal(total(1000), 1200);
  assert.equal(total(103), 124);
});
