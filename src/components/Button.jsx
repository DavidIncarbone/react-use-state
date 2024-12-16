function Button({ title, isSelected, showDescription }) {
    return (

        <button type="button" className={`btn  fs-4 ${isSelected ? "btn-warning" : "btn-primary"}`} onClick={showDescription}


        >
            {title}
        </button>

    )
}

export default Button;