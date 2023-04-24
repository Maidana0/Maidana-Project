import { Toastify } from "./toast"

const AddToCart = ({ cid, pid }) => {

  const addProduct = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8080/api/carts/${cid}/product/${pid}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        Toastify(data.message)
        // DATA=  {
        //     message: 'Producto agregado!',
        //     cart
        // }
      })
      .catch(e => console.log(e))
  }

  return (
    <button onClick={addProduct}>
      Agregar al Carrito
    </button>
  )
}

export default AddToCart