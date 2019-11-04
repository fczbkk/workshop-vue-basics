const CLOTHING = 'CLOTHING'
const COSMETICS = 'COSMETICS'
const ACCESSORIES = 'ACCESSORIES'
const SHOES = 'SHOES'

const categories = {
  [CLOTHING]: "Clothing",
  [COSMETICS]: "Cosmetics",
  [ACCESSORIES]: "Accessories",
  [SHOES]: "Shoes"
}

const products = [
  {
    "id": "beanie-hat",
    "title": "Simple hat",
    "description": "Protects your head when it gets cold and windy.",
    "category": CLOTHING,
    "image": "childrens-black-beanie.jpg",
    "price": 100,
    "availability": 10,
    "highlight": false
  },
  {
    "id": "boho-earrings",
    "title": "Earrings",
    "description": "Put a little blue balls into your ears.",
    "category": ACCESSORIES,
    "image": "boho-earrings.jpg",
    "price": 450,
    "availability": 0,
    "highlight": false
  },
  {
    "id": "brown-purse-with-shoulder-strap",
    "title": "Purse with shoulder strap",
    "description": "Practical brown leather purse. You can fit lots of stuff in it.",
    "category": ACCESSORIES,
    "image": "brown-purse-with-shoulder-strap.jpg",
    "price": 1500,
    "availability": 5,
    "highlight": true
  },
  {
    "id": "beard-oil-bottles",
    "title": "Beard oil",
    "description": "Put this on if you want your hipster beard to be oily.",
    "category": COSMETICS,
    "image": "beard-oil-bottles.jpg",
    "price": 500,
    "availability": 2,
    "highlight": false
  },
  {
    "id": "galaxy-earrings",
    "title": "Galaxy earrings",
    "description": "These earrings look like a galaxy. Notice: It is not real galaxy.",
    "category": ACCESSORIES,
    "image": "galaxy-earrings.jpg",
    "price": 1200,
    "availability": 7,
    "highlight": false
  },
  {
    "id": "gold-zipper-on-black-fashion-backpack",
    "title": "Fashion backpack",
    "description": "If you have too much stuff to fit your purse, put more stuff on your back.",
    "category": ACCESSORIES,
    "image": "gold-zipper-on-black-fashion-backpack.jpg",
    "price": 2000,
    "availability": 20,
    "highlight": false
  },
  {
    "id": "kids-fashion-shorts",
    "title": "Shorts for kids",
    "description": "Great for kids that run around a lot.",
    "category": CLOTHING,
    "image": "kids-fashion-shorts.jpg",
    "price": 350,
    "availability": 70,
    "highlight": true
  },
  {
    "id": "navy-blue-and-white-left-shoe",
    "title": "Navy blue shoes",
    "description": "You will look like a sailor in these shoes. Because they are navy blue.",
    "category": SHOES,
    "image": "navy-blue-and-white-left-shoe.jpg",
    "price": 1200,
    "availability": 50,
    "highlight": false
  },
  {
    "id": "pair-of-navy-blue-skate-shoes",
    "title": "Navy blue skate shoes",
    "description": "These shoes are navy blue, but you won't look like a sailor in them. You'll look like a skater.",
    "category": SHOES,
    "image": "pair-of-navy-blue-skate-shoes.jpg",
    "price": 900,
    "availability": 15,
    "highlight": false
  },
  {
    "id": "purple-gemstone-necklace",
    "title": "Gemstone necklace",
    "description": "This necklace has a purple gemstone pendant on it.",
    "category": ACCESSORIES,
    "image": "purple-gemstone-necklace.jpg",
    "price": 1700,
    "availability": 3,
    "highlight": true
  },
  {
    "id": "red-LED-shoes",
    "title": "Red LED shoes",
    "description": "These shoes are not very practical. But they will make you look cool in the dark.",
    "category": SHOES,
    "image": "red-LED-shoes.jpg",
    "price": 1000,
    "availability": 50,
    "highlight": true
  },
  {
    "id": "bathing-suit",
    "title": "Bathing suit",
    "description": "Do you like swimming outside of nudist beaches? They you need a bathing suit. Like this one.",
    "category": CLOTHING,
    "image": "summer-print-bathing-suit.jpg",
    "price": 800,
    "availability": 50,
    "highlight": false
  },
  {
    "id": "swim-shorts",
    "title": "Swim shorts",
    "description": "Like a bathing suit, but instead for bathing, this is one is for swimming.",
    "category": CLOTHING,
    "image": "swim-shorts.jpg",
    "price": 800,
    "availability": 0,
    "highlight": false
  },
  {
    "id": "tube-of-lip-balm",
    "title": "Lip balm",
    "description": "When you want to kiss your partner, but your lips are dry, use this lip balm.",
    "category": COSMETICS,
    "image": "tube-of-lip-balm.jpg",
    "price": 70,
    "availability": 0,
    "highlight": false
  },
  {
    "id": "black-sneakers-with-white-sole",
    "title": "Black sneakers with white sole",
    "description": "Sneakers for any occation. They are very comfortable.",
    "category": SHOES,
    "image": "black-sneakers-with-white-sole.jpg",
    "price": 800,
    "availability": 50,
    "highlight": false
  },
  {
    "id": "t-shirt",
    "title": "Simple t-shirt",
    "description": "Just a blank t-shirt. Various colours available.",
    "category": CLOTHING,
    "image": "blue-t-shirt.jpg",
    "price": 300,
    "availability": 500,
    "highlight": true
  }
]

module.exports = {
  categories,
  products
}
