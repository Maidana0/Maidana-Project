import Auth from "@FMaidana07/components/auth"
import { LogContext } from "@FMaidana07/components/context"
import { useState, useEffect, useContext } from 'react'
import { Loading, Error } from "@FMaidana07/components/utils"
import PurchaseCart from "@FMaidana07/components/purchaseCart"

const ars = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 0
});
//


const cart = () => {
  const { account } = useContext(LogContext)
  const [isLoading, setLoading] = useState(false)
  const [cartData, setCart] = useState(true)

  const [ticket, setTicket] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8080/api/carts/${account.cart}`)
      .then(res => res.json())
      .then(data => {
        setCart(data.cart)
        setLoading(false)
      })
      .catch(e => {
        console.log(e)
        setLoading(false)
        setCart(false)
      })
  }, [account])

  if (isLoading) return <Loading />
  if (!cartData) return <Error />

  if (ticket) return (
    <>
      <h2>Usuario: {ticket.purchaser}</h2>
      <h3>Precio Total: {ars.format(ticket.amount)}</h3>
      <h4>Codigo de Orden: {ticket.code}</h4>
      <p>{ticket.purchase_datetime}</p>
      <br />
      <h3>Lista de Productos</h3>
      {
        ticket.products.map(({ product, quantity }) => (
          <div key={product._id}>
            <h1>Nombre: {product.title}</h1>
            <h2>Categoria: {product.category}</h2>
            <p>Precio Unitario: {product.price}</p>
          </div>
        ))
      }
    </>
  )

  return (
    <>
      <h1>Carrito</h1>
      <div>
        {
          cartData._id ?
            <>
              <h2> {cartData._id} </h2>
              PRODUCTOS
              <hr />
              {
                cartData.products.map(product => (
                  <div key={product._id}>
                    <p>id: {product._id}</p>
                    <p>Cantidad: {product.quantity}</p>

                    {product.product && <>
                      <p>Nombre: {product.product.title}</p>
                      <p>Categoria: {product.product.category}</p>
                      <p>Precio: {product.product.price}</p>
                    </>
                    }
                    <br />
                  </div>
                ))
              }
              <PurchaseCart
                cid={cartData._id}
                email={account.email}
                setTicket={setTicket}
              />
            </> : ''
        }

      </div>
    </>
  )
}

export default cart
