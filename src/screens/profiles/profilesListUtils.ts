import { Profile } from '@utils/data'

export class ProfileListUtils {
    constructor(private profiles: Array<Profile>) {}

    getItemId = (item: Profile) => `profile-${item.id}`

    getNextFocusLeft = (itemIndex: number) => {
        if (itemIndex - 1 < 0) return undefined
        return this.getItemId(this.profiles[itemIndex - 1])
    }

    getNextFocusRight = (itemIndex: number) => {
        if (itemIndex + 1 >= this.profiles.length) return undefined
        return this.getItemId(this.profiles[itemIndex + 1])
    }
}
