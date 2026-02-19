import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date().toISOString()

    return [
        {
            url: "https://www.marcosmatheusfotografias.com.br",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: "https://www.marcosmatheusfotografias.com.br/ensaio/feminino",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: "https://www.marcosmatheusfotografias.com.br/ensaio/masculino",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: "https://www.marcosmatheusfotografias.com.br/ensaio/casal",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: "https://www.marcosmatheusfotografias.com.br/ensaio/gestante",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7
        },
        {
            url: "https://www.marcosmatheusfotografias.com.br/ensaio/profissional",
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7
        },
    ]
}