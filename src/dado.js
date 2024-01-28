const products = [
  {
    id: 1,
    name: "Spicy Burguer",
    description: "Hamburguer de 250g, queijo, alface, tomate e cebola.",
    price: 24.9,
    image: "https://jornadajs-food.s3.amazonaws.com/spicy.png",
  },
  {
    id: 2,
    name: "Sanduba",
    description: "Sanduiche natural, alface, tomate pão integral e orégano.",
    price: 22.0,
    image: "https://jornadajs-food.s3.amazonaws.com/sanduba.png",
  },
  {
    id: 3,
    name: "Super Burguer",
    description: "Hamburguer de 300g, molho, queijo, alface, tomate e cebola.",
    price: 29.9,
    image: "https://jornadajs-food.s3.amazonaws.com/super.png",
  },
  {
    id: 4,
    name: "Mega",
    description: "Hamburguer de 300g, molho, queijo, alface, tomate e cebola.",
    price: 29.9,
    image: "https://jornadajs-food.s3.amazonaws.com/mega.png",
  },
  {
    id: 5,
    name: "Penne",
    description:
      "Penne ao molho especial de tomates rústicos, ervas aromáticas e cebola",
    price: 27.0,
    image: "https://jornadajs-food.s3.amazonaws.com/penne.png",
  },
  {
    id: 6,
    name: "Fritas",
    description: "Batata frita crocante com molho especial de maionese da casa",
    price: 14.9,
    image: "https://jornadajs-food.s3.amazonaws.com/fritas.png",
  },
  {
    id: 7,
    name: "Coca-Cola Lata",
    description: "Coca-cola em lata de 300ml, trincando de gelada para você",
    price: 9.9,
    image: "https://jornadajs-food.s3.amazonaws.com/coca.png",
  },
]

const orders = [
  { id_order: 541560, dt: "14/01/2024", total: 150.3 },
  { id_order: 841562, dt: "15/01/2024", total: 99 },
  { id_order: 887453, dt: "18/01/2024", total: 119.9 },
  { id_order: 985417, dt: "19/01/2024", total: 1137.2 },
  { id_order: 995411, dt: "19/01/2024", total: 49.9 },
  { id_order: 985852, dt: "19/01/2024", total: 78.8 },
  { id_order: 998524, dt: "19/01/2024", total: 50.0 },
]

const cart = [
  {
    id: 1,
    name: "X-Tudo",
    price: 20.0,
    image: "https://jornadajs-food.s3.amazonaws.com/spicy.png",
    qtd: 2,
  },
  {
    id: 2,
    name: "Sanduba",
    price: 15.0,
    image: "https://jornadajs-food.s3.amazonaws.com/sanduba.png",
    qtd: 1,
  },
]

export { products, orders, cart }
