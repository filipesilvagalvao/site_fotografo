import styles from "./About.module.css"

function About() {
    return (
        <section className={styles.about}>
            <div className={styles.about__container}>
                <figure className={styles.about__photo}>
                    <img
                        src="/photo-photographer/marcos-matheus.png"
                        alt="foto do fotógrafo"
                    />
                    <figcaption>Fotógrafo em pompéu - MG</figcaption>
                </figure>

                <h1 className={styles.about__title}>Marcos Matheus Fotógrafo</h1>

                <div className={styles.about__text}>
                    <p>
                       Olá, eu sou Marcos Matheus — mas pode me chamar de Matheus.
                    </p>
                    <p>
                        Tenho 25 anos e a fotografia não é apenas o que eu faço, é quem eu sou. Cada ensaio é uma oportunidade de entregar mais do que imagens: é sobre criar experiências, despertar autoestima e eternizar momentos.
                    </p>
                    <p>
                        Sou especializado em ensaios femininos, sensuais, gestantes e corporativos. Cada cliente é único, e cada ensaio também precisa ser. Não trabalho com padrões prontos — eu mergulho na história, na personalidade e na essência de quem está diante da minha lente para criar algo exclusivo, verdadeiro e memorável.
                    </p>
                    <p>
                        Eu não espero estar totalmente pronto — eu evoluo a cada clique. Aprendo com cada pessoa que passa pelo meu estúdio e entrego sempre minha melhor versão, como profissional e como ser humano. A fotografia me faz sentir vivo. E enquanto ela continuar me movendo, eu seguirei mergulhando de cabeça nessa jornada, criando experiências inesquecíveis para quem confia em mim.
                    </p>
                    <p>Vamos criar juntos ?</p>
                </div>
            </div>
        </section>
    )
}

export default About