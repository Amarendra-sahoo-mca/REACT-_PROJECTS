import { createContext, useContext } from "react";

export const ThemeContext =  createContext({
    themeMode : 'light',
    darktheme : ()=>{},
    lightTheme : ()=>{},
})
export const ThemProvider = ThemeContext.Provider

export default function useThem(){
    return useContext(ThemeContext)
}