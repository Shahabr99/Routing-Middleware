
// we need to set up the environment. We have three option of production, development and test.
Process.env.NODE_ENV = "test";

const app = require("./app");
const request = require("supertest");
const items = require("./fakeDb");
const express = require("express");

let item = { name: "infiniti", price: 12000 };


beforeEach(function () {
  items.push(item);
});

afterEach(function () {
  items.length = 0;
});


describe("GET /items", function () {
  test("gets all the items", async function () {
    const resp = await request(app).get(`/items`);
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toEqual([{ "name": "mop", "price": 22.5 }]);
  });
});

describe("POST /items", function() {
  test("add a new item", async function() {
    const resp = await request(app).post('/items').send({name: "elizabeth", price:1099})
    expect(resp.statusCode).toEqual(200)
    expect(resp.body).toEqual({"added": {name: "elizabeth", price: 1099}})
  })
})

