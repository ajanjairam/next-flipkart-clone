import Link from "next/link";
import Image from "next/image";
import { TbSearch } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import FlipKartNav from "public/images/flipkart-nav.png";

function NavBar() {
    return (
        <nav className="bg-flipkart-blue sticky flex h-14 w-full">
            <div className="h-full min-w-[124px]" />
            <div className="mx-auto flex h-full w-full max-w-[1248px]">
                {/* Logo */}
                <div className="flex min-w-[137px] justify-end">
                    <div className="flex flex-col justify-center">
                        <Link href="/">
                            <Image
                                src={FlipKartNav}
                                alt="Flipkart"
                                className="h-5 w-[75px]"
                            />
                        </Link>
                        <Link
                            href="/plus"
                            className="text-[11px] italic text-[#F0F0F0]"
                        >
                            Explore{" "}
                            <span className="text-flipkart-yellow">Plus</span>
                        </Link>
                    </div>
                </div>
                {/* Search Bar */}
                <div className="ml-3 mr-auto flex h-full w-[calc(100%-540px)] min-w-[304px] items-center justify-start">
                    <form
                        action="/search"
                        className="flex h-9 w-full max-w-xl rounded-sm bg-white shadow"
                    >
                        <div className="w-full rounded-sm">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="h-9 w-full rounded-sm px-4 text-sm placeholder:text-[#212121] placeholder:opacity-60"
                                placeholder="Search for products, brands and more"
                            />
                        </div>
                        <button
                            type="submit"
                            className="h-9 w-11 cursor-pointer rounded-sm border border-white bg-white py-1 pl-2 pr-3"
                        >
                            <TbSearch className="h-5 w-5 text-[#2874F1]" />
                        </button>
                    </form>
                </div>
                {/* Login Button */}
                <div className="nav-link min-w-[112px] items-center">
                    <Link
                        href="/login"
                        className="text-flipkart-blue max-w-[108px] cursor-pointer rounded-sm bg-white px-10 py-1"
                    >
                        Login
                    </Link>
                </div>
                {/* Become Seller */}
                <div className="nav-link">
                    <a
                        target="_blank"
                        href="https://seller.flipkart.com/sell-online/"
                        className="flex items-center"
                    >
                        Become a Seller
                    </a>
                </div>
                {/* More */}
                <div className="nav-link">
                    <div className="flex h-full cursor-pointer items-center">
                        <p>More</p>
                        <FiChevronDown />
                    </div>
                </div>
                {/* Cart */}
                <div className="nav-link">
                    <div className="flex h-full cursor-pointer items-center">
                        <RiShoppingCart2Fill className="h-5 w-5" />
                        <Link href="/viewcart">Cart</Link>
                    </div>
                </div>
            </div>
            <div className="h-full min-w-[124px]" />
        </nav>
    );
}

export default NavBar;
