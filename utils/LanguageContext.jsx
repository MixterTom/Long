import { createContext, useState } from "react";

const LanguageContext = createContext();

// eslint-disable-next-line react/prop-types
function LanguageProvider({children}) {
    const[language,setLanguage] = useState("VI");

    function toggleLanguge(lang){
        setLanguage(lang);
        console.log(language);
    }

    const value = {
        language,
        toggleLanguge   
    }

    return(
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}




export {LanguageContext, LanguageProvider}
