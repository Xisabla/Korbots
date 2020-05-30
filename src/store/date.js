import { action, observable } from 'mobx'

class ObservableDate {
    @observable date = new Date()
    @observable locale = 'en-US'

    @action
    udpate() {
        this.date = new Date()
    }

    @action
    setLocale(locale) {
        this.locale = locale
    }
}

export default new ObservableDate()
