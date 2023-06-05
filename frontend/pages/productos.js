import { useState, useEffect } from "react";
import Head from "next/head";
import { Loading, Error } from "@FMaidana07/components/utils";
import ButtonsPages from "@FMaidana07/components/buttons/buttonsPages";
import Products from "@FMaidana07/components/products/products";


const category = ["zoro", "sanji", "usopp"]
const options = {
  page: (p) => (`page=${p}`),
  category: (op) => (`&query=${category[op]}`),
  limit: (l) => (`&limit=${l}`),
  sort: (s) => (`&sort=${s}`)
}

const products = () => {
  const [dataProducts, setProducts] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [query, setQuery] = useState(false)
  const [limit, setLimit] = useState(false)
  const [sort, setSort] = useState(false)
  let fetchOptions = `${options.page(page)}${query ? options.category(query) : ''}${limit ? options.limit(limit) : ''}${sort ? options.sort(sort) : ''}`

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8080/api/products?${fetchOptions}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setProducts(data)
      })
      .catch(e => {
        console.log(e)
        setLoading(false)
        setProducts({ error: true })
      })
  }, [fetchOptions])


  if (dataProducts.error) return <Error />

  return (
    <>
      <Head>
        <title>Productos - [Maidana-Project]</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <h1>{dataProducts.message}</h1>
      <>

        {
          (!dataProducts || isLoading) ? <Loading /> : <Products
            dataProducts={dataProducts.products}
            options={{ setLimit, setSort, setQuery, limit: limit }}
          />
        }

        <ButtonsPages
          dataProducts={dataProducts.products}
          page={page}
          setPage={setPage}
        />

      </>
    </>
  )

}

export default products