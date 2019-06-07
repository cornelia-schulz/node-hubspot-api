'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errorHandler = require('../helpers/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _responseHandler = require('../helpers/responseHandler');

var _responseHandler2 = _interopRequireDefault(_responseHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        uploadFile: function uploadFile(properties) {

            return api.post3('filemanager/api/v2/files', properties).then(function (response) {
                return (0, _responseHandler2.default)(response);
            }).catch(function (error) {
                console.log('logging error', error.message, error);
                (0, _errorHandler2.default)(error);
            });
        }
    };
};

exports.default = Files;