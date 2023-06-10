import { Toastify } from "../toast.js"
import styles from "@FMaidana07/styles/Buttons.module.css"
import { LogContext } from "../context.js"
import { useContext } from "react"

const AddToCart = ({ cid, pid, ShowDetails, stock }) => {
  const { router } = useContext(LogContext)
  const addProduct = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8080/api/carts/${cid}/product/${pid}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        Toastify(data.message)
      })
      .catch(e => console.log(e))
  }

  return (
    <div className={styles.btnProducts_container}>
      {ShowDetails ?
        <button className={styles.btn_details} onClick={(e) => {
          e.preventDefault()
          router.replace(`/producto/${pid}`)
        }}>
          Mostrar Detalles
        </button>
        : <button className={styles.btn_details} onClick={(e) => {
          e.preventDefault()
          router.replace('/productos')
        }}>
          Volver
        </button>}

      {
        stock >= 1 ?
          <button className={styles.btn_addProduct} onClick={addProduct}>
            Agregar al Carrito
          </button>
          :
          <h3>Sin Stock</h3>
      }
    </div>
  )
}

export default AddToCart