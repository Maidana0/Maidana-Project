
export const Loading = () => (
  <div>
    Cargando...
  </div>
)

export const Error = ({ message, error }) => (
  <div>
    <h2>
      Error, no se pudo encontrar la informacion solicitada
    </h2>
    {
      message && <>
        <p> {message} </p>
      </>
    }

    {
      error && <>
        <p>Error: {error}</p>
      </>
    }
  </div>
)
