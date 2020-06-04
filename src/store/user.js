import { action, observable } from 'mobx'

class ObservableUser {
    // About the id: just an example to illustrate that not all the attributes needs to be observable
    id = Math.random()

    @observable username = 'me'

    @action
    setUsername(username) {
        this.username = username
    }
}

export default new ObservableUser()
