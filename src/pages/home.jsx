import { useRef } from "react"
import { Link } from "react-router-dom";

import Button from "../components/elements/Button";
import Navbar from "../components/layouts/Navbar";

import { LuChevronLeft, LuChevronRight, LuCrown, LuHeadset, LuTruck, LuWallet } from "react-icons/lu";
import Card from "../components/fragments/Card";


const featuredProducts = [
    {
        name: "Aura Recliner",
        category: "Sofa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 3200000,
        image: "Aura_Recliner.png"
    },
    {
        name: "Aura Duo",
        category: "Sofa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 2000000,
        image: "Aura_Duo.png"
    },
    {
        name: "Aura Triple",
        category: "Sofa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 2600000,
        image: "Aura_Triple.png"
    },
    {
        name: "Aura Cornera",
        category: "Sofa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 2900000,
        image: "Aura_Cornera.png"
    },
]

const roomCategories = [
    {
        name: "Living Room",
        image: "Livingroom_Category.jpg"
    },
    {
        name: "Bed Room",
        image: "Bedroom_Category.jpg"
    },
    {
        name: "Kitchen Room",
        image: "Kitchen_Category.jpg"
    },
]

const HomePage = () => {
    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        if (!scrollRef.current) return;

        const { scrollLeft } = scrollRef.current;
        const scrollAmount = 300; // atau bisa pakai clientWidth untuk full scroll

        if (direction === "left") {
            scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: "smooth" });
        } else {
            scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
        }
    };


    return (
        <>
            <Navbar />

            <section className="relative flex justify-center items-center bg-[url('/img/hero/Modern_Livingroom.png')] bg-cover bg-center bg-no-repeat w-full h-screen overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-crow/50">
                <div className="relative px-[7%] w-full max-w-[1440px] h-full">
                    <div className="absolute top-2/5 w-[85%] md:w-3/5 2xl:w-1/2">
                        <h1 className="font-semibold text-4xl text-milk text-shadow-lg/50 text-shadow-crow md:text-5xl">
                            Find an Elegant Touch for <span className="text-cerulean">Your Dream Home</span>
                        </h1>
                        <p className="text-milk my-2 md:text-xl">
                            Explore our exclusive furniture collection modern design, premium quality, and unmatched comfort.
                        </p>
                        <Button variantButton="flex justify-center items-center h-10 px-4 mt-3 bg-cerulean text-milk font-medium rounded-sm cursor-pointer">
                            <Link to="/shop" >Explore Now</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <div className="flex justify-center items-center w-full">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center w-full max-w-[1440px] py-7 px-[7%]">
                    <div className="">
                        <h3 className="text-3xl font-bold text-cerulean">5K+</h3>
                        <p className="mt-1 text-sm">Happy Customers</p>
                    </div>
                    <div className="">
                        <h3 className="text-3xl font-bold text-cerulean">1.2K+</h3>
                        <p className="mt-1 text-sm">Products Sold</p>
                    </div>
                    <div className="">
                        <h3 className="text-3xl font-bold text-cerulean">150+</h3>
                        <p className="mt-1 text-sm">Furniture Types</p>
                    </div>
                    <div className="">
                        <h3 className="text-3xl font-bold text-cerulean">98%</h3>
                        <p className="mt-1 text-sm">Customers Statisfaction</p>
                    </div>
                </div>
            </div>

            <section className="flex justify-center items-center w-full mt-10">
                <div className="flex flex-col w-full max-w-[1440px] px-[7%]">
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <h3 className="font-semibold text-2xl md:text-3xl">
                                Featured <span className="text-cerulean">Products</span>
                            </h3>
                            <p className="mt-1 md:text-lg">
                                Featured products specially selected to beautify your room.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button onClick={() => handleScroll("left")} variantButton="text-3xl cursor-pointer rounded-full hover:bg-cerulean hover:text-milk duration-300">
                                <LuChevronLeft />
                            </Button>
                            <Button onClick={() => handleScroll("right")} variantButton="text-3xl cursor-pointer rounded-full hover:bg-cerulean hover:text-milk duration-300">
                                <LuChevronRight />
                            </Button>
                        </div>
                    </div>
                    <div ref={scrollRef}
                        className="flex items-center gap-3 w-full mt-8 overflow-x-scroll scrollbar-hide"
                    >
                        {featuredProducts.map((product, i) => (
                            <Card key={i} className="min-w-[280px] hover:scale-95 duration-300 cursor-pointer" >
                                <Card.Header image={`/img/products/${product.image}`} />
                                <Card.Body name={product.name} category={product.category} description={product.description} />
                                <Card.Footer price={product.price} />
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center w-full mt-10">
                <div className="w-full max-w-[1440px] px-[7%]">
                    <h3 className="font-semibold text-2xl md:text-3xl">
                        Define Style in <span className="text-cerulean">Each Room</span>
                    </h3>
                    <p className="mt-1 md:text-lg">
                        Design each room to suit your style with our best categories.
                    </p>
                    <div className="grid grid-cols-1 gap-3 mt-8 md:grid-cols-4">
                        {roomCategories.map((room, i) => (
                            <Card key={i} className="cursor-pointer hover:scale-95 duration-300">
                                <Card.Header image={`/img/room_categories/${room.image}`} />
                                <Card.Body name={room.name} />
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;