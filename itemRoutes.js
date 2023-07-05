const express = require("express");
const router = express.Router();
const items = require("./fakeDb");

router.get("/", function (req, res) {
  return res.json(items);
});

router.post("/", function (req, res) {
  const newItem = req.body;
  items.push(newItem);
  res.json({ added: newItem });
});

router.get("/:name", function (req, res) {
  const val = req.params.name;
  items.find((item) => {
    if (item.name === val) {
      return res.json(item);
    }
  });
});

router.patch("/:name", function (req, res) {
  const item = req.params.name;
  items.find((el) => {
    if (el.name === item) {
      console.log(item);
    }
  });
});

module.exports = router;
