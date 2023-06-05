
const ButtonsPages = ({ dataProducts, page, setPage }) => {
    const handleNext = e => {
        e.preventDefault()
        setPage(page + 1)
    }
    const handlePrev = e => {
        e.preventDefault()
        setPage(page - 1)
    }

    if (dataProducts) {
        return (
            <div>
                {dataProducts.hasPrevPage ?
                    <button onClick={handlePrev}>Anterior</button> : ''
                }
                {dataProducts.hasNextPage &&
                    <button onClick={handleNext}> Siguiente</button>
                }
            </div>
        )
    }
}

export default ButtonsPages