import Navbar from "./Navbar"
import Footer from "./Footer"

import { useState, useContext, useEffect } from "react"
import { LogContext } from "../context"

const Layout = ({ children }) => {
    const { router, account } = useContext(LogContext)

    return (<>
        <Navbar
            router={router}
            logged={account.logged}
            admin={account.role == "admin" ? true : false}
        />

        <main>
            {children}
        </main>

        <Footer />
    </>
    )
}

export default Layout