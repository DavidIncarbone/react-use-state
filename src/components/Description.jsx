function Description({ title, description }) {
    return (
        <div className="container border rounded">

            <h2 className="p-2">{title}</h2>
            <p className="ps-2">{description}</p>

        </div>
    )
}

export default Description;