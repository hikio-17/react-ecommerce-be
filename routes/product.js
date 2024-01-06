const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  listAll,
  read,
  remove,
  update,
  list,
  productsCount,
  productStart,
  listRelated,
  searchFilters,
} = require("../controllers/product");

// router
router.post("/product", authCheck, adminCheck, create);
// route total product
router.get("/products/total", productsCount);

router.get("/products/:count", listAll);
router.delete("/product/:slug", authCheck, adminCheck, remove);
router.get("/product/:slug", read);
router.put("/product/:slug", authCheck, adminCheck, update);

// route product sort, order, limit
router.post("/products", list);

// ratings
router.put("/product/star/:productId", authCheck, productStart);

// related
router.get("/product/related/:productId", listRelated);

// search/filters
router.post("/search/filters", searchFilters);

module.exports = router;
