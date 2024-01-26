import "./Historic.css"
import Navbar from "../../components/navbar/navbar.jsx"
import { requests } from "../../dado.js"

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
            {requests.map((request) => {
              return (
                <tr>
                  <td>
                    <strong>{request.id_pedido}</strong>
                  </td>
                  <td className="text-ligkt">{request.dt}</td>
                  <td className="text-red">{request.total}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </>
  )
}

export default Historic
