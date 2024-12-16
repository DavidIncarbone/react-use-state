import languages from "../data/languages"
import Button from "./Button";
import Description from "./Description";
import { useState } from "react";
function ButtonsSection() {

    const myLanguages = [...languages];
    const [activeLanguage, setActiveLanguage] = useState(myLanguages[0]);


    function toggleLanguage(language) {

        console.log(language)
        if (activeLanguage !== language) {
            setActiveLanguage(language);
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
                                isActive={activeLanguage === language}
                                showDescription={() => {
                                    setActiveLanguage(language);
                                    toggleLanguage(language);
                                }}

                            />
                        </li>
                    ))}
                </ul>
            </div>

            <Description title={activeLanguage !== null ? activeLanguage.title : ""} description={activeLanguage !== null ? activeLanguage.description : "Nessun linguaggio selezionato"} />
        </section>
    )
}

export default ButtonsSection;