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

router.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if(!item) return res.status(404).send('Item not found'); //status 400
 
    // status 200
    res.status(200).send(item);
 
 });


router.post("/items", (req, res) => {
    console.log("sdsdsd");
    const items = new Item({
      Id: req.body.Id,
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
    Item.findById(req.params.Id)
    .then((items) => {
        items.Name = req.body.Name,
        items.Description = req.body.Description,
        items.Price = req.body.Price,
        items.Quantity = req.body.Quantity,
        items
        .save()
        .then(() => res.status(200).json("Item updated"))
        .catch((err) => res.status(400).json("Error" + err));

    })
    .catch((err) => res.status(404).json("Error" + err));
});

router.delete("/items/:id", (req, res) => {
  Item.findByIdAndDelete(req.params.Id)
    .then(() => res.status(204).json("Item delted"))
    .catch((err) => res.status(400).json("Error" + err));
});


module.exports = router;