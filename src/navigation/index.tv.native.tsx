import React, { useEffect } from 'react'
import {
    disableTVMenuKey,
    enableTVMenuKey,
    setFocusManagerEnabled
} from '@flexn/create'
import { isPlatformTizen, isPlatformWebos } from '@rnv/renative'
import { enableScreens } from 'react-native-screens'
import { StyleSheet, Dimensions } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    NavigationContainer,
    useNavigationBuilder,
    createNavigatorFactory,
    StackRouter
} from '@react-navigation/native'
import { ScreenContainer, Screen } from 'react-native-screens'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ROUTES } from './routes'
import { ScreenProfiles, ScreenSplash } from '../screens'

const { height } = Dimensions.get('window')

setFocusManagerEnabled(true)
enableScreens()

const createTVNavigator = createNavigatorFactory(Navigator)

function Navigator({
    initialRouteName,
    children,
    screenOptions,
    drawerContent,
    ...rest
}: any) {
    const { state, navigation, descriptors, NavigationContent } =
        useNavigationBuilder(StackRouter, {
            children,
            screenOptions,
            initialRouteName
        })

    useEffect(() => {
        enableTVMenuKey()
        if (state.index === 0) {
            disableTVMenuKey()
        }
    }, [navigation, state.index])

    return (
        <NavigationContent>
            <ScreenContainer style={styles.main}>
                {state.routes.map((route, i) => {
                    const isFocused = state.index === i
                    const style =
                        isPlatformTizen || isPlatformWebos
                            ? { opacity: isFocused ? 1 : 0 }
                            : [
                                  StyleSheet.absoluteFill,
                                  { opacity: isFocused ? 1 : 0 }
                              ]

                    return (
                        <Screen
                            key={route.key}
                            style={style}
                            active={isFocused ? 1 : 0}
                        >
                            {descriptors[route.key].render()}
                        </Screen>
                    )
                })}
            </ScreenContainer>
        </NavigationContent>
    )
}

const RootStack = createNativeStackNavigator()
const MainNavigatorStack = createTVNavigator()

const MainNavigator = () => (
    <MainNavigatorStack.Navigator>
        <MainNavigatorStack.Screen
            name={ROUTES.SPLASH}
            component={ScreenSplash}
        />
        <MainNavigatorStack.Screen
            name={ROUTES.PROFILES}
            component={ScreenProfiles}
        />
    </MainNavigatorStack.Navigator>
)

const App = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name='stack' component={MainNavigator} />
            </RootStack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
)

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        opacity: 1,
        position: 'absolute',
        ...((isPlatformTizen || isPlatformWebos) && { height })
    },
    content: { flex: 1 },
    main: { flex: 1 }
})

export default App
