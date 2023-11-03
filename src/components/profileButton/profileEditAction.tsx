import React from 'react'
import {
    Text,
    Pressable,
    PressableProps,
    PressableFocusOptions
} from '@flexn/create'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useTheme } from '@hooks/index'
import { getScaledValue } from '@rnv/renative'

type ProfileEditActionProps = {
    isVisible?: boolean
    focusRepeatContext?: any
    focusOptions?: PressableFocusOptions
} & PressableProps

export const ProfileEditAction = ({
    isVisible = false,
    focusRepeatContext,
    focusOptions,
    style,
    ...rest
}: ProfileEditActionProps) => {
    const { theme } = useTheme()

    const focusStyle = {
        borderWidth: getScaledValue(1),
        borderColor: theme.static.colorFocusBorder
    }

    return (
        <Pressable
            focusRepeatContext={focusRepeatContext}
            focusOptions={{
                ...focusOptions,
                animator: {
                    type: 'border',
                    focus: focusStyle
                }
            }}
            style={[
                style,
                {
                    borderRadius: getScaledValue(32) / 2,
                    padding: getScaledValue(2),
                    opacity: isVisible ? 1 : 0
                }
            ]}
            {...rest}
        >
            <Icon
                name='edit'
                color={theme.static.colorTextPrimary}
                size={getScaledValue(16)}
            />
        </Pressable>
    )
}
