import React, { useContext } from 'react'
import { useWindowDimensions, Text, StyleSheet } from 'react-native'
import { Screen, FlashList } from '@flexn/create'
import { getScaledValue } from '@rnv/renative'

import { FontFamily, ThemeContext } from '../../config/theme'
import { Spacer, Background } from '../../components'
import { PROFILES, Profile } from '../../utils/data'
import { ProfileButtonHoc } from './profileButtonHoc'

type ScreenProfilesProps = {
    navigation?: any
    route?: any
}

export const ScreenProfiles = ({}: ScreenProfilesProps) => {
    const { height } = useWindowDimensions()
    const { theme } = useContext(ThemeContext)

    const getItemId = (item: Profile) => `profle-${item.id}`

    const getNextFocusLeft = (itemIndex: number) => {
        if (itemIndex - 1 < 0) {
            return undefined
        }
        return getItemId(PROFILES[itemIndex - 1])
    }

    const getNextFocusRight = (itemIndex: number) => {
        if (itemIndex + 1 >= PROFILES.length) {
            return undefined
        }
        return getItemId(PROFILES[itemIndex + 1])
    }

    const renderItem = ({ item, focusRepeatContext, index, target }: any) => {
        return (
            <ProfileButtonHoc
                index={index}
                item={item}
                focusRepeatContext={focusRepeatContext}
                getItemId={getItemId}
                getNextFocusLeft={getNextFocusLeft}
                getNextFocusRight={getNextFocusRight}
            />
        )
    }
    return (
        <Background>
            <Screen
                style={[
                    theme.styles.screen,
                    styles.container,
                    { minHeight: height }
                ]}
                focusOptions={{ focusKey: 'page' }}
            >
                <Text
                    style={[
                        theme.styles.textH1,
                        { fontFamily: FontFamily.poppins.semibold }
                    ]}
                >
                    Escolha um perfil:
                </Text>
                <Spacer height={getScaledValue(43)} />
                <FlashList
                    data={PROFILES}
                    renderItem={renderItem}
                    type='row'
                    estimatedItemSize={getScaledValue(200)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: getScaledValue(200) }}
                    keyExtractor={(it, _) => getItemId(it)}
                    ItemSeparatorComponent={() => (
                        <Spacer width={getScaledValue(11)} />
                    )}
                />
            </Screen>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
