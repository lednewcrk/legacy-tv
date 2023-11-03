import React from 'react'
import { FocusContext, StyleSheet, View } from '@flexn/create'

type ProfileRootProps = {
    children?: React.ReactNode
}

export const ProfileRoot = ({ children }: ProfileRootProps) => {
    return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({ container: { alignItems: 'center' } })
