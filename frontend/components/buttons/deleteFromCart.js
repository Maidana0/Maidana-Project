import { Toastify } from "../toast.js"

const DeleteFromCart = ({ cid, pid, changes }) => {
    const handleClick = async () => {
        fetch(`http://localhost:8080/api/carts/${cid}/product/${pid}`, {
            method: "DELETE"
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                changes()
                Toastify(data.message)
            })
            .catch(r => console.log(r))
    }
    return (
        <button onClick={handleClick}>
            Quitar producto
        </button>
    )
}

export default DeleteFromCart