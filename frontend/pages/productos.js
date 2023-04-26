import { useState, useEffect, useContext } from "react";
import Auth from "@FMaidana07/components/auth";
import Link from "next/link";
import AddToCart from "@FMaidana07/components/buttons/addToCart";
import { Loading, Error } from "@FMaidana07/components/utils";

import { LogContext } from "@FMaidana07/components/context";

const products = () => {

  const { account } = useContext(LogContext)

  const [dataProducts, setProducts] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const [filter, setFilter] = useState({
    category: false,
    page: 1,
    limit: false,
    sort: false
  })

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8080/api/products?page=${filter.page}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setProducts(data)
      })
      .catch(e => {
        console.log(e)
        setLoading(false)
        setProducts(false)
      })
  }, [filter])



  const handleNext = e => {
    e.preventDefault()
    setFilter({ ...filter, page: filter.page + 1 })
  }
  const handlePrev = e => {
    e.preventDefault()
    setFilter({ ...filter, page: filter.page - 1 })
  }

  if (isLoading) return <Loading />
  if (!dataProducts || dataProducts.error) return <Error />

  return (
    <>
      <h1>{dataProducts.message}</h1>

      {
        dataProducts.products.payload.map((product) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <p>Categoria: {product.category}</p>
            <hr />
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock}</p>

            <div>
              <Link
                href={`/producto/${product.id}`}>
                Mostrar Detalles
              </Link>

              <AddToCart
                pid={product.id}
              cid={account.cart}
              />
            </div>
            <br />
          </div>
        ))
      }
      <div>
        {
          dataProducts.products.hasPrevPage &&
          <button onClick={handlePrev}>
            Anterior
          </button>
        }

        {
          dataProducts.products.hasNextPage &&
          <button onClick={handleNext}>
            Siguiente
          </button>
        }
      </div>
    </>
  )

}

export default products

{/* <button onClick={e => {
              e.preventDefault()
              setModal(!modal)
            }}>
              Filtrar</button>
            {
              modal ? <div>
                <form onSubmit={e => {
                  e.preventDefault()
                }}>
                  Ordenar por precio:
                  <select name="sort">
                    <option value={1}>De menor a mayor</option>
                    <option value={-1}>De mayor a menor</option>
                  </select>

                  Categoria:
                  <select name="category">
                    <option value={"zoro"}>Zoro</option>
                    <option value={"sanji"}>Sanji</option>
                    <option value={"usopp"}>Usopp</option>
                  </select>

                  Cantidad de Productos:
                  <input name="limit" type="number" />
                  <input type="submit" value="Filtrar" />
                </form>

              </div> : ''
            } */}