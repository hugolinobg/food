import { useState } from "react"
import Navbar from "../../components/navbar/navbar.jsx"
import "./Checkout.css"

function Checkout() {
  const inputCep = document.getElementById("cep")
  const cidade = document.getElementById("cidade")
  const endereco = document.getElementById("endereco")
  const bairro = document.getElementById("bairro")
  const complemento = document.getElementById("complemento")
  const uf = document.getElementById("uf")
  const [input, setInput] = useState("")
  const [cep, setCep] = useState("")
  const urlCep = "https://viacep.com.br/ws"

  async function handleSearch() {
    if (inputCep === "") {
      alert("Informe o CEP!")
      return
    }

    try {
      const response = await fetch(`${urlCep}/${input}/json`)

      if (!response.ok) {
        throw Error("Não foi possível obter as informações!")
      }

      const cepApiResults = await response.json()
      setCep(cepApiResults)

      cidade.value = cep.localidade
      endereco.value = cep.logradouro
      bairro.value = cep.bairro
      complemento.value = cep.complemento
      uf.value = cep.uf
    } catch (error) {
      console.log("Algo de erado: ", error)
    }
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
              <input type="text" id="name" />
            </div>

            <div className="inputGurp">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" />
            </div>

            <div className="inputGurp">
              <label htmlFor="fone">Telefone contato:</label>
              <input type="text" id="fone" />
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
                value={input}
                onBlur={handleSearch}
                onChange={(e) => setInput(e.target.value)}
                placeholder="16306506"
              />
            </div>

            <div className="inputGurp">
              <label htmlFor="cidade">Cidade:</label>
              <input type="text" id="cidade" />
            </div>

            <div className="inputGurp">
              <label htmlFor="endereco">Endereço:</label>
              <input type="text" id="endereco" />
            </div>

            <div className="inputGurp">
              <label htmlFor="numero">Número:</label>
              <input type="text" id="numero" />
            </div>

            <div className="inputGurp">
              <label htmlFor="bairro">Bairro:</label>
              <input type="text" id="bairro" />
            </div>

            <div className="inputGurp">
              <label htmlFor="complemento">Complemento:</label>
              <input type="text" id="complemento" />
            </div>

            <div className="inputGurp">
              <label htmlFor="uf">Estado:</label>
              <input type="text" id="uf" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
