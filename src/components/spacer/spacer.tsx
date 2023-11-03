import React from 'react'
import { View } from '@flexn/create'

type SpacerProps = {
    width?: number
    height?: number
}

export const Spacer = ({ width, height }: SpacerProps) => (
    <View style={{ width, height }} />
)
