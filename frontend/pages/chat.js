import Auth from "@FMaidana07/components/auth"
import Head from "next/head"

const chat = () => {
  return (
    <Auth>
      <Head>
        <title>Chat - [Maidana-Project]</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>chat</div>
    </Auth>
  )
}

export default chat