import { Sling as Hamburger } from 'hamburger-react'
import styles from '@FMaidana07/styles/Layout.module.css'
import Link from 'next/link'


const userPaths = [
    '/productos', '/chat', '/carrito', '/contacto'
]
const adminPaths = [
    { path: '/admin/admin', name: 'configuraciones' },
    { path: '/chat', name: 'visitar chat' }
]

const Navbar = ({ router, logged, admin }) => {


    return (
        <header className={`fc ${styles.header}`}>
            <nav id="nav" className={`fc ${styles.nav}`}>
                <div className={styles.nav_head}>
                    <h2>
                        <Link href={'/'}
                            className={router.pathname == '/' ? styles.focus : ''}                                                                >
                            Maidana Project
                        </Link>
                    </h2>
                </div>
                <ul className={styles.nav_items}>
                    {logged &&
                        <>{
                            admin ?
                                adminPaths.map(path => (
                                    <li key={path.name} className={styles.items_links}>
                                        <Link
                                            className={router.pathname == path.path ? styles.focus : ''}
                                            href={path.path}>
                                            {path.name}
                                        </Link>
                                    </li>
                                ))
                                :
                                userPaths.map(path => (
                                    <li key={path} className={styles.items_links}>
                                        <Link
                                            className={router.pathname == path ? styles.focus : ''}
                                            href={path}>
                                            {path.slice(1)}
                                        </Link>
                                    </li>
                                ))
                        }</>
                    }
                    <li className={styles.items_links}>
                        <Link
                            className={router.pathname == '/login' ? styles.focus : ''}
                            href={logged ? 'http://localhost:8080/account/logout' : '/login'}>
                            {logged ? 'Cerrar Sesion' : 'Iniciar Sesion'}
                        </Link>
                    </li>


                </ul>

                <div className={styles.btn_burger}>
                    <Hamburger
                        color='#e878a2'
                        onToggle={toggled => {
                            console.log('en proceso xd')
                            // const nav = document.getElementById('nav')
                            // toggled ? nav.classList.add(styles.nav_active) : nav.classList.remove(styles.nav_active)
                        }} />
                </div>
            </nav>
        </header >
    )
}

export default Navbar