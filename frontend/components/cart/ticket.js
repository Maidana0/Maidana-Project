import { ars } from "@FMaidana07/components/utils"

const Ticket = ({ ticket }) => {
    return (
        <div>
            <h2>Usuario: {ticket.purchaser}</h2>
            <h3>Precio Total: {ars.format(ticket.amount)}</h3>
            <h4>Codigo de Orden: {ticket.code}</h4>
            <p>{ticket.purchase_datetime}</p>
            <br />
            <h3>Lista de Productos</h3>
            {
                ticket.products.map(({ product, quantity }) => (
                    <div key={product._id}>
                        <h1>Nombre: {product.title}</h1>
                        <h2>Categoria: {product.category}</h2>
                        <p>Precio Unitario: {product.price}</p>
                        <p>Cantidad: {quantity}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Ticket