'use strict';

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var errorHandler = require('../helpers/errorHandler.js');
var responseHandler = require('../helpers/responseHandler.js');

/* files = {'files': open('/path/on/your/local-computer/report.xls', 'rb')}
r = requests.post(
    'http://api.hubapi.com/filemanager/api/v2/files?hapikey=demo', 
    data={
        "folder_paths": "folder-in-the-cos-file-manager/subfolder"
         },
    files=files)
    */

var Files = function Files() {
    var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (api === null) throw new Error('Request instance must be provided on constructor.');

    return {

        mapProperties: function mapProperties(properties) {
            return Object.keys(properties).map(function (property) {
                return {
                    name: property,
                    value: properties[property]
                };
            });
        },
        uploadFile: function uploadFile(properties) {
            // var mappedProperties = this.mapProperties(properties)
            return api.post2('filemanager/api/v2/files', data = properties.data, files = property.files).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log('error: ', error);
                errorHandler(error);
            });
        }
    };
};

module.exports = Files;