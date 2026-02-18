import Gallery from "@/components/gallery/Gallery"
import styles from "./Ensaio.module.css"
import essay from "@/photos"

type ParamsProps = {
  params: {
    id: string
  }
}



async function page({ params }: ParamsProps) {

  const { id } = await params

  const data = essay.filter((content) => {
    return content.id === id
  })[0]

  if(!data){
    return (<main className={styles.essay__notfound}>Sem conteúdo</main>)
  }
  
  return (
    <main className={styles.essay}>
      <header>
        <h1 className={styles.essay__title}>{data.title}</h1>
        <p className={styles.essay__p}>{data.description}</p>
      </header>
      <Gallery props={data.photos} />
    </main>
  )
}

export default page