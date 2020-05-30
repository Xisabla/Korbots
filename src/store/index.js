import { observable, autorun, configure, action } from 'mobx'

configure({ enforceActions: 'always' })

// TODO: User multiple stores, and inject them with the provider

class Store {
    // ------------- Observables  ------------

    @observable user = {
        username: 'me'
    }

    @observable date = new Date()
    @observable locale = 'fr-FR'

    // ------- Debugging with autorun --------

    constructor() {
        autorun(() => {
            console.log('Username changed to ', this.user.username)
        })

        autorun(() => {
            console.log('Date changed to: ', this.date)
        })

        autorun(() => {
            console.log('Locale changed to: ', this.locale)
        })
    }

    // --------------- Actions ---------------

    // Locale

    @action
    setLocale(locale) {
        this.locale = locale
    }

    // Date

    @action
    updateDate() {
        this.date = new Date()
    }

    @action
    setDate(date) {
        this.date = date
    }

    // User

    @action
    setUsername(username) {
        this.user.username = username
    }
}

export default new Store()
