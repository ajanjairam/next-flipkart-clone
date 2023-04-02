import { Categories } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function Home() {
    const categories: Categories = await fetch(
        "https://api.escuelajs.co/api/v1/categories"
    ).then((res) => res.json());
    return (
        <>
            <header className="flex min-h-[112px] w-full items-center justify-center bg-white">
                <div className="sticky flex w-full max-w-7xl justify-between">
                    {categories.map((category) => (
                        <div key={category.id} className="py-3 pl-[22px] pr-2">
                            <Link
                                href={`/category/${category.name.toLowerCase()}`}
                            >
                                <div className="relative mb-1 h-16 w-16">
                                    <Image
                                        fill
                                        src={category.image}
                                        alt={category.name}
                                    />
                                </div>
                                <p className="text-center text-sm text-[#212121]">
                                    {category.name}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </header>
        </>
    );
}

export default Home;
