// Actions
export const DATE_SET = 'DATE_SET'
export const DATE_UPDATE = 'DATE_UPDATE'

// Action builders
export function dateSet(date) {
    if (!(date instanceof Date)) date = new Date(date)

    return { type: DATE_SET, date }
}

export function dateUpdate() {
    return { type: DATE_UPDATE }
}
