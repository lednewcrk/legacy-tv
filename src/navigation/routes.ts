import { isWebBased } from '../utils'

export const ROUTES = {
    SPLASH: isWebBased ? '/' : 'splash',
    PROFILES: 'profiles'
}
