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
                        Olá, sou Marcos Matheus, sou <em>fotógrafo em Pompéu.</em> Tenho 25 anos e sou apaixonado por tudo que envolve o mundo fotográfico. A cada ensaio, busco entregar minha melhor versão como pessoa e fotógrafo.
                    </p>
                    <p>
                        Aprendo com cada pessoa que cruza meu caminho e tento compartilhar o que sei. Acredito que meu propósito vá além de apenas registrar momentos: quero torná-los inesquecíveis tanto para quem confia em mim quanto para mim mesmo..
                    </p>
                    <p>
                        Com estudo e experiência, dedico-me à minha profissão. Mergulhei de cabeça nessa aventura através das lentes e não pretendo parar. Fotografar me faz bem, me faz sentir mais vivo e dá ainda mais sentido à minha vida.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About