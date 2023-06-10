import Head from "next/head";
import Image from "next/image";
import styles from "@FMaidana07/styles/Components.module.css"

export const Loading = () => (
  <div className={styles.loading_container}>
    <Image
    src={`/images/loading.gif`}
    width={305}
    height={305}
    alt="Loading"
    priority
    style={{objectFit:'cover',borderRadius:'100%'}}
    />
  </div>
)

export const Error = ({ message, error }) => (
  <>
    <Head>
      <title>Error - [Maidana-Project]</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className={styles.error_container}>
      <h2>Error!</h2>
      {
        error && <>
          <p>Error: {error}</p>
        </>
      }
      <Image
        src={'/images/warning.png'}
        width={300}
        height={300}
        alt="Error"
        priority
      />
      <h3>No se pudo encontrar la informacion solicitada</h3>

      {
        message && <>
          <p> {message} </p>
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

