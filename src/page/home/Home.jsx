import { useEffect, useState } from "react"
import api from "../../services/api.jsx"
import Navbar from "../../components/navbar/navbar.jsx"
import ProductShowcase from "../../components/productShowcase/productShowcase.jsx"
import "./Home.css"

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data)
      })
      .catch((error) => {
        alert(`Erro ao carregar produtos - ${error}`)
      })
  }, [])

  return (
    <>
      <Navbar showMenu={true} />
      <div className="container">
        <div className="text-center">
          <h1 className="title">Nosso Cardápio</h1>
          <p className="subtitle">
            Clique em adicionar para colocar os produtos na sacola de compras.
            Se preferir, você pode pedir pelo whatsApp: (11) 90000-0000
          </p>
        </div>
      </div>

      <div className="text-center">
        {products.map((product) => {
          return (
            <ProductShowcase
              key={product.id_product}
              id={product.id_product}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          )
        })}
      </div>
    </>
  )
}

export default Home
