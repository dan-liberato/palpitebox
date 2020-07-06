import React from "react"
import Link from "next/link"

import styles from './styles.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header__brand}>
                    <div className="container mx-auto">
                        <Link href="/">
                            <a>
                                <img className={styles.logo} src="/logo_paplpitebox.png" alt="Palpite Box"/>
                            </a>
                        </Link>
                    </div>

                </div>

                <div className={styles.menu}>
                    <Link href="/">
                        <a className={styles.menu__item}>Home</a>
                    </Link>

                    <Link href="/sobre">
                        <a className={styles.menu__item}>Sobre</a>
                    </Link>

                    <Link href="/contato">
                        <a className={styles.menu__item}>Contato</a>
                    </Link>

                    <Link href="/opiniao">
                        <a className={styles.menu__item}>Opinião</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header