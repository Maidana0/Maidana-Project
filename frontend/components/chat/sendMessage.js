import { useState } from "react";
import { IoSend } from "react-icons/io5";


const SendMessage = ({ styles, account, socket }) => {
    const [message, setMessage] = useState('')
    const changeMessage = async (e) => setMessage(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const objMessage = {
            user: account.name,
            email: account.email,
            message: message
        }
        socket.emit('client:newMessage', objMessage)

        setMessage('')

    }

    return (
        <>
            {
                account.logged ?
                    <form className={styles.submit_container} onSubmit={handleSubmit}>
                        <input className={styles.submit_text} type="text" value={message}
                            placeholder="Ingrese su mensaje..." onChange={changeMessage}
                            minLength={1} required />
                        <button className={styles.submit_button} type="submit">
                            <IoSend title='Enviar'
                                alt={'ButtonSend'}
                                size={'1rem'}
                                color="#eb85ab" />
                        </button>
                    </form>
                    : <div style={{fontSize:'1.1rem', fontWeight:600, backgroundColor:"black"}} className={styles.submit_container}> Debes iniciar sesion!</div>
            }
        </>
    )
}

export default SendMessage