const Button = (props) => {
    const { type = "button", children, variantButton, onClick = () => { } } = props
    return (
        <button type={type} className={variantButton} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;