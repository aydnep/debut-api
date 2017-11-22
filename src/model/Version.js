/**
 * backend
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The Version model module.
* @module model/Version
* @version 0.1.0
*/
export default class Version {
    /**
    * Constructs a new <code>Version</code>.
    * @alias module:model/Version
    * @class
    * @param headline {String} 
    * @param url {String} 
    * @param version {Number} 
    * @param articleId {Number} 
    */

    constructor(headline, url, version, articleId) {
        


        this['headline'] = headline;this['url'] = url;this['version'] = version;this['articleId'] = articleId;

        
    }

    /**
    * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Version} obj Optional instance to populate.
    * @return {module:model/Version} The populated <code>Version</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Version();

            
            
            if (data.hasOwnProperty('headline')) {
                obj['headline'] = ApiClient.convertToType(data['headline'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('articleId')) {
                obj['articleId'] = ApiClient.convertToType(data['articleId'], 'Number');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} headline
    */
    headline = undefined;
    /**
    * @member {String} url
    */
    url = undefined;
    /**
    * @member {Number} version
    */
    version = undefined;
    /**
    * @member {Number} articleId
    */
    articleId = undefined;
    /**
    * @member {Date} createdAt
    */
    createdAt = undefined;
    /**
    * @member {Date} updatedAt
    */
    updatedAt = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;








}


