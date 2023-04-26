import Head from "next/head"
import Auth from "@FMaidana07/components/auth"
import Cart from "@FMaidana07/components/cart/cart"
const carrito = () => {
    return (
        <><Head>
            <title>Carrito - [Maidana-Project]</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
            <Auth>
                <Cart />
            </Auth>
        </>
    )
}

export default carrito