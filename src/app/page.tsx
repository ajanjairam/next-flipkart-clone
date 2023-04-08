import { Carousel, Header, Featured, Footer } from "@/components";
import type { Carousels, HeaderCategories, Featureds } from "@/types";

async function Home() {
    const categories: HeaderCategories = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API}/categories/header`
    ).then((res) => res.json());
    const carousels: Carousels = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API}/carousels?populate=*`
    ).then((res) => res.json());
    const featureds: Featureds = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API}/featured-categories?populate[subCategories][populate][0]=image&populate=bgImage`
    ).then((res) => res.json());
    return (
        <>
            <Header categories={categories} />
            <main className="mx-auto w-full min-w-[978px] max-w-[1680px] space-y-[10px] bg-[#F1F3F6] p-2">
                <Carousel carousels={carousels} />
                {featureds.data.map((featured) => (
                    <Featured key={featured.id} featured={featured} />
                ))}
            </main>
            <Footer />
        </>
    );
}

export default Home;
