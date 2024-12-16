function Button({ title, isActive, showDescription, changeColor }) {
    return (

        <button type="button" className={`btn  fs-4 ${isActive ? "btn-warning" : "btn-primary"}`} onClick={showDescription}

        >
            {title}
        </button>

    )
}

export default Button;