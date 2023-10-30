import { createContext, useState } from "react";

export const primaryContext = createContext();


const PrimaryProvider = ({children}) => {
    // State
    const [camps, setCamps] = useState([]);
    const [states, setStates] = useState([]);

    // return provider div
    return (
        <primaryContext.Provider value={{
            camps,
            setCamps, 

            camps,
            setCamps, 
        }}>
            {children}
        </primaryContext.Provider>
    )


}

export default PrimaryProvider;