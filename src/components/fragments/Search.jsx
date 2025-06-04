import { LuSearch } from "react-icons/lu";
import Button from "../elements/Button";
import Input from "../elements/Input";

const Search = (props) => {
    const { openSearch, setOpenSearch } = props

    const handlerCloseSearch = () => {
        setOpenSearch(false)
    }
    return (
        <>
            <div className={`fixed top-0 right-0 ${openSearch ? "transform translate-x-0 duration-300 ease-in-out" : "transform translate-x-full duration-300 ease-in-out"} w-full h-screen bg-milk z-[60] md:w-3/4 lg:hidden`}>
                <div className="flex justify-between items-center py-6 px-[7%]">
                    <form className="flex items-center w-full">
                        <Input type="text" name="search"
                            id="search" placeholder="Search Products"
                            variantInput="w-[80%] h-9 px-4 border border-crow/50 rounded-full"
                        />
                        <Button variantButton="-ms-7 cursor-pointer">
                            <LuSearch />
                        </Button>
                    </form>
                    <Button onClick={handlerCloseSearch} variantButton="cursor-pointer" >
                        Cancel
                    </Button>
                </div>
                <div className="px-[7%]">
                    <h6 className="font-medium text-lg">Popular Searches</h6>
                    <ul className="flex flex-col gap-3 mt-6">
                        <li className="pb-2 border-b border-crow/50 cursor-pointer">
                            Sofa
                        </li>
                        <li className="pb-2 border-b border-crow/50 cursor-pointer">
                            Modern Bed
                        </li>
                        <li className="pb-2 border-b border-crow/50 cursor-pointer">
                            Coffee Table
                        </li>
                    </ul>
                </div>
            </div>
            {openSearch && (
                <div onClick={handlerCloseSearch} className="absolute inset-0 bg-crow/50 z-[55] lg:hidden"></div>
            )}
        </>
    );
}

export default Search;