import { useState, useEffect, useContext } from "react"
import { LogContext } from "@FMaidana07/components/context"
import { Loading, Error } from "@FMaidana07/components/utils"

import Register from "@FMaidana07/components/log/register"
import Login from "@FMaidana07/components/log/login"

const session = () => {
    const { router } = useContext(LogContext)

    const { state } = router.query

  
    if(state == "registro") return <Register />
    if(state == "ingresar") return <Login />
}

export default session