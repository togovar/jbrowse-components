import PluginManager from '@jbrowse/core/PluginManager'
import { BaseConnectionModelFactory } from '@jbrowse/core/pluggableElementTypes/models'
import { ConfigurationReference } from '@jbrowse/core/configuration'
import { types } from 'mobx-state-tree'

// locals
import configSchema from './configSchema'

/**
 * #stateModel UCSCTrackHubConnection
 * extends BaseConnectionModel
 */
export default function UCSCTrackHubConnection(pluginManager: PluginManager) {
  return types
    .compose(
      'UCSCTrackHubConnection',
      BaseConnectionModelFactory(pluginManager),
      types.model({
        /**
         * #property
         */
        configuration: ConfigurationReference(configSchema),
        /**
         * #property
         */
        type: types.literal('UCSCTrackHubConnection'),
      }),
    )
    .actions(self => ({
      /**
       * #action
       */
      async connect() {
        const { doConnect } = await import('./doConnect')

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        doConnect(self)
      },
    }))
}
