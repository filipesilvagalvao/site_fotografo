type EssayCategory = {
  id: string;
  title: string;
  description: string;
  photos: string[];
  metaDescription: string;
};

type Essay = EssayCategory[]

const essay: Essay = [
  {
    id: "feminino",
    title: "Feminino",
    description: "Ensaio fotográfico feminino? Temos também. Registe sua beleza feminina, eternize seu momento. Veja uma seleção de fotos de trabalhos fotográficos, inspire-se, tenha ideias com a lista de modelos.",
    metaDescription: "Ensaio fotográfico feminino em Pompéu – MG. Registre sua beleza e eternize momentos especiais com fotos profissionais e inspiradoras.",
    photos: [
      "https://ik.imagekit.io/ejkpbo90x/feminino/2022/livia-faria/foto-20.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/feminino/2023/livia-eduarda/foto-9.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/feminino/2023/julia-machado/foto-10.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2022/clara-soares/foto-8.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2022/clara-soares/foto-9.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2022/clara-soares/foto-7.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/aniversario/2025/lara-capanema/foto-23.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/aniversario/2025/lara-capanema/foto-16.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/aniversario/2025/lara-capanema/foto-31.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/aniversario/2025/lara-capanema/foto-28.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2022/joyce-lisboa/foto-3.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2022/joyce-lisboa/foto-13.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2022/joyce-lisboa/foto-14.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2023/rabeche-raira/foto-29.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2023/rabeche-raira/foto-31.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2023/rabeche-raira/foto-30.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/aline-gomes/foto-4.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/aline-gomes/foto-20.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/aline-gomes/foto-26.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/aline-gomes/foto-3.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/daiana/foto-13.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/daiana/foto-4.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/esmeralda/foto-1.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/esmeralda/foto-11.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/esmeralda/foto-15.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/fran-lacerda/foto-19.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/fran-lacerda/foto-15.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/fran-lacerda/foto-16.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/sensual/2025/fran-lacerda/foto-14.jpg?tr=w-800,f-webp"
    ]
  },
  {
    id: "masculino",
    title: "Masculino",
    description: "Uma seleção de foto masculinas, explore ideias, fortaleça sua marca pessoal para contar uma história mais forte ou guarde um registro poderoso de quem você é.",
    metaDescription: "Ensaio fotográfico masculino em Pompéu – MG. Fortaleça sua marca pessoal com fotos profissionais que contam sua história e destacam sua essência.",
    photos: [
      "https://ik.imagekit.io/ejkpbo90x/profissional/2022/arthur-e-cleisson-podpreto/foto-1.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2022/arthur-e-cleisson-podpreto/foto-2.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2022/arthur-e-cleisson-podpreto/foto-3.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2022/arthur-e-cleisson-podpreto/foto-4.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2022/arthur-e-cleisson-podpreto/foto-5.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2022/arthur-e-cleisson-podpreto/foto-6.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2022/arthur-e-cleisson-podpreto/foto-7.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2022/arthur-e-cleisson-podpreto/foto-8.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2022/arthur-e-cleisson-podpreto/foto-9.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2022/arthur-e-cleisson-podpreto/foto-10.jpg?tr=w-800,f-webp"
    ]
  },
  {
    id: "casal",
    title: "Casal",
    description: "Guarde os melhores momentos com a pessoa que você ama. Ensaios fotográficos de casal, namorados, noivos e casamentos. Registre a fase em que estão vivendo para recordar, momentos românticos.",
    metaDescription: "Ensaio fotográfico para casal em Pompéu – MG. Registre momentos românticos e eternize o amor com fotos de namorados, noivos e casamentos.",
    photos: [
      "https://ik.imagekit.io/ejkpbo90x/casal/2023/filipe-e-ohana/foto-17.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/casal/2023/filipe-e-ohana/foto-1.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/casal/2024/nicolas-e-esther/foto-12.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/casal/2024/nicolas-e-esther/foto-31.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/casal/2024/nicolas-e-esther/foto-3.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/casal/2023/gabriela-e-gustavo/foto-46.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/casal/2023/gabriela-e-gustavo/foto-27.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/casal/2023/gabriela-e-gustavo/foto-22.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/casal/2023/gabriela-e-gustavo/foto-37.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/pre_wedding/2026/jeny-e-mateus/foto-31.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/pre_wedding/2026/jeny-e-mateus/foto-7.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/pre_wedding/2026/jeny-e-mateus/foto-12.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/pre_wedding/2026/jeny-e-mateus/foto-23.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/noivado/2025/maria-eduarda-e-carlos-eloi/foto-59.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/noivado/2025/maria-eduarda-e-carlos-eloi/foto-21.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/noivado/2025/maria-eduarda-e-carlos-eloi/foto-57.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/noivado/2025/maria-eduarda-e-carlos-eloi/foto-16.jpg?tr=w-800,f-webp"
    ]
  },
  {
    id: "gestante",
    title: "Gestante",
    description: "Gerar uma vida é um milagre da existência e esses 9 meses são uma aventura. Um ensaio fotográfico gestante não é apenas sobre registrar uma barriga que cresce — é sobre eternizar a espera. É sobre capturar o instante exato em que o amor já é imenso, mesmo antes do primeiro olhar, do primeiro choro, do primeiro toque.",
    metaDescription: "Ensaio fotográfico gestante em Pompéu – MG. Eternize a espera e capture a magia da gestação com fotos emocionantes e cheias de amor.",
    photos: [
      "https://ik.imagekit.io/ejkpbo90x/gestante/2023/graciele/foto-16.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/gestante/2023/graciele/foto-15.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/gestante/2023/graciele/foto-3.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/gestante/2026/caroline-e-darlan/foto-54.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/gestante/2026/caroline-e-darlan/foto-12.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/gestante/2026/caroline-e-darlan/foto-38.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/gestante/2026/caroline-e-darlan/foto-23.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/gestante/2026/caroline-e-darlan/foto-39.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/gestante/2026/caroline-e-darlan/foto-33.jpg?tr=w-800,f-webp"
    ]
  },
  {
    id: "profissional",
    title: "Profissional",
    description: "Um ensaio fotográfico profissional não é apenas sobre imagem — é sobre posicionamento.Em um mundo onde o primeiro contato quase sempre acontece através de uma tela, sua fotografia fala antes mesmo da sua voz. Ela comunica confiança, competência, autoridade e propósito.",
    metaDescription: "Ensaio fotográfico profissional em Pompéu – MG. Fortaleça seu posicionamento e transmita confiança com fotos que destacam sua autoridade e propósito.",
    photos: [
      "https://ik.imagekit.io/ejkpbo90x/profissional/2024/francielle/foto-5.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2024/francielle/foto-8.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2023/maria-ressignifica-brecho/foto-5.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2023/maria-ressignifica-brecho/foto-1.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2023/maria-ressignifica-brecho/foto-11.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2023/jeniffer-e-gabriela/foto-7.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2023/jeniffer-e-gabriela/foto-6.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2023/jeniffer-e-gabriela/foto-9.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2023/jeniffer-e-gabriela/foto-4.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2023/jeniffer-e-gabriela/foto-2.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2025/alberto-lacerda-dentista/foto-10.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2025/alberto-lacerda-dentista/foto-4.jpg?tr=w-800,f-webp",
      "https://ik.imagekit.io/ejkpbo90x/profissional/2025/alberto-lacerda-dentista/foto-2.jpg?tr=w-800,f-webp"
    ]
  }
]

export default essay