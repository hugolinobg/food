import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext.jsx"
import Navbar from "../../components/navbar/navbar.jsx"
import apiCep from "../../services/apiCep.jsx"
import api from "../../services/api.jsx"
import "./Checkout.css"

function Checkout() {
  const { cartTotal, setCartTotal, cartItems, setCartItems } =
    useContext(CartContext)

  const navigate = useNavigate()

  const [getData, setData] = useState([])

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")
  const [fone, setFone] = useState("")

  const [cep, setCep] = useState("")
  const [address, setAddress] = useState("")
  const [number, setNumber] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [complement, setComplement] = useState("")
  const [city, setCity] = useState("")
  const [uf, setUf] = useState("")

  function handleSearch(e) {
    e.preventDefault()
    if (cep === "") {
      alert("Informe o CEP!")
      return
    }

    apiCep
      .get(`/${cep}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => {
        alert(`Erro ao carregar CEP - ${error}`)
      })

    setAddress(getData.street)
    setNeighborhood(getData.neighborhood)
    setCity(getData.city)
    setUf(getData.state)
  }

  function finalizeOrder(e) {
    e.preventDefault()
    let products = []

    for (let product of cartItems) {
      products.push({
        id_product: product.id,
        qtd: product.qtd,
        valueUnitary: product.price,
        valueTotal: product.price * product.qtd,
      })
    }

    const params = {
      id_user: 2,
      name,
      email,
      fone,
      cep,
      address,
      number,
      neighborhood,
      complement,
      city,
      uf,
      dtOrder: Date.now(),
      total: cartTotal,
      items: products,
    }

    // api
    //   .post("/cart", params.items)
    //   .then(() => {})
    //   .catch((error) => {
    //     alert(`Erro ao enviar items - ${error}`)
    //   })

    api
      .post("/orders", params && "/cart", params.items)
      .then(() => {
        setCartItems([])
        setCartTotal(0)
        navigate("/historic")
      })
      .catch((error) => {
        alert(`Erro ao enviar pedido - ${error}`)
      })
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-center">
          <h1 className="title">Finalizar Pedido</h1>
        </div>

        <div className="col-3">
          <div className="checkoutBox">
            <h3>Dados Pessoais</h3>

            <div className="inputGurp">
              <label htmlFor="name">Nome completo:</label>
              <input
                type="text"
                id="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="inputGurp">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputGurp">
              <label htmlFor="fone">Telefone contato:</label>
              <input
                type="text"
                id="fone"
                value={fone}
                required
                onChange={(e) => setFone(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="checkoutBox">
            <h3>Endereço de Entrega</h3>

            <div className="inputGurp">
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                required
                value={cep}
                onBlur={handleSearch}
                onChange={(e) => setCep(e.target.value)}
                placeholder="16306506"
              />
            </div>

            <div className="inputGurp">
              <label htmlFor="endereco">Endereço:</label>
              <input
                type="text"
                id="endereco"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="inputGurp">
              <label htmlFor="numero">Número:</label>
              <input
                type="text"
                id="numero"
                value={number}
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div className="inputGurp">
              <label htmlFor="bairro">Bairro:</label>
              <input
                type="text"
                id="bairro"
                required
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
              />
            </div>

            <div className="inputGurp">
              <label htmlFor="complemento">Complemento:</label>
              <input
                type="text"
                id="complemento"
                onChange={(e) => setComplement(e.target.value)}
              />
            </div>

            <div className="inputGurp">
              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="inputGurp">
              <label htmlFor="uf">Estado:</label>
              <input
                type="text"
                id="uf"
                value={uf}
                placeholder="SP"
                required
                onChange={(e) => setUf(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="checkoutBox">
            <h3>Valores</h3>

            <div className="checkoutValue">
              <span>Total:</span>
              <span>
                <strong>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(cartTotal)}
                </strong>
              </span>
            </div>

            <div className="checkoutBtn">
              <button onClick={finalizeOrder} className="btn btn-checkout">
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
