const express = require('express');
const router = express.Router();
const Item = require('../models/itemData');

//Routes
router.get('/', (req, res) => {
    Item.find()
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(400).json("Error" + err));
});

router.delete('api/items/:id', (req,res) => {
    Item.findByIdAndDelete(req.params.Id)
    .then(() => res.status(200).json("Item delted"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.put('/api/items/:id', (req, res) => {
    
});

router.post('/api/items', (req, res) => {
    const items = new Item({
        Id: req.body.Id,
        Name: req.body.Name,
        Description: req.body.Description,
        Price: req.body.Price,
        Quantity: req.body.Quantity
    });
    items.save()
    .then(() => res.status(201).json('new item added'))
    .catch((err) => res.status(400).json("Error:" + err));
});


module.exports = router;