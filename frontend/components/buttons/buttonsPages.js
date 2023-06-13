import styles from "@FMaidana07/styles/Buttons.module.css"

const ButtonsPages = ({ dataProducts, page, setPage }) => {
    const handleNext = e => {
        e.preventDefault()
        setPage(page + 1)
        window.scrollTo(0, 0)

    }
    const handlePrev = e => {
        e.preventDefault()
        setPage(page - 1)
        window.scrollTo(0, 0)

    }

    if (dataProducts) {
        return (
            <div className={styles.btnPages_container}>
                {dataProducts.hasPrevPage ?
                    <button className={styles.btnPages_prev} onClick={handlePrev}>Anterior</button>
                    : <span></span>
                }
                <span style={{ color: '#eb85ab' }}>
                    {dataProducts.page} / {dataProducts.totalPages}
                </span>
                {dataProducts.hasNextPage ?
                    <button className={styles.btnPages_next} onClick={handleNext}> Siguiente</button>
                    : <span></span>}
            </div>
        )
    }
}

export default ButtonsPages