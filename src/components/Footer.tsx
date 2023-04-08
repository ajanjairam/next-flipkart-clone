import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
    const footers: { image: string; text: string }[] = [
        { image: "seller", text: "Become a Seller" },
        { image: "advertise", text: "Advertise" },
        { image: "gifts", text: "Gift Cards" },
        { image: "help", text: "Help Center" },
    ];
    return (
        <footer className="bg-flipkart-footer flex w-full items-center justify-evenly border-t border-[#454d5E] py-6 text-left text-white">
            {footers.map((footer) => (
                <div key={footer.image} className="flex">
                    <Image
                        width={16}
                        height={16}
                        alt={footer.text}
                        src={`/images/${footer.image}.svg`}
                    />
                    <Link href={`/${footer.text}`} className="ml-2">
                        {footer.text}
                    </Link>
                </div>
            ))}
            <p>&copy; 2007-2023 Flipkart.com</p>
            <img src="/images/payments.svg" alt="Payment Methods" />
        </footer>
    );
}

export default Footer;
