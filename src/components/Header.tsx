import Link from "next/link";
import Image from "next/image";
import { HeaderCategories } from "@/types";
import { FiChevronDown } from "react-icons/fi";

function Header({ categories }: { categories: HeaderCategories }) {
    return (
        <header className="flex min-h-[112px] w-full items-center justify-center bg-white">
            <div className="sticky flex w-full max-w-7xl justify-between space-x-[30px] px-[22px]">
                {categories.map((category) => (
                    <div key={category.id} className="py-3">
                        <Link
                            className="text-center"
                            href={`/category/${category.title.toLowerCase()}`}
                        >
                            <div className="relative mx-auto mb-1 h-16 w-16">
                                <Image
                                    fill
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${category.image.url}`}
                                    alt={category.image.alternativeText}
                                />
                            </div>
                            <div className="flex items-center justify-center text-[#212121]">
                                <p className="text-sm font-medium">
                                    {category.title}
                                </p>
                                {category.hasSubCategory && (
                                    <FiChevronDown className="ml-1 h-3 w-3" />
                                )}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </header>
    );
}

export default Header;
