import Messages from './messages.js'
import SendMessage from './sendMessage.js'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { Error, Loading } from '../utils.js'

const socket = io('http://localhost:8080')
const ChatContain = ({ styles, account }) => {
  const [chat, setChat] = useState(false)

  socket.on('server:chat', obj => setChat(obj))
  useEffect(() => {
    socket.emit('client:connection')
  }, [])
  return (<>
    <h1>Chat</h1>
    <div className={styles.chat_container}>


      <div className={styles.messages_container}>
        {
          chat ?
            chat.length >= 1 ? chat.map(obj => {
              return <Messages
                key={obj._id}
                styles={styles}
                obj={obj}
                account={account}
              />
            })
              : 'vacio'
            : <Loading />
        }
      </div>
      <SendMessage
        styles={styles}
        account={account}
        socket={socket}
      />
    </div>
  </>
  )
}

export default ChatContain