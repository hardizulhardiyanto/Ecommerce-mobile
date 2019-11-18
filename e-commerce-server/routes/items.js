const express = require("express");
const router = express.Router();
const Item = require("../models/item");
const path = require("path");
const serverSite = "http://192.168.42.234:3001";



const defaultSortBy = [
  { field: "rate", asc: false },
  { field: "price", asc: true },
  { field: "vote", asc: false }
];

//get detail
router.get('/:_id', (req, res, next) => {

  Item.findById({ _id: req.params._id })
  .then((Item) => {
    res.status(201).json({
      success: true,
      message: "succes!! Data Found",
      Item

    })

  })
  .catch(err => res.json({ error: true, message: err }));

})


// get list
router.get("/", (req, res) => {

  console.log('get data===========');

  let sortBy = JSON.parse(
    req.header("sortBy") || JSON.stringify(defaultSortBy)
  );
  sortBy = sortBy
    .map(({ field, asc }) => `${asc ? "" : "-"}${field}`)
    .join(" ");

  const page = Number(req.header("page") || 1);
  const limit = Number(req.header("limit") || 4);
  const skip = (page - 1) * limit;

  Item.aggregate()
    .count("count")
    .exec()
    .then(result => {

      let numOfPages = result[0] ? Math.ceil(result[0].count / limit) : 0;

      Item.aggregate()
        .collation({ locale: "id" })
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .exec()
        .then(items =>
          res.json({

            error: false,
            numOfPages,
            items: items.map(item => ({
              ...item,
              filename: serverSite + item.filename
            }))
          })
        )
        .catch(err => res.json({ error: true, message: err }));
    })
    .catch(err => res.json({ error: true, message: err }));

});

// filter
router.post("/filter", (req, res) => {
  console.log('get data===========');

  let {
    categories,
    title,
    minPrice,
    maxPrice,
    minRate,
    maxRate,
    capacities,
    sizes,
    sortBy,
    page,
    limit
  } = req.body;

  let filter = {
    ...(categories && { category: { $in: JSON.parse(categories) } }),
    ...(title && { title: { $regex: title, $options: "i" } }),
    ...((minPrice || maxPrice) && {
      price: {
        ...(minPrice && { $gte: minPrice }),
        ...(maxPrice && { $lte: maxPrice })
      }
    }),
    ...((minRate || maxRate) && {
      rate: {
        ...(minRate && { $gte: minRate }),
        ...(maxRate && { $lte: maxRate })
      }
    }),
    ...(capacities && {
      capacities: { $elemMatch: { $in: JSON.parse(capacities) } }
    }),
    ...(sizes && {
      sizes: { $elemMatch: { $in: JSON.parse(sizes) } }
    })
  };

  sortBy = JSON.parse(sortBy || JSON.stringify(defaultSortBy));
  sortBy = sortBy
    .map(({ field, asc }) => `${asc ? "" : "-"}${field}`)
    .join(" ");

  const skip = (page - 1) * limit;

  Item.aggregate()
    .match(filter)
    .count("count")
    .exec()
    .then(result => {
      let numOfPages = result[0] ? Math.ceil(result[0].count / limit) : 0;
      Item.aggregate()
        .collation({ locale: "id" })
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .exec()
        .then(items =>
          res.json({
            error: false,
            numOfPages,
            items: items.map(item => ({
              ...item,
              filename: serverSite + item.filename
            }))
          })
        )
        .catch(err => res.json({ error: true, message: err }));
    })
    .catch(err => res.json({ error: true, message: err }));
});

// add
router.post("/", (req, res) => {
  console.log('get data===========');

  let { colors, capacities, sizes, stock, price, itemId } = req.body;
  let { file } = req.files;
  let filename = `${itemId}-${file.name}`;
  file.mv(path.join(__dirname, "..", "public", "images", filename), err => {
    if (err) console.log(err);
    else {
      let itemAdded = {
        ...req.body,
        ...(colors && { colors: JSON.parse(colors) }),
        ...(capacities && {
          capacities: JSON.parse(capacities).map(cap => `${cap} GB`)
        }),
        ...(sizes && { sizes: JSON.parse(sizes) }),
        itemId: Number(itemId),
        stock: Number(stock),
        price: Number(price),
        filename: "/images/" + filename,
        vote: 0,
        rate: 0,
        testimonials: []
      };

      Item.create(itemAdded)
        .then(item =>
          res.json({
            error: false,
            itemAdded: { ...item, filename: serverSite + item.filename }
          })
        )
        .catch(err => res.json({ error: true, message: err }));
    }
  });
});

// update vote, rate, stock, and/or testimonials of an item
router.put("/:itemId", (req, res) => {
  console.log('get data===========');

  let { itemId } = req.params;
  // vote, rate, & stock are already calculated at front-end
  // testimonials are already added at front-end
  let { vote, rate, stock, testimonials } = req.body;
  let itemUpdated = {
    ...(vote && { vote }),
    ...(rate && { rate }),
    ...(stock && { stock }),
    ...(testimonials && { testimonials: JSON.parse(testimonials) })
  };

  Item.findOneAndUpdate({ itemId }, itemUpdated, err => {
    if (err) res.json({ error: true, message: err });
    else {
      res.json({ error: false, itemId, ...itemUpdated });
    }
  });
});

module.exports = router;
