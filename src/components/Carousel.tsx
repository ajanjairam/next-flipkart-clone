"use client";

import Image from "next/image";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import NavButton from "./NavButton";
import type { Carousels } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";

function Carousel({ carousels }: { carousels: Carousels }) {
    return (
        <div className="w-full">
            <Swiper
                loop
                slidesPerView={1}
                className="max-w-[1680px]"
                navigation={{ prevEl: ".left-btn", nextEl: ".right-btn" }}
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {carousels.data.map((carousel) => (
                    <SwiperSlide key={carousel.id}>
                        <div className="relative h-[280px] w-full">
                            <Image
                                fill
                                src={
                                    process.env.NEXT_PUBLIC_STRAPI_URL +
                                    carousel.attributes.image.data.attributes
                                        .url
                                }
                                alt={
                                    carousel.attributes.image.data.attributes
                                        .alternativeText
                                }
                            />
                        </div>
                    </SwiperSlide>
                ))}
                <NavButton direction="bi" />
            </Swiper>
        </div>
    );
}

export default Carousel;
