import { useContext } from 'react'
import { ThemeContext } from '../config/theme/theme.context'

export function useTheme() {
    return useContext(ThemeContext)
}
