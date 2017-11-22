'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

exports.default = function () {
  var _args = arguments;
  return function (component) {
    return (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(_args[0], _args[1], _args[2], _args[3])(component));
  };
};