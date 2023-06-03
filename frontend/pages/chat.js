import Auth from "@FMaidana07/components/auth"
import Head from "next/head"
import ChatContain from "@FMaidana07/components/chat/chatContain"
import styles from '@FMaidana07/styles/Chat.module.css'
import { useContext } from "react"
import { LogContext } from "@FMaidana07/components/context"

const chat = () => {
  const { account } = useContext(LogContext)

  return (
    // <Auth>
    <>
      <Head>
        <title>Chat - [Maidana-Project]</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ChatContain
        styles={styles}
        account={account}
      />
    </>
    // </Auth>
  )
}

export default chat