


const PurchaseCart = ({ cid, email, setTicket }) => {

    const handlePurchase = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8080/api/carts/${cid}/purchase`, {
            method: "POST",
            body:  JSON.stringify({email}),
            headers: { "Content-Type": "application/json" }
        })
        .then(res=>res.json())
        .then(data=>{
            setTicket(data)
        })
    }


    return (
        <button onClick={handlePurchase}>
            FINALIZAR COMPRA
        </button>
    )
}

export default PurchaseCart