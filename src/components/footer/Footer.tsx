import styles from "./Footer.module.css"

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__container}>
            <p>Marcos Matheus Fotógrafo em Pompéu e Região</p>
            <p>&copy; Todos os direitos reservados - {year}</p>
        </div>
    </footer>
  )
}

export default Footer