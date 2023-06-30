import { useState, createContext } from "react";

const BodyContext = createContext()

// eslint-disable-next-line react/prop-types
function BodyProvider({children}){
    const[typeBody, setTypeBody] = useState("body1");

    const toggleBody = (type) => {
        setTypeBody(type);
    }

    const value = {
        typeBody,
        toggleBody
    }

    return(

        <BodyContext.Provider value={value}>
            {children}
        </BodyContext.Provider>
    )
}

export {BodyContext, BodyProvider}