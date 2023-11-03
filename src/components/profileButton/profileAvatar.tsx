import React, { useState } from 'react'
import { StyleProp, ViewStyle, ImageStyle } from 'react-native'
import {
    Pressable,
    Image,
    PressableFocusOptions,
    PressableProps
} from '@flexn/create'
import { getScaledValue } from '@rnv/renative'
import { useTheme } from '../../hooks'

type ProfileAvatarProps = {
    source?: string
    size?: number
    focusRepeatContext?: any
    style?: StyleProp<ViewStyle>
    focusOptions?: PressableFocusOptions
} & PressableProps

export const ProfileAvatar = ({
    source,
    size = getScaledValue(128),
    focusRepeatContext,
    style,
    focusOptions = {},
    ...rest
}: ProfileAvatarProps) => {
    const { theme } = useTheme()

    const innerPadding = getScaledValue(2)

    const focusStyle = {
        borderWidth: getScaledValue(2),
        borderColor: theme.static.colorFocusBorder
    }

    const pressableStyle: StyleProp<ViewStyle> = {
        padding: innerPadding,
        borderRadius: (size - innerPadding) / 2
    }

    const imgStyle: StyleProp<ImageStyle> = {
        width: size - getScaledValue(8),
        height: size - getScaledValue(8),
        backgroundColor: theme.static.colorPrimaryLight,
        borderRadius: size - getScaledValue(8) / 2
    }

    return (
        <Pressable
            focusRepeatContext={focusRepeatContext}
            style={[pressableStyle, style]}
            focusOptions={{
                ...focusOptions,
                animator: { type: 'border', focus: focusStyle }
            }}
            {...rest}
        >
            <Image style={imgStyle} source={{ uri: source }} />
        </Pressable>
    )
}
