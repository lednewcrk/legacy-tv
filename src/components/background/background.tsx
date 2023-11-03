import React from 'react'
import { ImageStyle, StyleProp, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '@hooks/index'

type BackgroundProps = {
    children?: React.ReactNode
    style?: StyleProp<ViewStyle>
}

export const Background = ({ children, style }: BackgroundProps) => {
    const { theme } = useTheme()
    return (
        <LinearGradient
            style={[theme.styles.screen as ImageStyle, style]}
            colors={[
                theme.static.colorBackgroundGradient1,
                theme.static.colorBackgroundGradient2,
                theme.static.colorBackgroundGradient3
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            {children}
        </LinearGradient>
    )
}
