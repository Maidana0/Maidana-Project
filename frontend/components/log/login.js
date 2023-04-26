import { useState, useContext } from "react"
import { LogContext } from "@FMaidana07/components/context"
import Link from "next/link"
import { Loading } from "@FMaidana07/components/utils"

const Login = () => {
    const { account, login } = useContext(LogContext)
    const [isLoading, setLoading] = useState(false)
    const [dataError, setDataError] = useState(false)
    const [errorAuth, setErrorAuth] = useState(false)
    const [user, setUser] = useState({ email: '', password: '' })
    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }


    const formSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        fetch('http://localhost:8080/account/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:8080/account/login/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + data.token
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        login(data)
                        setLoading(false)
                    })
                    .catch(e => {
                        setLoading(false)
                        setErrorAuth(data.message)

                        console.log(e)
                    })
            })
            .catch((e) => {
                setLoading(false)
                setErrorAuth(true)
                console.log(e)
            })
    }

    if (isLoading) return <Loading />
    if (dataError) return <Error />
    return (
        <div>
            {account.logged ?
                <>
                    <h1>Ha iniciado sesion con exito!</h1>
                    <h3>Bienvenido {account.name}</h3>
                </>
                :
                <>
                    <h3>Iniciar Session</h3>
                    <form onSubmit={formSubmit}>
                        <input value={user.email} onChange={handleInputChange}
                            type="text" name="email" id="email" />

                        <input value={user.password} onChange={handleInputChange}
                            type="password" name="password" id="password" />
                        <input type="submit" value="Ingresar" />
                    </form>
                    <br />
                    {errorAuth ? <span>{errorAuth}</span> : ''}
                    <hr />
                    {/* ME RENDI CON ESTO D:
                    NOSE QUE HACER CON ESTE LINK
                    PARA HACER UN LOGIN
                    Y TAMPOCO SE COMO MANTENER LA SESSION DEL USUARIO */}
                    <Link href={'http://localhost:8080/account/login/google'}>
                        Iniciar sesion con Google
                    </Link>
                    <br />
                    <Link href={'http://localhost:8080/account/login/github'}>
                        Iniciar sesion con Github
                    </Link>
                    <br />
                    <Link href={'/session/registro'}>
                        Registrarme
                    </Link>
                </>

            }

        </div>
    )
}

export default Login