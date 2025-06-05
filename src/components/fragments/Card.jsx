import Button from "../elements/Button";

const Card = ({ children, className }) => {
    return (
        <div
            className={`bg-milk p-4 rounded-md shadow-md shadow-crow/20 overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
}

const Header = ({ image }) => {
    return (
        <div className="w-full h-52">
            <img src={`/img/products/${image}`} alt="" className="w-full h-full object-cover" />
        </div>
    )
}

const Body = ({ name, category, description }) => {
    return (
        <div className="mt-2">
            <h3 className="font-semibold text-cerulean text-xl">{name}</h3>
            <p className="text-sm text-crow/80 mb-2">{category ? category : ""}</p>
            <p className="text-sm">{description}</p>
        </div>
    )
}

const Footer = ({ price }) => {
    return (
        <div className="flex justify-between items-center w-full mt-3">
            <p className="font-semibold">Rp. {price}</p>
            <Button variantButton="bg-cerulean h-8 px-3 rounded-md text-sm text-milk cursor-pointer">
                Add to Cart
            </Button>
        </div>
    )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card;