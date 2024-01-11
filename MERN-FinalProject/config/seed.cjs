require('dotenv').config();
require('./database.cjs');

const Category = require('../models/category.cjs');
const Item = require('../models/item.cjs');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Bracelets', sortOrder: 10},
    {name: 'Ear rings', sortOrder: 20},
    {name: 'Necklace', sortOrder: 30},
    {name: 'Rings', sortOrder: 40},
    {name: 'Anklets', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
      {name: 'Bead', imageurl: "./images/brace6.png", category: categories[0], price: 10.95},
      {name: 'Infinite', imageurl:"./images/brace5.png", category: categories[0], price: 153.94},
      {name: 'Gold Chain', imageurl:"./images/brace4.png", category: categories[0], price: 58.98},
      {name: 'Pearl', imageurl:"./images/brace3.png", category: categories[0], price: 45.84},
      {name: 'Silver', imageurl:"./images/brace2.png", category: categories[0], price: 259.90},
      {name: 'Gold', imageurl:"./images/brace1.png", category: categories[0], price: 75.97},
      {name: 'Multi color', imageurl: "./images/ear1.png", category: categories[1], price: 18.95},
      {name: 'Black', imageurl:"./images/ear2.png", category: categories[1], price: 150.94},
      {name: 'Sapphire', imageurl:"./images/ear3.png", category: categories[1], price: 28.98},
      {name: 'Silver Studs', imageurl:"./images/ear4.png", category: categories[1], price: 145.84},
      {name: 'hoops', imageurl:"./images/ear5.png", category: categories[1], price: 25.90},
      {name: 'Pearl', imageurl:"./ images/ear6.png", category: categories[1], price: 75.97},
      {name: 'Baby feet', imageurl: "./images/neck1.pngq", category: categories[2], price: 120.95},
      {name: 'Floral', imageurl:"./images/neck2.png", category: categories[2], price: 153.94},
      {name: 'Emerald', imageurl:"./images/neck3.png", category: categories[2], price: 158.98},
      {name: 'Pearl', imageurl:"./images/neck4.png", category: categories[2], price: 45.84},
      {name: 'Ruby', imageurl:"./images/neck5.png", category: categories[2], price: 59.90},
      {name: 'Heart', imageurl:"./images/neck6.png", category: categories[2], price: 175.97},
      {name: 'Blue', imageurl: "./images/ring1.png", category: categories[3], price: 620.95},
      {name: 'White', imageurl:"./images/ring2.png", category: categories[3], price: 353.94},
      {name: 'Red', imageurl:"./images/ring3.png", category: categories[3], price: 158.98},
      {name: 'Green', imageurl:"./images/ring4.png", category: categories[3], price: 450.84},
      {name: 'Pearl', imageurl:"./images/ring5.png", category: categories[3], price: 590.90},
      {name: 'Pink', imageurl:"./images/ring6.png", category: categories[3], price: 750.97},
      {name: 'Ank1', imageurl: "./images/ank1.png", category: categories[4], price: 10.95 },
      {name: 'Ank2', imageurl:"./images/ank2.png", category: categories[4], price: 153.94},
      {name: 'Ank3', imageurl:"./images/ank3.png", category: categories[4], price: 58.98},
      {name: 'Ank4', imageurl:"./images/ank4.png", category: categories[4], price: 45.84},
      {name: 'Ank5', imageurl:"./images/ank5.png", category: categories[4], price: 259.90},
      {name: 'Ank6', imageurl:"./images/ank6.png", category: categories[4], price: 75.97},
  ]);

  console.log(items)

  process.exit();

})();