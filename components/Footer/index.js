import React from "react"

import styles from "./styles.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>

            <div className={styles.container}>
                Projeto desenvolvido por: {' '}
                <a className={styles.links} href="https://danliberato.me">Daniel Liberato</a> | {' '}
                <a className={styles.links} href="https://linkedin.com/in/danliberato/">LinkedIn</a> | {' '}
                <a className={styles.links} href="https://github.com/danliberato">Github</a>

                <div className="mt-2">
                    <img className={styles.images} src="/logo_semana_fsm.png" alt="Semana Fullstack Master"/>
                    <img className={styles.images} src="/logo_devpleno.png" alt="Dev Pleno"/>
                </div>
            </div>
        </div>

    )
}

export default Footer