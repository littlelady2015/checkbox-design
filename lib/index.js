import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _extends from "@babel/runtime/helpers/extends";
import "core-js/modules/es6.function.name";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { Component } from 'react';

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!(this.props && this.props.checkboxGroup)) {
        throw new Error('The `Checkbox` component must be used as a child of `CheckboxGroup`.');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$checkboxG = _this$props.checkboxGroup,
          name = _this$props$checkboxG.name,
          checkedValues = _this$props$checkboxG.checkedValues,
          onChange = _this$props$checkboxG.onChange,
          rest = _objectWithoutProperties(_this$props, ["checkboxGroup"]);

      var optional = {};

      if (checkedValues) {
        optional.checked = checkedValues.indexOf(this.props.value) >= 0;
      }

      if (typeof onChange === 'function') {
        optional.onChange = onChange.bind(null, this.props.value);
      }

      return React.createElement("input", _extends({}, rest, {
        type: "checkbox",
        name: name,
        disabled: this.props.disabled
      }, optional));
    }
  }]);

  return _default;
}(Component);

_default.displayName = 'Checkbox';
export { _default as default };
export var CheckboxGroup =
/*#__PURE__*/
function (_Component2) {
  _inherits(CheckboxGroup, _Component2);

  function CheckboxGroup(props) {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxGroup).call(this, props));

    _this._prepareBoxes = function (children) {
      var maxDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      if (depth > maxDepth) {
        return children;
      }

      var checkboxGroup = {
        name: _this.props.name,
        checkedValues: _this.state.value,
        onChange: _this._onCheckboxChange
      };
      return React.Children.map(children, function (child) {
        if (!(child && child.$$typeof)) {
          return child;
        } else if (child.type === Checkbox) {
          return React.cloneElement(child, {
            checkboxGroup: checkboxGroup
          });
        } else {
          return React.cloneElement(child, {}, child.props.children ? React.Children.map(child.props.children, function (c) {
            return _this._prepareBoxes(c, maxDepth, depth + 1);
          }) : null);
        }
      });
    };

    _this._isControlledComponent = _this._isControlledComponent.bind(_assertThisInitialized(_this));
    _this._onCheckboxChange = _this._onCheckboxChange.bind(_assertThisInitialized(_this));
    _this.getValue = _this.getValue.bind(_assertThisInitialized(_this));
    _this.state = {
      value: _this.props.value || _this.props.defaultValue || []
    };
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.value) {
        this.setState({
          value: newProps.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          Component = _this$props2.Component,
          name = _this$props2.name,
          value = _this$props2.value,
          onChange = _this$props2.onChange,
          children = _this$props2.children,
          _this$props2$checkbox = _this$props2.checkboxDepth,
          checkboxDepth = _this$props2$checkbox === void 0 ? 1 : _this$props2$checkbox,
          rest = _objectWithoutProperties(_this$props2, ["Component", "name", "value", "onChange", "children", "checkboxDepth"]);

      return React.createElement(Component, rest, this._prepareBoxes(children, checkboxDepth));
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: "_isControlledComponent",
    value: function _isControlledComponent() {
      return Boolean(this.props.value);
    }
  }, {
    key: "_onCheckboxChange",
    value: function _onCheckboxChange(checkboxValue, event) {
      var newValue;

      if (event.target.checked) {
        newValue = this.state.value.concat(checkboxValue);
      } else {
        newValue = this.state.value.filter(function (v) {
          return v !== checkboxValue;
        });
      }

      if (this._isControlledComponent()) {
        this.setState({
          value: this.props.value
        });
      } else {
        this.setState({
          value: newValue
        });
      }

      if (typeof this.props.onChange === 'function') {
        this.props.onChange(newValue, event, this.props.name);
      }
    }
  }]);

  return CheckboxGroup;
}(Component);
CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.defaultProps = {
  Component: "div"
};