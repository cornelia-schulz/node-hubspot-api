'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var errorHandler = require('../helpers/errorHandler.js');
var responseHandler = require('../helpers/responseHandler.js');

var Tickets = function Tickets() {
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
    getAll: function getAll(params) {
      var defaultParams = _extends({
        offset: null
      }, params);

      return api.get('crm-objects/v1/objects/tickets/paged', defaultParams).then(function (response) {
        return responseHandler(response);
      }).catch(function (error) {
        return errorHandler(error);
      });
    },
    createTicket: function createTicket(properties) {
      // eslint-disable-next-line
      var mappedProperties = this.mapProperties(properties);

      return api.post2('crm-objects/v1/objects/tickets', mappedProperties).then(function (response) {
        return responseHandler(response);
      }).catch(function (error) {
        errorHandler(error);
      });
    }
  };
};

module.exports = Tickets;