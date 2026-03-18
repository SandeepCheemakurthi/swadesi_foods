export const products = [

  {
    id: 1,
    name: "Bellam Sunundalu",
    price: 720,
    image: `${process.env.PUBLIC_URL || ""}/images/bellam-sunndalu.jpeg`,
    category: "Sweets",
    description: "Healthy Andhra Sweet"
  },

  {
    id: 2,
    name: "Bellam Gavalu",
    price: 280,
    image: `${process.env.PUBLIC_URL || ""}/images/gavvalu_sweet_900x.webp`,
    category: "Sweets",
    description: "Best Jaggery Sweet"
  },

  {
    id: 3,
    name: "Hot Cashew",
    price: 1000,
    image: `${process.env.PUBLIC_URL || ""}/images/hot-cashew.jpeg`,
    category: "Dry Fruits",
    description: "Crispy and healthy dry fruit snack."
  },

  {
    id: 4,
    name: "Karam Boondi",
    price: 350,
    image: `${process.env.PUBLIC_URL || ""}/images/karaboondi.webp`,
    category: "Snacks",
    description: "Crispy Andhra Snack"
  },

  {
    id: 5,
    name: "Avakaya",
    price: 600,
    image: `${process.env.PUBLIC_URL || ""}/images/Avakai_Avakaya.jpg`,
    category: "Pickles",
    description: "Spicy Andhra Special"
  },

  {
    id: 6,
    name: "Bellam Avakaya",
    price: 200,
    image: `${process.env.PUBLIC_URL || ""}/images/bellam-avakaya.webp`,
    category: "Pickles",
    description: "Sweet taste with a hint of spice"
  },

  {
    id: 7,
    name: "Magai",
    price: 350,
    image: `${process.env.PUBLIC_URL || ""}/images/Magaya.jpg`,
    category: "Pickles",
    description: "Tasty Cut Mango Pickle"
  },

  {
    id: 8,
    name: "Lemon Pickle",
    price: 450,
    image: `${process.env.PUBLIC_URL || ""}/images/Lemon.jpg`,
    category: "Pickles",
    description: "Sour and Tangy Lemon Pickle"
  },

  {
    id: 9,
    name: "Kandi Podi",
    price: 200,
    image: `${process.env.PUBLIC_URL || ""}/images/Kandi-Podi.jpg`,
    category: "Powders",
    description: "Andhra Special Powder"
  }

];

export const categories = ["All", "Sweets", "Snacks", "Dry Fruits", "Pickles", "Powders"];