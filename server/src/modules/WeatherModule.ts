import debug from 'debug'

import Application from '../core/Application'
import Module from '../core/Module'

const log = debug('module:WeatherModule')

export class WeatherModule extends Module {
    register(app: Application): void {
        super.register(app)

        log('Registered')
    }

    get waitForDatabase(): boolean {
        return true
    }
}
