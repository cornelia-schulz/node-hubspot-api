'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errorHandler = require('../helpers/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _responseHandler = require('../helpers/responseHandler');

var _responseHandler2 = _interopRequireDefault(_responseHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Association = function Association() {
  var api = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (api === null) throw new Error('Request instance must be provided on constructor.');

  return {
    // https://developers.hubspot.com/docs/methods/crm-associations/associate-objects
    createAssociation: function createAssociation(properties) {
      return api.put('crm-associations/v1/associations', properties).then(function (response) {
        console.log('response', response);
        return (0, _responseHandler2.default)(response);
      }).catch(function (error) {
        console.error('error:', error);
        (0, _errorHandler2.default)(error);
      });
    }
  };
};

exports.default = Association;