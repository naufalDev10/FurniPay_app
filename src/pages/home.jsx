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

const whyChooseFurnipay = [
    {
        label: "Premium Furniture Selection",
        description: "We offer a wide range of curated pieces for every room and style.",
        icon: <LuCrown />
    },
    {
        label: "Fast Delivery",
        description: "Your furniture is handled and delivered with care.",
        icon: <LuTruck />
    },
    {
        label: "Secure Payments",
        description: "Multiple payment options, including installments and secure checkout.",
        icon: <LuWallet />
    },
    {
        label: "Customer Centered Service",
        description: "Our support team is always ready to help you.",
        icon: <LuHeadset />
    },
]

const HomePage = () => {
    return (
        <>
            <Navbar />

            <section className="flex justify-center items-center bg-[url('/img/hero/Modern_Livingroom.png')] bg-cover bg-center bg-no-repeat w-full h-screen overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-crow/50">
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
                            <Button variantButton="text-3xl cursor-pointer">
                                <LuChevronLeft />
                            </Button>
                            <Button variantButton="text-3xl cursor-pointer">
                                <LuChevronRight />
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 w-full mt-8 overflow-x-auto">
                        {featuredProducts.map((product, i) => (
                            <Card key={i} className="min-w-[250px]" >
                                <Card.Header image={product.image} />
                                <Card.Body name={product.name} category={product.category} description={product.description} />
                                <Card.Footer price={product.price} />
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;