import {
  useState,
  useEffect,
  createContext,
  useContext
} from "react"

export const themeContext = createContext()

// Hooks Personalizado
export const useTheme = () => {
  const context = useContext(themeContext)
  if (!context) throw new Error("No esta Puesto el Theme Provider o esta vacio")
  return context
}

export const ThemeProvider = ({ children }) => {

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    const theme = window.localStorage.getItem('darkTheme')
    setDarkTheme(theme)
  }, [])

  const setLocalStorage = (theme) => {
    window.localStorage.setItem('darkTheme', theme)
    setDarkTheme(theme)
  }

  return (
    <themeContext.Provider value={{
      darkTheme,
      setLocalStorage
    }} >
      {children}
    </themeContext.Provider>
  )
}
