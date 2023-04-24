import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/router'

export const LogContext = createContext()

const ContextProvider = ({ children }) => {

    const router = useRouter() // Link Active

    const [account, setAccount] = useState(false)
    // const [log, setLog] = useState(false)

    const login = (u) => setAccount(u)
    const logout = () => setAccount(false)

    // useEffect(() => {
    //     localStorage.getItem('user') && setUser(localStorage.getItem('user'))
    // }, [])
    // useEffect(() => setLog(user), [user])


    return (
        <LogContext.Provider
            value={{
                account,
                login,
                logout,

                router
            }}>
            {children}
        </LogContext.Provider>
    )
}
export default ContextProvider