import React from 'react'
import { App, Debugger } from '@flexn/create'
import { LogBox } from 'react-native'
import Navigation from '../navigation'
import { ThemeProvider } from '../config/theme/theme.context'

LogBox.ignoreAllLogs()

const MyApp = () => (
    <ThemeProvider>
        <App style={{ flex: 1 }}>
            <Navigation />
            <Debugger />
        </App>
    </ThemeProvider>
)

export default MyApp
