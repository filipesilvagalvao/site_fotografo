import Slider from "../slider/Slider"
import styles from "./Hero.module.css"
import photos from "@/photos"
import categories from "@/utils/categories"

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>

        <Slider images={categories["Feminino"]} delay={2000} box={1}/>
        <Slider images={categories["Masculino"]} delay={2500} box={2}/>
        <Slider images={categories["Casal"]} delay={3000} box={3}/>
        <Slider images={categories["Gestante"]} delay={3500} box={4}/>
        <Slider images={categories["Profissional"]} delay={4000} box={5}/>

      </div>
    </section>
  )
}

export default Hero