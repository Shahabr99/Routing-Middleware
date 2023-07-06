const express = require("express");
const router = express.Router();
const items = require("./fakeDb");

// Getting all the items
router.get("/", function (req, res) {
  return res.json(items);
});

// Adding one item
router.post("/", function (req, res) {
  const newItem = req.body;
  items.push(newItem);
  res.json({ added: newItem });
});

// returning the searched item
router.get("/:name", function (req, res) {
  const val = req.params.name;
  items.find((item) => {
    if (item.name === val) {
      return res.json(item);
    }
  });
});

// Updating info of an item
router.patch("/:name", function (req, res) {
  const item = req.params.name;
  const data = req.body;
  items.find((el) => {
    if (el.name === item) {
      el.name = data;
    }
    return res.json({ update: el });
  });
});

router.delete("/:name", function (req, res) {
  const val = req.params.name;

  items.find((item) => {
    if (item.name === val) {
      const idx = items.indexOf(item);

      items.splice(idx, 1);
      return res.json({ message: "deleted" });
    }
  });
});

module.exports = router;
