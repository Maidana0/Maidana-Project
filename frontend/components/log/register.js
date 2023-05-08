import { useState } from "react"
import Head from 'next/head'

const Register = () => {
  const [state, setState] = useState(false)
  const [typePass, setTypePass] = useState(false)
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    tel: '',
    email: '',
    password: ''
  })

  const onChange = (e) => {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/account/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => setState(data.state))
      .catch(e => console.log(e))
  }

  if (state == 'sucess') return (<h1>Registrado con Exito</h1>)
  if (state == 'error') return (<h1>Ocurrio un Error</h1>)
  return (
    <>
      <Head>
        <title>Registrarse [Maidana-Project]</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {
        state == 'sucess' ? <h1>Registrado con Exito</h1> :
          state == 'error' ? <h1>Ocurrio un Error</h1> :
            <>
              <h1>Registrate</h1>
              <form onSubmit={handleSubmit}>
                <h3>Datos Personales</h3>
                <input type="text" value={user.name} onChange={onChange} name="name" autoComplete="off" placeholder="Ingrese su nombre..." required />
                <input type="text" value={user.lastName} onChange={onChange} name="lastName" autoComplete="off" placeholder="Ingrese su apellido..." required />
                <input type="number" value={user.tel} onChange={onChange} name="tel" autoComplete="off" placeholder="Ingrese su numero de celular" />
                <hr />
                <h3>Datos de Ingreso</h3>
                <input type="email" value={user.email} onChange={onChange} name="email" autoComplete="off" placeholder="Ingrese su correo electronico" required />
                <input onChange={onChange} value={user.password} type={typePass ? "string" : "password"} name="password" autoComplete="off" placeholder="Contraseña" required />

                <button onClick={e => {
                  e.preventDefault()
                  setTypePass(!typePass)
                }}>{typePass ? "Ocultar" : "Mostrar"} Contraseña</button>

                <input type="submit" value="Registrarme" />
              </form>
            </>
      }

    </>
  )
}

export default Register
