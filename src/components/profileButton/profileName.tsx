import React from 'react'
import { Text } from '@flexn/create'

import { useTheme } from '../../hooks'
import { FontFamily } from '../../config/theme'

type ProfileNameProps = {
    name: string
}

export const ProfileName = ({ name }: ProfileNameProps) => {
    const { theme } = useTheme()

    return (
        <Text
            style={[
                theme.styles.textBody1,
                { fontFamily: FontFamily.poppins.semibold }
            ]}
        >
            {name}
        </Text>
    )
}
