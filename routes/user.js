const express = require("express");
const router = express.Router();

// middlewares
const { authCheck } = require("../middlewares/auth");

// controller
const {
  userCart,
  getUserCart,
  emptyCart,
  saveAddress,
  applyCouponToUserCart,
  createOrder,
  orders,
  addToWishlist,
  wishList,
  removeWishlist,
  createCashOrder,
} = require("../controllers/user");

router.get("/user/cart", authCheck, getUserCart); // get cart
router.post("/user/cart", authCheck, userCart); // save cart to database
router.delete("/user/cart", authCheck, emptyCart); // empty cart
router.post("/user/address", authCheck, saveAddress); // save user address

// user create order
router.post("/user/order", authCheck, createOrder); // stripe
router.post("/user/cash-order", authCheck, createCashOrder); // cod

router.get("/user/order", authCheck, orders);

// user got coupon
router.post("/user/cart/coupon", authCheck, applyCouponToUserCart);

// wishlist
router.get("/user/wishlist", authCheck, wishList);
router.post("/user/wishlist", authCheck, addToWishlist);
router.put("/user/wishlist/:productId", authCheck, removeWishlist);

// router.get("/user", (req, res) => {
//   res.json({
//     data: "Hey you hit user API endpoint",
//   });
// });

module.exports = router;
