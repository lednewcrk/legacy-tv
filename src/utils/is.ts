import {
    isEngineRn,
    isPlatformTizen,
    isPlatformWeb,
    isPlatformWebos,
    isEngineRnMacos,
    isEngineRnWindows
} from '@rnv/renative'

export const isWebBased = isPlatformWeb || isPlatformTizen || isPlatformWebos
export const isEngineNative = isEngineRn || isEngineRnMacos || isEngineRnWindows
