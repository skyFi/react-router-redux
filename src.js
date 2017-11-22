'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

exports.default = function () {
  for (var _len = arguments.length, connectParams = Array(_len), _key = 0; _key < _len; _key++) {
    connectParams[_key] = arguments[_key];
  }

  return function (component) {
    return (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(connectParams)(component));
  };
};