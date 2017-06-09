/*!
 * Copyright 2017 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

define(['exports', 'jquery'], function(exports, $) {

    /**
     * Get all favorites documents
     *
     * @param  {String}         idPrincipals            Id of the folder we're trying to retrieve
     * @param  {Function}       callback                Standard callback function
     * @param  {Object}         callback.err            Error object containing error code and error message
     * @param  {Folder}         callback.folder         Folder object representing the retrieved folder
     * @throws {Error}                                  Error thrown when no folder id has been provided
     */
    var getFavoritesLibrary = exports.getFavoritesLibrary = function(idPrincipals, callback) {
        if (!idPrincipals) {
            throw new Error('A valid user id should be provided');
        }

        $.ajax({
            'url': '/api/favorites/library/' + idPrincipals,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.responseText});
            }
        });
    };


    /**
     * Create a new folder
     *
     * @param  {String}         idPrincipals            Display title for the created folder
     * @param  {String}         idResources             The folder's description
     * @param  {Function}       [callback]              Standard callback function
     * @param  {Object}         [callback.err]          Error object containing error code and error message
     * @throws {Error}                                  Error thrown when no valid display name has been provided
     */
    var addToFavorites = exports.addToFavorites = function(idPrincipal, idResources, callback) {
        if (!idPrincipal) {
            throw new Error('A valid user id should be provided');
        }
        if (!idResources) {
            throw new Error('A valid resources should be provided');
        }
        console.log(idResources);
        // Set a default callback function in case no callback function has been provided
        callback = callback || function() {};

        var data = {
            'idPrincipal': idPrincipal,
            'idResources': idResources
        };

        $.ajax({
            'url': '/api/favorites/addToFavorites/',
            'type': 'POST',
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.responseText});
            }
        });
    };

        /**
     * Create a new folder
     *
     * @param  {String}         idPrincipals            Display title for the created folder
     * @param  {String}         idResources             The folder's description
     * @param  {Function}       [callback]              Standard callback function
     * @param  {Object}         [callback.err]          Error object containing error code and error message
     * @throws {Error}                                  Error thrown when no valid display name has been provided
     */
    var removeFavorite = exports.removeFavorite = function(idPrincipals, idResources, callback) {
        if (!idPrincipals) {
            throw new Error('A valid user id should be provided');
        }
        if (!idResources) {
            throw new Error('A valid resources id should be provided');
        }

        // Set a default callback function in case no callback function has been provided
        callback = callback || function() {};

        var data = {
            'idPrincipals': idPrincipals,
            'idResources': idResources
        };

        $.ajax({
            'url': '/api/favorites/removeFavorite/',
            'type': 'POST',
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.responseText});
            }
        });
    };

});
