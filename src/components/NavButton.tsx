import { useSwiper } from "swiper/react";
import { useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

function NavButton({ direction }: { direction: "left" | "right" | "bi" }) {
    return (
        <>
            {["left", "bi"].includes(direction) && (
                <div className="left-btn">
                    <GoChevronLeft className="h-10 w-10" />
                </div>
            )}
            {["right", "bi"].includes(direction) && (
                <div className="right-btn">
                    <GoChevronRight className="h-10 w-10" />
                </div>
            )}
        </>
    );
}

export default NavButton;
