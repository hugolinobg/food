import "./Historic.css"
import Navbar from "../../components/navbar/navbar.jsx"
import { orders } from "../../dado.js"

function Historic() {
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
                return (
                  <tr key={order.id_order}>
                    <td>
                      <strong>{order.id_order}</strong>
                    </td>
                    <td className="text-ligkt">{order.dt}</td>
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
