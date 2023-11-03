import React, { createContext, ReactNode, useState, useMemo } from 'react'
import { themes } from './theme'
import { Theme } from '../../types'

type ThemeContextType = {
    theme: Theme
    dark: boolean
    toggle?: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: themes.dark,
    dark: true
})

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [dark, setDark] = useState<ThemeContextType['dark']>(false)
    const toggle = () => setDark(isDark => !isDark)
    const theme = useMemo(() => (dark ? themes.dark : themes.light), [dark])
    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}
