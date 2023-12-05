import React, { createContext, useContext } from "react";

export const GlobalStateContext = createContext();

export const useLanguageState = () => {
    return useContext(GlobalStateContext)
}
