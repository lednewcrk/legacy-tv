import React, { useState } from 'react'

import { ProfileButton } from '../../components'
import { Profile } from '../../utils/data'
import { Spacer } from '../../components/spacer/spacer'
import { getScaledValue } from '@rnv/renative'

type ProfileButtonHocProps = {
    item: Profile
    index: number
    getItemId: (item: Profile) => string
    getNextFocusLeft: (itemIndex: number) => string | undefined
    getNextFocusRight: (itemIndex: number) => string | undefined
    focusRepeatContext?: any
}

export const ProfileButtonHoc = ({
    item,
    index,
    getItemId,
    getNextFocusLeft,
    getNextFocusRight,
    focusRepeatContext
}: ProfileButtonHocProps) => {
    const [focused, setFocused] = useState(false)
    const editButtonFocusKey = `edit-button-${index}`
    return (
        <ProfileButton.Root>
            <ProfileButton.Avatar
                focusOptions={{
                    focusKey: getItemId(item),
                    nextFocusLeft: getNextFocusLeft(index),
                    nextFocusRight: getNextFocusRight(index),
                    nextFocusDown: editButtonFocusKey,
                    hasPreferredFocus: index === 0
                }}
                focusRepeatContext={focusRepeatContext}
                source={item.photoUrl}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            <Spacer height={getScaledValue(10)} />
            <ProfileButton.Name name={item.name} />
            <Spacer height={getScaledValue(8)} />
            <ProfileButton.EditAction
                isVisible={focused}
                focusRepeatContext={focusRepeatContext}
                focusOptions={{
                    nextFocusUp: getItemId(item),
                    focusKey: editButtonFocusKey,
                    forbiddenFocusDirections: ['left', 'right']
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </ProfileButton.Root>
    )
}
