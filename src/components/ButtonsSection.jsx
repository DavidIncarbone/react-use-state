import languages from "../data/languages"
import Button from "./Button";
import Description from "./Description";
function ButtonsSection() {
    return (
        <section>
            <div className="container">
                <ul className="list-unstyled d-flex">
                    {languages.map((language) => (
                        <li key={language.id} className="me-2 my-5"><Button title={language.title} /></li>
                    ))}
                </ul>
            </div>
            <Description />
        </section>
    )
}

export default ButtonsSection;