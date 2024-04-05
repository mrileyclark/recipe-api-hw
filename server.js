const express = require("express");
const app = express();
const PORT = 8001;

const recipes = {
  "chicken soup": {
    id: 1,
    strCategory: "chicken",
    strInstructions:
      "Make the stock by boiling the chicken and veggies until the meat is falling off the bone. Remove the chicken and cut into pieces (discard skin and bones).Strain the vegetables (reserving the stock) and cut into pieces. Rinse the pot.Return everything to the pot. Heat the soup through and season to taste.",
    strTime: "20 minutes",
    strThumb:
      "https://www.allrecipes.com/thmb/SDVz9WI7dvSUyBJpN7Q78G_lbXQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8814-homemade-chicken-soup-DDMFS-step-6-31538-425e878f0f2b4a7497ce799ddb27832d.jpg",
  },
  meatloaf: {
    id: 2,
    strCategory: "beef",
    strInstructions:
      " Place breadcrumbs in a very large bowl. Grate over onion. Mix so the breadcrumbs are all wet. Add remaining ingredients. Mix well using your hands. Form into a loaf shape, pinching together then smoothing over creases and cracks (helps prevent cracks during baking). Transfer into loaf tin. Brush generously with glaze, using about 1/2. Bake for 45 minutes. Remove from oven and brush with most of the remaining glaze. If there is excess fat pooling, scoop/pour it off. Bake for a further 30 minutes. Remove from oven.Stand for 10 minutes before turning out and cutting into thick slices. You will probably get a bit of crumbling just on the edges of the first couple of slices, this is normal and indicative of the tenderness of the meatloaf (zero crumble indicates firm packed harder meatloaf which isn’t as enjoyable!).",
    strTime: "1 hr 15 minutes",
    strThumb:
      "https://www.recipetineats.com/wp-content/uploads/2019/10/Meatloaf_3a.jpg",
  },
  "pumpkin soup": {
    id: 2,
    strCategory: "vegetarian",
    strInstructions:
      "Cut the pumpkin, spring onions and the red onion into cubes. Heat the cooking oil in a pot and add turmeric, ginger, garlic and onion, stir and fry until golden. Add pumpkin and water and boil until the pumpkin is tender and then add the vegetarian stock. When the pumpkin is boiled soft, leave to cool, then mix in a blender to make a soup. Reheat the soup and add salt and pepper to taste. Sprinkle parsley for topping.",
    strTime: "45 minutes",
    strThumb:
      "https://www.cookingclassy.com/wp-content/uploads/2022/10/pumpkin-soup-5.jpg",
  },
  unknown: {
    id: "unknown",
    strCategory: "unknown",
    strInstructions: "unknown",
    strTime: "unknown",
    strThumb: "unknown",
  },
};

//Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const recipeName = req.params.name.toLowerCase();
  if (recipes[recipeName]) {
    res.json(recipes[recipeName]);
  } else {
    res.json(recipes["unknown"]);
  }
});

//listen for port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
