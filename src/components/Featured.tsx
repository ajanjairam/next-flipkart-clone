"use client";

import Link from "next/link";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import { Featured } from "@/types";
import NavButton from "./NavButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

function Featured({ featured }: { featured: Featured }) {
    return (
        <div className="flex h-full items-stretch overflow-hidden rounded-sm bg-white shadow">
            <div
                className="w-[230px] bg-bottom bg-no-repeat text-center"
                style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_URL}${featured.attributes.bgImage.data.attributes.url})`,
                }}
            >
                <div className="flex h-full flex-col justify-end px-[10px] pb-[124px] pt-7">
                    <h1 className="word text-center text-3xl">
                        {featured.attributes.title}
                    </h1>
                    <div className="mt-6">
                        <a
                            href=""
                            className="bg-flipkart-blue rounded-sm px-5 py-[10px] text-center text-[13px] font-medium uppercase text-white shadow outline-none"
                        >
                            View All
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-[calc(100%-230px)]">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    slidesPerGroup={2}
                    breakpoints={{
                        978: { slidesPerView: 5, slidesPerGroup: 4 },
                    }}
                    navigation={{
                        prevEl: ".left-btn",
                        nextEl: ".right-btn",
                        disabledClass: "hidden",
                    }}
                >
                    {featured.attributes.subCategories.data.map(
                        (subCategory) => (
                            <SwiperSlide key={subCategory.id}>
                                <div className="relative w-[232px]">
                                    <Link
                                        href={`/category/${subCategory.attributes.title.toLowerCase()}`}
                                        className="max-h-[366px] w-full whitespace-nowrap px-[15px] py-6 text-center"
                                    >
                                        <div className="relative mx-auto h-[200px] w-[200px]">
                                            <Image
                                                fill
                                                className="object-contain"
                                                src={
                                                    process.env
                                                        .NEXT_PUBLIC_STRAPI_URL +
                                                    subCategory.attributes.image
                                                        .data.attributes.url
                                                }
                                                alt={
                                                    subCategory.attributes.image
                                                        .data.attributes
                                                        .alternativeText
                                                }
                                            />
                                        </div>
                                        <h3 className="mt-[15px] overflow-hidden text-ellipsis text-sm font-medium">
                                            {subCategory.attributes.title}
                                        </h3>
                                        <h1 className="text-flipkart-green pt-2">
                                            {subCategory.attributes.offers}
                                        </h1>
                                        <p className="pt-[7px] text-sm opacity-70">
                                            {subCategory.attributes.description}
                                        </p>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    )}
                    <NavButton direction="bi" />
                </Swiper>
            </div>
        </div>
    );
}

export default Featured;
