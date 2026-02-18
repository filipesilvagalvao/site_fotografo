
import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import About from "@/components/about/About";
import Feedback_list from "@/components/feedback__list/Feedback_list";



export default function Home() {
  return (
    <main className={styles.page}>
      <Hero/>
      <About/>
      <Feedback_list/>
     
    </main>
  );
}
