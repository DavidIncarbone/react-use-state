import languages from "../data/languages"
import Button from "./Button";
import Description from "./Description";
import { useState } from "react";
function ButtonsSection() {

    const myLanguages = [...languages];
    const [activeLanguage, setActiveLanguage] = useState(myLanguages[0]);
    function toggleLanguage(id) {
        if (activeLanguage !== id) {
            setActiveLanguage(id);
        } else {
            setActiveLanguage(null);
        }
    }
    return (
        <section>
            <div className="container">
                <ul className="list-unstyled d-flex">
                    {myLanguages.map((language) => (
                        <li key={language.id} className="me-4 my-5 ">
                            <Button title={language.title}
                                showDescription={() => setActiveLanguage(language)}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <Description title={activeLanguage.title} description={activeLanguage.description} />
        </section>
    )
}

export default ButtonsSection;