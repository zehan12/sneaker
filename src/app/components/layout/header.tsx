// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp
"use client"

// external libs
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"

// import icons
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

// internal libs
import Wrapper from "@/app/hoc/Wrapper";
import Menu from "../Menu";
import MoblieMenu from "../screen/MobileMenu";
import Hamburger from "../svg/Hamburger";

const Header = () => {
    // states
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > 2500) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY]);

    return (
        <Fragment>

            <header
                className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 
                backdrop-filter backdrop-blur-lg
                ${show}`}
            >
                <Wrapper className="h-[60px] flex justify-between items-center" >
                    {/* https://nextjs.org/docs/messages/no-img-element */}
                    <Image src="/logo.jpeg" alt="logo"
                        width={200} height={80}
                        // https://nextjs.org/docs/pages/api-reference/components/image#priority
                        // https://github.com/vercel/next.js/discussions/48255
                        priority
                        className="w-[40px] md:w-[60px]" />
                    <Menu
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        categories={[]}
                    />
                    {mobileMenu && (
                        <MoblieMenu
                            showCatMenu={showCatMenu}
                            setShowCatMenu={setShowCatMenu}
                            setMobileMenu={setMobileMenu}
                            categories={[]}
                        />
                    )}
                    <div className="flex items-center gap-2 text-black">
                        {/* Icon start : heart */}
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                51
                            </div>
                        </div>
                        {/* Icon end */}

                        {/* Icon start : cart */}
                        <Link href="/cart">
                            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                                <BsCart className="text-[15px] md:text-[20px]" />
                            </div>
                        </Link>
                        {/* Icon end */}

                        {/* Mobile icon start : Hamburger & close */}
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                            {mobileMenu ? (

                                <VscChromeClose
                                    className="text-[16px]"
                                    onClick={() => setMobileMenu(false)} />

                            ) : (
                                <Hamburger onClick={() => setMobileMenu(true)} />
                            )}
                        </div>
                        {/* Mobile icon end */}
                    </div>
                </Wrapper>
            </header>
        </Fragment>
    );
};

export default Header;
