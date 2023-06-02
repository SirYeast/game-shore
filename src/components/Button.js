function Button(props) {
    return (
        <button className={"btn " + (props.isPrimary ? "primary" : "secondary")}>
            {props.text}
        </button>
    )
}

export default Button