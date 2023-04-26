
import DeleteFromCart from "../buttons/deleteFromCart"
import PurchaseCart from "../buttons/purchaseCart"

const ThisCart = ({cartData, email,setTicket,changes}) => {
    return (
        <>
            {
                cartData.products.map(({ product, quantity }) => (
                    <div key={product._id}>
                        <p>id: {product._id}</p>
                        <p>Cantidad: {quantity}</p>
                        {product && <>
                            <p>Nombre: {product.title}</p>
                            <p>Categoria: {product.category}</p>
                            <p>Precio: {product.price}</p>
                        </>
                        }
                        <DeleteFromCart
                            cid={cartData._id}
                            pid={product._id}
                            changes={changes}
                        />
                        <br />
                    </div>
                ))
            }
            <PurchaseCart
                cid={cartData._id}
                email={email}
                setTicket={setTicket}
            />
        </>
    )
}

export default ThisCart