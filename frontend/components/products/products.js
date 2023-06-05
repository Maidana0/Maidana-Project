import { FormFilter, ListProducts } from "./components"
import { useContext } from "react";
import { LogContext } from "@FMaidana07/components/context";




const Products = ({ dataProducts, options }) => {
    const { setLimit, setSort, setQuery, limit } = options
    const { account } = useContext(LogContext)
    return (
        <>
            <FormFilter
                setLimit={setLimit}
                setSort={setSort}
                setQuery={setQuery}
                limit={limit}
            />
            <ListProducts
                dataProducts={dataProducts}
                cartId={account.cart} />
        </>
    )
}

export default Products