import { useState } from "react";
import { Link } from "react-router-dom";

import ResponsiveNavbar from "./ResponsiveNavbar"
import Search from "../../fragments/Search";
import Input from "../../elements/Input"
import Button from "../../elements/Button"

import { LuMenu, LuPhoneCall, LuSearch, LuShoppingCart, LuUserRound } from "react-icons/lu";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";

const navMenus = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Shop",
        url: "/shop"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Blog",
        url: "/blog"
    },
]

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    const handlerOpenNav = () => {
        setOpenNav(true)
    }

    const handlerOpenSearch = () => {
        setOpenSearch(true)
    }

    return (
        <>

            <header className="flex flex-col justify-center items-center fixed top-0 left-0 w-full bg-milk z-50">
                <div className="flex justify-center items-center w-full bg-cerulean">
                    <div className="flex flex-wrap justify-between items-center gap-1 w-full max-w-[1440px] py-1 px-[7%]">
                        <div className="">
                            <p className="flex items-center gap-3 text-sm text-milk">
                                <LuPhoneCall /> (+62) 873-2006-0023
                            </p>
                        </div>
                        <div className="">
                            <p className="text-sm text-milk">
                                Join and enjoy our best offers | <Link to="/auth" className="font-medium underline underline-offset-2">Sign In</Link>
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="" className="text-milk text-sm">
                                <BsInstagram />
                            </a>
                            <a href="" className="text-milk text-sm">
                                <BsTiktok />
                            </a>
                            <a href="" className="text-milk text-sm">
                                <BsFacebook />
                            </a>
                            <a href="" className="text-milk text-sm">
                                <BsTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                <nav className="flex justify-center items-center w-full">
                    <div className="flex justify-between items-center w-full max-w-[1440px] py-4 px-[7%]">
                        <div className="flex items-center">
                            <Link to="" className="font-poppins font-semibold text-xl md:text-2xl">
                                Furni<span className="text-cerulean">Pay</span>.
                            </Link>
                            <ul className="hidden md:flex md:items-center md:gap-8 md:ms-10">
                                {navMenus.map((menu, i) => (
                                    <li key={i}>
                                        <Link to={menu.url}>{menu.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center gap-3 md:gap-4">
                            <form className="hidden lg:flex lg:items-center lg:me-3">
                                <Input type="text" name="search"
                                    id="search" placeholder="Search Products"
                                    variantInput="h-8 px-3 border border-crow/50 rounded-full"
                                />
                                <Button variantButton="text-md -ms-7 cursor-pointer">
                                    <LuSearch />
                                </Button>
                            </form>
                            <Button onClick={handlerOpenSearch} variantButton="block text-xl cursor-pointer lg:hidden">
                                <LuSearch />
                            </Button>
                            <Button variantButton="relative text-xl cursor-pointer">
                                <Link to="">
                                    <LuShoppingCart />
                                </Link>
                                <span
                                    className="absolute top-[-6px] left-4 flex justify-center items-center w-4 h-4 text-milk text-xs bg-cerulean rounded-full"
                                >
                                    0
                                </span>
                            </Button>
                            <Button variantButton="text-xl cursor-pointer">
                                <Link to="">
                                    <LuUserRound />
                                </Link>
                            </Button>
                            <Button onClick={handlerOpenNav} variantButton="block text-xl cursor-pointer md:hidden">
                                <LuMenu />
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>
            <ResponsiveNavbar openNav={openNav} setOpenNav={setOpenNav} />
            <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
        </>
    );
}

export default Navbar;