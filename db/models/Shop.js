const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const ShopSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: String,
    image: { type: String },
    type: {
        type: [String], 
        enum: ["Deleivery","Dine-in","Pick-up" ],

    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
},
);

ShopSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Shop", ShopSchema);
