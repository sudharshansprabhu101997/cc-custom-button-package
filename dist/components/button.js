'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _buttonModule = require('./button.module.scss');

var _buttonModule2 = _interopRequireDefault(_buttonModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  var className = props.className,
      disabled = props.disabled,
      label = props.label,
      type = props.type;

  return _react2.default.createElement(
    'button',
    {
      className: _buttonModule2.default.btn + ' ' + _buttonModule2.default[className],
      type: type === 'submit' ? 'submit' : 'submit',
      disabled: disabled },
    label
  );
}

Button.propTypes = {
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  label: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string
};

Button.defaultProps = {
  className: _buttonModule2.default.btn,
  disabled: false,
  type: 'button'
};