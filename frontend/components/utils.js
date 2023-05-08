import Head from "next/head";

export const Loading = () => (
  <div>
    Cargando...
  </div>
)

export const Error = ({ message, error }) => (
  <>
    <Head>
      <title>Error - [Maidana-Project]</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
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
  </>
)

export const ars = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 0
});
