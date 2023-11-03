import { View } from '@flexn/create'
import React from 'react'

type SpacerProps = {
    width?: number
    height?: number
}

export const Spacer = ({ width, height }: SpacerProps) => (
    <View style={{ width, height }} />
)
