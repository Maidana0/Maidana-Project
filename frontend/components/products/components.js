import Link from "next/link"
import AddToCart from "@FMaidana07/components/buttons/addToCart";


export const FormFilter = ({ setLimit, setSort, setQuery, limit }) => {


  const handleSubmit = (e) => {
    e.preventDefault()
    e.target[0].value >= 1 ? setLimit(e.target[0].value) : setLimit(false)
    e.target[1].value != 0 ? setSort(e.target[1].value) : setSort(false)
    e.target[2].value != 3 ? setQuery(e.target[2].value) : setQuery(false)
  }

  return <form onSubmit={handleSubmit}>
    <input type="number" min={1} name="limit" placeholder={`Ver de a ${limit ? limit : 10} Productos`} />
    <label>Ordenar:</label>
    <select name="sort">
      <option value={0}>por Nombre</option>
      <option value={1}>de Menor a Mayor</option>
      <option value={-1}>de Mayor a Menor</option>
    </select>
    <label>Categoria:</label>
    <select name="query">
      <option value={3}>Todas</option>
      <option value={0}>Zoro</option>
      <option value={1}>Sanji</option>
      <option value={2}>Usopp</option>
    </select>
    <input type="submit" value="OK" />
  </form>
}

export const ListProducts = ({ dataProducts, cartId }) =>
  dataProducts.payload.map((product) => (
    <div key={product.id}>
      <h4>{product.title}</h4>
      <p>Categoria: {product.category}</p>
      <hr />
      <p>Precio: {product.price}</p>
      <p>Stock: {product.stock}</p>

      <div>
        <Link href={`/producto/${product.id}`}>
          Mostrar Detalles
        </Link>

        <AddToCart
          pid={product.id}
          cid={cartId}
        />
      </div>
      <br />
    </div>

  ))



