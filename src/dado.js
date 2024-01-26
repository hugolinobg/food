const orders = [
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
    image: "https://jornadajs-food.s3.amazaonws.com/super.png",
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
    nome: "Penne",
    descricao:
      "Penne ao molho especial de tomates rústicos, ervas aromáticas e cebola",
    preco: 27.0,
    foto: "https://jornadajs-food.s3.amazonaws.com/penne.png",
  },
  {
    id: 6,
    nome: "Fritas",
    descricao: "Batata frita crocante com molho especial de maionese da casa",
    preco: 14.9,
    foto: "https://jornadajs-food.s3.amazonaws.com/fritas.png",
  },
  {
    id: 7,
    nome: "Coca-Cola Lata",
    descricao: "Coca-cola em lata de 300ml, trincando de gelada para você",
    preco: 9.9,
    foto: "https://jornadajs-food.s3.amazonaws.com/coca.png",
  },
]

const requests = [
  { id_pedido: 541560, dt: "14/01/2024", total: 150.3 },
  { id_pedido: 841562, dt: "15/01/2024", total: 99 },
  { id_pedido: 887453, dt: "18/01/2024", total: 119.9 },
  { id_pedido: 985417, dt: "19/01/2024", total: 37.2 },
  { id_pedido: 995411, dt: "19/01/2024", total: 49.9 },
  { id_pedido: 985852, dt: "19/01/2024", total: 78.8 },
  { id_pedido: 998524, dt: "19/01/2024", total: 50.0 },
]

const cart = [
  {
    id: 1,
    nome: "X-Tudo",
    preco: 20.0,
    foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png",
    qtd: 2,
  },
  {
    id: 2,
    nome: "Sanduba",
    preco: 15.0,
    foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png",
    qtd: 1,
  },
]

export { orders, requests, cart }
