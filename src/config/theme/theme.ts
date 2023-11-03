import { getScaledValue } from '@rnv/renative'
import StyleSheet from 'react-native-media-query'
import { StaticTheme } from '../../types/types'
import { FontFamily } from './fonts'

export const LAYOUT = { w: 1920, h: 1080 }

const staticTheme: Partial<StaticTheme> = {
    primaryFontFamily: FontFamily.poppins.regular
}

const staticThemes: { dark: StaticTheme; light: StaticTheme } = {
    dark: {
        colorPrimary: '#040218',
        colorPrimaryLight: '#07052E',
        colorSecondary: '#0D00FF',
        colorGrey: '#B7B7B7',
        colorTextPrimary: '#FFFFFF',
        colorTextSecondary: '#B7B7B7',
        colorBackground: '#040218',
        colorFocusBorder: '#FFFFFF',
        colorBackgroundGradient1: '#010112',
        colorBackgroundGradient2: '#07052E',
        colorBackgroundGradient3: '#040218',
        ...staticTheme
    },
    light: {
        colorPrimary: '#040218',
        colorPrimaryLight: '#07052E',
        colorSecondary: '#0D00FF',
        colorGrey: '#B7B7B7',
        colorTextPrimary: '#FFFFFF',
        colorTextSecondary: '#B7B7B7',
        colorBackground: '#040218',
        colorFocusBorder: '#FFFFFF',
        colorBackgroundGradient1: '#010112',
        colorBackgroundGradient2: '#07052E',
        colorBackgroundGradient3: '#040218',
        ...staticTheme
    }
}

export const createStyleSheet = (currentTheme: StaticTheme) =>
    StyleSheet.create({
        appContainer: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: getScaledValue(50),
            minHeight: getScaledValue(300),
            alignSelf: 'stretch',
            width: '100%'
        },
        screen: {
            // backgroundColor: currentTheme.colorBackground,
            flex: 1,
            width: '100%',
            height: '100%'
        },
        textH1: {
            fontFamily: currentTheme.primaryFontFamily,
            color: currentTheme.colorTextPrimary,
            fontSize: getScaledValue(32)
        },
        textBody1: {
            fontFamily: currentTheme.primaryFontFamily,
            color: currentTheme.colorTextPrimary,
            fontSize: getScaledValue(16)
        },
        textBody2: {
            fontFamily: currentTheme.primaryFontFamily,
            color: currentTheme.colorTextPrimary,
            fontSize: getScaledValue(12)
        },
        textBody3: {
            fontFamily: currentTheme.primaryFontFamily,
            color: currentTheme.colorTextPrimary,
            fontSize: getScaledValue(8)
        }
    })

const lightStyleSheet = createStyleSheet(staticThemes.light)
const darkStyleSheet = createStyleSheet(staticThemes.dark)

export const themes: {
    dark: any
    light: any
} = {
    light: {
        static: { ...staticThemes.light },
        styles: lightStyleSheet.styles,
        ids: lightStyleSheet.ids
    },
    dark: {
        static: { ...staticThemes.dark },
        styles: darkStyleSheet.styles,
        ids: darkStyleSheet.ids
    }
}

export const themeStyles = themes.dark.styles
export const THEME = staticThemes
export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'
