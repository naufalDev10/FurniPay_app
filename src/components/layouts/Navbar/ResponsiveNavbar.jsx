import { Link } from "react-router-dom";
import Button from "../../elements/Button";
import { LuHeart, LuHouse, LuInfo, LuMessageCircleMore, LuShoppingBag, LuShoppingCart, LuX } from "react-icons/lu";

const navMenus = [
    {
        name: "Home",
        url: "/",
        icon: <LuHouse />
    },
    {
        name: "Shop",
        url: "/shop",
        icon: <LuShoppingBag />
    },
    {
        name: "About",
        url: "/about",
        icon: <LuInfo />
    },
    {
        name: "Blog",
        url: "/blog",
        icon: <LuMessageCircleMore />
    },
]

const ResponsifeNavbar = (props) => {
    const { openNav, setOpenNav } = props

    const handlerCloseNav = () => {
        setOpenNav(false)
    }

    return (
        <>

            <nav className={`fixed top-0 right-0 ${openNav ? "transform translate-x-0 duration-300 ease-in-out" : "transform translate-x-full duration-300 ease-in-out"} w-80 h-screen py-4 px-[7%] bg-milk z-[60] md:hidden`}>
                <div className="flex justify-between items-center mb-8">
                    <Link to="" className="text-xl font-poppins font-semibold">
                        Furni<span className="text-cerulean">Pay</span>.
                    </Link>
                    <Button onClick={handlerCloseNav} variantButton="text-xl hover:text-cerulean duration-300 cursor-pointer">
                        <LuX />
                    </Button>
                </div>
                <ul>
                    {navMenus.map((menu, i) => (
                        <li key={i} className="mb-4">
                            <Link to={menu.url} className="flex items-center gap-3 text-lg hover:text-cerulean duration-300" >
                                {menu.icon} {menu.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-8">
                    <p className="text-lg">Join and enjoy our best offers.</p>
                    <Button variantButton="font-medium text-milk h-8 px-5 bg-cerulean rounded-sm">
                        <Link to="/auth">Sign</Link>
                    </Button>
                    <div className="flex items-center gap-5 mt-6">
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
                        <Button variantButton="relative text-xl cursor-pointer">
                            <LuHeart />
                        </Button>
                    </div>
                </div>
            </nav>
            {openNav && (
                <div onClick={handlerCloseNav} className="absolute inset-0 bg-crow/50 z-[55] md:hidden"></div>
            )}
        </>
    );
}

export default ResponsifeNavbar;