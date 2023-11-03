import React, { useContext, useEffect } from 'react'
import { useWindowDimensions } from 'react-native'
import { Screen } from '@flexn/create'
import { ThemeContext } from '@config/theme'
import { Background } from '@components/index'
import { useReplace } from '@hooks/index'
import { ROUTES } from '@navigation/routes'

export const ScreenSplash = ({ navigation }: { navigation?: any }) => {
    const { height } = useWindowDimensions()
    const { theme } = useContext(ThemeContext)
    const replace = useReplace({ navigation })

    useEffect(() => {
        setTimeout(() => {
            replace(ROUTES.PROFILES)
        }, 1000)
    }, [])

    return (
        <Background>
            <Screen
                style={[theme.styles.screen, { minHeight: height }]}
                focusOptions={{ focusKey: 'page' }}
            />
        </Background>
    )
}
