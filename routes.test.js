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

describe("gets all the items", function () {
  Test("check the status code and response", async function () {
    const resp = await request(app).post({ name: "jinja", price: 19.99 });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(items``);
  });
});
