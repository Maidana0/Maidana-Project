import { LogContext } from "@FMaidana07/components/context"
import { useState, useEffect, useContext } from 'react'
import { Loading, Error } from "@FMaidana07/components/utils"
import Ticket from "./ticket"
import Empty from "./empty"
import ThisCart from "./thisCart"



const Cart = () => {
  const { account } = useContext(LogContext)
  const [isLoading, setLoading] = useState(false)
  const [cartData, setCart] = useState(true)
  const [ticket, setTicket] = useState(false)
  const [change, setChange] = useState(false)
  const changes = () => setChange(!change)

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
  }, [account, change])

  if (isLoading) return <Loading />
  if (!cartData) return <Error />
  if (ticket) return <Ticket ticket={ticket} />

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
                cartData.products.length < 1 ?
                  <Empty /> :
                  <ThisCart
                    cartData={cartData}
                    email={account.email}
                    setTicket={setTicket}
                    changes={changes}
                  />
              }

            </> : 'No encontramos tu carrito'
        }

      </div>
    </>
  )
}

export default Cart
