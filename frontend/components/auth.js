import { useContext } from 'react'
import { LogContext } from '@FMaidana07/components/context'

const Auth = ({ children }) => {
    const { account } = useContext(LogContext)

    return (

        account.logged ? children : <div>Debe Iniciar Sesion</div>

    )
}

export default Auth