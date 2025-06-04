import { Link } from "react-router-dom";
import Input from "../../elements/Input"
import Button from "../../elements/Button"
import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";

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
        name: "Contact",
        url: "/contact"
    },
]

const Navbar = () => {
    return (
        <header className="">

            <nav className="flex justify-center items-center fixed top-0 left-0 w-full bg-milk z-50">
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
                        <form className="hidden md:flex md:items-center md:me-3">
                            <Input type="text" name="search"
                                id="search" placeholder="Search Products"
                                variantInput="h-8 px-3 border border-crow/50 rounded-full"
                            />
                            <Button variantButton="-ms-8 cursor-pointer">
                                <Search width={20} />
                            </Button>
                        </form>
                        <Button variantButton="block cursor-pointer md:hidden">
                            <Search />
                        </Button>
                        <Button variantButton="relative cursor-pointer">
                            <Link to="">
                                <ShoppingCart />
                            </Link>
                            <span
                                className="absolute top-[-6px] left-4 flex justify-center items-center w-4 h-4 text-milk text-sm bg-cerulean rounded-full"
                            >
                                0
                            </span>
                        </Button>
                        <Button variantButton="cursor-pointer">
                            <Link to="">
                                <UserRound />
                            </Link>
                        </Button>
                        <Button variantButton="block cursor-pointer md:hidden">
                            <Menu />
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;