import Link from "next/link"
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__social}>
                    <a href="https://www.behance.net/marcosmatheus3" target="_blank">
                        <i className="fa-brands fa-behance"></i>
                    </a>

                    <a href="https://www.instagram.com/marcosmatheusfotografias/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.tiktok.com/@marcosmatheusfotografias" target="_blank">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                </div>
                <img
                    src="/logo/marcos-matheus-fotografias-logo.png"
                    alt="logo do site"
                    className={styles.header__logo}
                />
                
                <input type="checkbox" id="hamburger" className={styles.header__checkbox} />

                <label htmlFor="hamburger" className={styles.header__hamBtn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className={styles.header__nav}>
                    <Link href="/">Home</Link>
                    <Link href="/ensaio/feminino">Feminino</Link>
                    <Link href="/ensaio/masculino">Masculino</Link>
                    <Link href="/ensaio/casal">Casal</Link>
                    <Link href="/ensaio/gestante">Gestante</Link>
                    <Link href="/ensaio/profissional">Profissional</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header