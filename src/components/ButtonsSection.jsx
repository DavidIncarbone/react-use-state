import languages from "../data/languages"
import Button from "./Button";
import Description from "./Description";
import { useState } from "react";
function ButtonsSection() {

    const myLanguages = [...languages];
    const [activeLanguage, setActiveLanguage] = useState(myLanguages[0]);
    return (
        <section>
            <div className="container">
                <ul className="list-unstyled d-flex">
                    {myLanguages.map((language) => (
                        <li key={language.id}
                            className="me-4 my-5 "
                            onClick={() => setActiveLanguage(language)}>
                            <Button title={language.title} />
                        </li>
                    ))}
                </ul>
            </div>
            <Description title={activeLanguage.title} description={activeLanguage.description} />
        </section>
    )
}

export default ButtonsSection;