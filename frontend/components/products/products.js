import { FormFilter, ListProducts } from "./components"
import { useContext } from "react";
import { LogContext } from "@FMaidana07/components/context";
import styles from "@FMaidana07/styles/Products.module.css"




const Products = ({ dataProducts, options }) => {
    const { setPage, setLimit, setSort, setQuery, limit } = options
    const { account } = useContext(LogContext)
    return (
        <>
            <FormFilter
                setPage={setPage}
                setLimit={setLimit}
                setSort={setSort}
                setQuery={setQuery}
                limit={limit}
                styles={styles}
            />
            <div className={styles.products_container}>
                <ListProducts
                    dataProducts={dataProducts}
                    cartId={account.cart}
                    styles={styles}
                />
            </div>
        </>
    )
}

export default Products