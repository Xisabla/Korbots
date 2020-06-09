/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Application from './Application'

export default class Module {
    app: Application

    register(app: Application): void {
        this.app = app
    }

    get waitForDatabase(): boolean {
        return false
    }
}
