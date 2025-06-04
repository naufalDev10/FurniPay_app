const Input = (props) => {
    const {
        type = "text",
        name,
        id,
        placeholder,
        value,
        onChange = () => { },
        variantInput
    } = props
    return (
        <input type={type} name={name} id={id}
            placeholder={placeholder} value={value}
            onChange={onChange} className={variantInput}
        />
    );
}

export default Input;