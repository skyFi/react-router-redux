'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = {
  componentDidMount() {
    this.setState({
      _lastPathname: location.pathname
    });

    typeof this.fetchData === 'function' && this.fetchData({ dispatch: this.props.dispatch, match: this.props.match });
  },

  componentDidUpdate() {
    if (this.state && this.state._lastPathname === location.pathname) {
      return;
    }

    this.setState({
      _lastPathname: location.pathname
    });

    typeof this.fetchData === 'function' && this.fetchData({ dispatch: this.props.dispatch, match: this.props.match });
  }
};
