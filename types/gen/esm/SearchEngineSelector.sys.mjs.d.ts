declare module "resource://gre/modules/SearchEngineSelector.sys.mjs" {/**
 * SearchEngineSelector parses the JSON configuration for
 * search engines and returns the applicable engines depending
 * on their region + locale.
 */
export class SearchEngineSelector {
    /**
     * @param {Function} listener
     *   A listener for configuration update changes.
     */
    constructor(listener: Function);
    _remoteConfig: any;
    _listenerAdded: boolean;
    /**
     * Handles updating of the configuration. Note that the search service is
     * only updated after a period where the user is observed to be idle.
     *
     * @param {object} options
     *   The options object
     * @param {object} options.data
     *   The data to update
     * @param {Array} options.data.current
     *   The new configuration object
     */
    _onConfigurationUpdated({ data: { current } }: {
        data: {
            current: any[];
        };
    }): void;
    _changeListener: Function;
    /**
     * Handles getting the configuration from remote settings.
     */
    getEngineConfiguration(): Promise<any[]>;
    _configuration: any[];
    _getConfigurationPromise: any[];
    /**
     * Obtains the configuration from remote settings. This includes
     * verifying the signature of the record within the database.
     *
     * If the signature in the database is invalid, the database will be wiped
     * and the stored dump will be used, until the settings next update.
     *
     * Note that this may cause a network check of the certificate, but that
     * should generally be quick.
     *
     * @param {boolean} [firstTime]
     *   Internal boolean to indicate if this is the first time check or not.
     * @returns {Array}
     *   An array of objects in the database, or an empty array if none
     *   could be obtained.
     */
    _getConfiguration(firstTime?: boolean): any[];
    /**
     * @param {object} options
     *   The options object
     * @param {string} options.locale
     *   Users locale.
     * @param {string} options.region
     *   Users region.
     * @param {string} [options.channel]
     *   The update channel the application is running on.
     * @param {string} [options.distroID]
     *   The distribution ID of the application.
     * @param {string} [options.experiment]
     *   Any associated experiment id.
     * @param {string} [options.appName]
     *   The name of the application.
     * @param {string} [options.version]
     *   The version of the application.
     * @returns {object}
     *   An object with "engines" field, a sorted list of engines and
     *   optionally "privateDefault" which is an object containing the engine
     *   details for the engine which should be the default in Private Browsing mode.
     */
    fetchEngineConfiguration({ locale, region, channel, distroID, experiment, appName, version, }: {
        locale: string;
        region: string;
        channel?: string;
        distroID?: string;
        experiment?: string;
        appName?: string;
        version?: string;
    }): object;
    _sort(defaultEngine: any, defaultPrivateEngine: any, a: any, b: any): number;
    /**
     * Create an index order to ensure default (and backup default)
     * engines are ordered correctly.
     *
     * @param {object} obj
     *   Object representing the engine configuration.
     * @param {object} defaultEngine
     *   The default engine, for comparison to obj.
     * @param {object} defaultPrivateEngine
     *   The default private engine, for comparison to obj.
     * @returns {integer}
     *  Number indicating how this engine should be sorted.
     */
    _sortIndex(obj: object, defaultEngine: object, defaultPrivateEngine: object): integer;
    #private;
}
}