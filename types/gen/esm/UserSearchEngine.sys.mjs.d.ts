declare module "resource://gre/modules/UserSearchEngine.sys.mjs" {/// <reference types="gecko-types" />
/**
 * UserSearchEngine represents a search engine defined by a user.
 */
export class UserSearchEngine extends SearchEngine {
    /**
     * Creates a UserSearchEngine.
     *
     * @param {object} options
     *   The options for this search engine.
     * @param {object} [options.details]
     *   General information about the search engine.
     * @param {string} [options.details.name]
     *   The search engine name.
     * @param {string} [options.details.url]
     *   The search url for the engine.
     * @param {string} [options.details.keyword]
     *   The keyword for the engine.
     * @param {object} [options.json]
     *   An object that represents the saved JSON settings for the engine.
     */
    constructor(options?: {
        details?: {
            name?: string;
            url?: string;
            keyword?: string;
        };
        json?: object;
    });
}
import { SearchEngine } from "resource://gre/modules/SearchEngine.sys.mjs";
}