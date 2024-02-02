import { useEffect, useState } from "react"
import api from "../../services/api.jsx"
import Navbar from "../../components/navbar/navbar.jsx"
import "./Historic.css"

function Historic() {
  const [orders, setOrders] = useState([])

   

  useEffect(() => {
    api
      .get("/orders")
      .then((res) => {
        setOrders(res.data)
      })
      .catch((error) => {
        alert(`Erro ao carregar pedidos - ${error}`)
      })

     
  })

  return (
    <>
      <Navbar showMenu={true} />

      <div className="container">
        <div className="text-center">
          <h1 className="title">Hitórico de Pedidos</h1>
        </div>

        <div className="orderBox">
          <table className="table">
            <thead>
              <tr>
                <th>Pedidos</th>
                <th>Data</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                let data = new Date(order.dtOrder)
                return (
                  <tr key={order.id_order}>
                    <td>
                      <strong>{order.id_order}</strong>
                    </td>
                    <td className="text-ligkt">
                      {data.toLocaleDateString("pt-BR", {
                        timeZone: "UTC",
                      })}
                    </td>
                    <td className="text-red">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(order.total)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Historic
