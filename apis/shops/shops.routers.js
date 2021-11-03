const express = require("express");
const Shop = require("../../db/models/Shop");
const upload = require("../../middleware/multer");

const {
  shopListFetch,
  shopCreate,
  fetchShop,
  productCreate,
} = require("./shops.controllers");

// Create a mini express application
const router = express.Router();

// Param Middleware
router.param("shopId", async (req, res, next, shopId) => {
  const shop = await fetchShop(shopId, next);
  if (shop) {
    req.shop = shop;
    next();
  } else {
    next({ status: 404, message: "Shop Not Found!" });
  }
});

router.post("/",upload.single("image") ,shopCreate);

router.post("/:shopId/products",upload.single("image") ,productCreate);



router.get("/", shopListFetch);


module.exports = router;