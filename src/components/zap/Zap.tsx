"use client"
import { useState } from "react"
import styles from "./Zap.module.css"

function Zap() {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        categoria: '',
        mensagem: ''
    })

    // Substitua pelo seu número do WhatsApp (com código do país e DDD)
    const whatsappNumber = "5537984038171" // Exemplo: 55 11 99999-9999

    const handleChange = (e:any) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        
        // Construir a mensagem
        const mensagem = `*Olá Matheus, tenho interesse em um ensaio fotográfico*%0A%0A
*Nome:* ${formData.nome}%0A
*Telefone:* ${formData.telefone}%0A
*Tipo de ensaio:* ${formData.categoria}%0A
*Mensagem:* ${formData.mensagem}`

        // Criar o link do WhatsApp
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${mensagem}`
        
        // Abrir o WhatsApp em uma nova aba
        window.open(whatsappLink, '_blank')
        
        // Limpar o formulário
        setFormData({
            nome: '',
            telefone: '',
            categoria: '',
            mensagem: ''
        })

    }

    return (
        <>
            <input type="checkbox" id="openZap" className={styles.openZap}/>
            <label htmlFor="openZap" className={styles.zap}>
                <i className="fa-brands fa-whatsapp"></i>
            </label>

            <form className={styles.zap__form} onSubmit={handleSubmit}>
                <div className={styles.zap__content}>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        id="nome" 
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.zap__content}>
                    <label htmlFor="telefone">Telefone</label>
                    <input 
                        type="tel" 
                        id="telefone" 
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.zap__content}>
                    <label htmlFor="categoria">Escolha o ensaio:</label>
                    <select 
                        id="categoria" 
                        value={formData.categoria}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Tipo de ensaio</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Casal">Casal</option>
                        <option value="Gestante">Gestante</option>
                        <option value="Profissional">Profissional</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea 
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit">
                    Enviar via WhatsApp
                </button>
            </form>
        </>
    )
}

export default Zap