"use client"
import styles from "./Zap.module.css"

function Zap() {
    return (
        <>
            <input type="checkbox" id="openZap" className={styles.openZap}/>
            <label htmlFor="openZap" className={styles.zap}>
                <i className="fa-brands fa-whatsapp"></i>
            </label>

            <form className={styles.zap__form}>
                <div className={styles.zap__content}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" />
                </div>

                <div className={styles.zap__content}>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" id="telefone" />
                </div>

                <div className={styles.zap__content}>
                    <label htmlFor="categoria">Escolha o ensaio:</label>
                    <select id="categoria">
                        <option value="" disabled selected>Tipo de ensaio</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Casal">Casal</option>
                        <option value="Gestante">Gestante</option>
                        <option value="Profissional">Profissional</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="texto">Mensagem</label>
                    <textarea id="texto"></textarea>
                </div>

                <button>
                    enviar
                </button>
            </form>
        </>
    )
}

export default Zap