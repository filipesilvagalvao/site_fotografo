import Gallery from "@/components/gallery/Gallery"
import styles from "./Ensaio.module.css"
import essay from "@/photos"

type ParamsProps = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ParamsProps) {
  const { id } = await params

  const data = essay.filter((content) => {
    return content.id === id
  })[0]

  if (!data) {
    return
  }

  return {
    title: "Ensaio fotográfico " + data.id,
    description: data.metaDescription,
    openGraph: {
      title: `${data.title} | Marcos Matheus`,
      description: data.metaDescription
    }
  }
}


async function page({ params }: ParamsProps) {

  const { id } = await params

  const data = essay.filter((content) => {
    return content.id === id
  })[0]

  if (!data) {
    return (<main className={styles.essay__notfound}>Sem conteúdo</main>)
  }

  return (
    <main className={styles.essay}>
      <header>
        <h1 className={styles.essay__title}>{data.title}</h1>
        {data.description.map((text, index) => (
          <p className={styles.essay__p} key={index}>{text}</p>
        ))}
      </header>
      <Gallery props={data.photos} />
    </main>
  )
}

export default page