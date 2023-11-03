import { TextStyle, ViewStyle } from 'react-native'

export type StaticTheme = {
    primaryFontFamily?: string
    colorPrimary: string
    colorPrimaryLight: string
    colorSecondary: string
    colorGrey: string
    colorTextPrimary: string
    colorTextSecondary: string
    colorBackground: string
    colorFocusBorder: string
    colorBackgroundGradient1: string
    colorBackgroundGradient2: string
    colorBackgroundGradient3: string
}

export type ApplicationStyles = {
    app: ViewStyle
    appContainer: ViewStyle
    container: ViewStyle
    screen: ViewStyle
    textH1: TextStyle
    textH2: TextStyle
    textH3: TextStyle
    text: TextStyle
    textBody1: TextStyle
    textBody2: TextStyle
    textBody3: TextStyle
}

export type RNMQIDS = {
    menuContainer: string
    burgerMenuBtn: string
    menuContainerBurgerOpen: string
    menuItemsBurgerOpen: string
    menuItems: string
}

export type Theme = {
    static: StaticTheme
    styles: ApplicationStyles
    ids: RNMQIDS
}
