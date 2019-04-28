"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (error) {

  if (error.response) {
    var HTTPError = function (_Error) {
      _inherits(HTTPError, _Error);

      function HTTPError(code, message) {
        _classCallCheck(this, HTTPError);

        var _this = _possibleConstructorReturn(this, (HTTPError.__proto__ || Object.getPrototypeOf(HTTPError)).call(this, message));

        _this.statusCode = code;
        return _this;
      }

      return HTTPError;
    }(Error);
    // The request was made, but the server responded with a status code
    // that falls out of the range of 2xx


    throw new HTTPError(error.response.data.message || error.response.statusText);
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error(error);
  }
};