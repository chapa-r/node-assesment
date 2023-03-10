const express = require("express");
const router = express.Router();
const Item = require("../models/itemData");

//Routes
router.get("/items", (req, res) => {
  console.log("sdsdsd");
  Item.find()
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(400).json("Error" + err));
});

router.get("/items/:id", (req, res) => {
    console.log("sdsdsd");
    const item = Item.findOne(req.params.Id).get();
    if(!item) {
      return res.status(404).json("Item not found");
    }
  
    Item.findOne(req.params.Id)
      .then((items) => res.status(200).json(items))
      .catch((err) => res.status(400).json("Error" + err));
  });

router.post("/items", (req, res) => {
    console.log("sdsdsd");
    const items = new Item({
      Name: req.body.Name,
      Description: req.body.Description,
      Price: req.body.Price,
      Quantity: req.body.Quantity,
    });
    items
      .save()
      .then(() => res.status(201).json("new item added"))
      .catch((err) => res.status(400).json("Error:" + err));
  });

  router.put("/items/:id", (req, res) => {
    console.log(req.body.Name);
    Item.findOneAndUpdate(req.params.Id)
      .then((items) => {
        (items.Name = req.body.Name),
          (items.Description = req.body.Description),
          (items.Price = req.body.Price),
          (items.Quantity = req.body.Quantity),
          items
            .save()
            .then(() => res.status(200).json("Item updated"))
            .catch((err) => res.status(400).json("Error" + err));
      })
      .catch((err) => res.status(404).json("Error" + err));
  });


router.delete("/items/:id", (req, res) => {
    const item = Item.findOne(req.params.Id).get();
    if(!item) {
        return res.status(404).json("Item doesn't exist");
    }

  Item.findOneAndRemove(req.params.Id)
    .then(() => res.status(204).json("Item delted"))
    .catch((err) => res.status(400).json("Error" + err));
});





module.exports = router;