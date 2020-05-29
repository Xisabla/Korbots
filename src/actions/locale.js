// Actions
export const LOCALE_SET = 'LOCALE_SET'

// Action builders
export function localeSet(locale) {
    return { type: LOCALE_SET, locale }
}
