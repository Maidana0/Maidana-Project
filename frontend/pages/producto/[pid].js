import { useState, useEffect, useContext } from "react"
import { LogContext } from "@FMaidana07/components/context"
import AddToCart from "@FMaidana07/components/buttons/addToCart"
import { Loading, Error } from "@FMaidana07/components/utils"
import Head from "next/head"
const category = () => {
  const { router, account } = useContext(LogContext)
  const { pid } = router.query

  const [isLoading, setLoading] = useState(false)
  const [product, setProduct] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (pid) {
      fetch(`http://localhost:8080/api/products/${pid}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setProduct(data)
        })
        .catch(e => {
          setLoading(false)
          setProduct({ error: true })
        })
    }
  }, [pid])

  // if (isLoading) return <Loading />
  if (product.error) {
    return <Error
      message={`El producto con el id: ${pid}, no existe en nuestra base de datos.`}
      error={product.error ? product.error.name : false}
    />
  }

  return (<>
    <Head>
      <title> Detalles - [Maidana-Project]</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {
      (!product || isLoading) ? <Loading /> :
        <div>
          {
            <div>
              <h3>{product[0].title}</h3>
              <h4>Categoria: {product[0].category}</h4>
              <p>Descripcion: {product[0].description}</p>
              <p>Precio: {product[0].price}</p>
              <p>Stock: {product[0].stock}</p>
              <AddToCart
                cid={account.cart}
                pid={pid}
              />
            </div>
          }
        </div>
    }

  </>)
}

export default category
