// Action
export const USER_SET = 'USER_SET'

// Action builders
export function userSet(username) {
    return { type: USER_SET, username }
}
