import AddToCart from "@FMaidana07/components/buttons/addToCart";
import Image from "next/image";

export const FormFilter = ({ styles, setPage, setLimit, setSort, setQuery, limit }) => {


  const handleSubmit = (e) => {
    e.preventDefault()
    const value = (i) => e.target[i].value
    setPage(1)
    value(0) != 0 ? setSort(value(0)) : setSort(false)
    value(1) != 3 ? setQuery(value(1)) : setQuery(false)
    value(2) != 0 ? setLimit(value(2)) : setLimit(false)
  }

  return <form className={styles.products_filter} onSubmit={handleSubmit}>

    <div className={styles.div_container}>

      <div className={styles.select_container}>
        <label>Ordenar por Precio: </label>
        <select name="sort">
          <option value={0}></option>
          <option value={1} >de Menor a Mayor</option>
          <option value={-1}>de Mayor a Menor</option>
        </select>
      </div>

      <div className={styles.select_container}>
        <label>Categoria: </label>
        <select name="query">
          <option value={3}>Todas</option>
          <option value={0}>Zoro</option>
          <option value={1}>Sanji</option>
          <option value={2}>Usopp</option>
        </select>
      </div>

    </div>

    <div className={styles.input_container}>
      <input type="number" min={1} name="limit" placeholder={`Ver de a ${limit ? limit : 10} productos`} />
      <input type="submit" value="OK" />
    </div>
  </form>
}

export const ListProducts = ({ styles, dataProducts, cartId }) => dataProducts.payload.map((product) => (
  <div className={styles.product_container} key={product.id}>
    <div className={styles.product_title}>
      <h4>{product.title}</h4>
      <h4>{product.category}</h4>
    </div>
    <Image
      title={product.thumbnails[0].front_default.slice(13, -4)}
      width={298}
      height={250}
      alt={product.title}
      src={product.thumbnails[0].front_default.slice(5)}
      style={{
        objectFit: 'contain', backgroundColor: '#e878a157'
      }}
      priority
    />
    <div className={styles.product_info}>
      <p>Precio: {product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>

    <AddToCart
      ShowDetails={true}
      pid={product.id}
      cid={cartId}
      stock={product.stock}
    />

    <br />
  </div>

))

