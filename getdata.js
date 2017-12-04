'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = {
  componentDidMount() {
    this.setState({
      _lastPathname: location.pathname
    });

    typeof this.fetchData === 'function' && this.fetchData(this.props.dispatch, this.props.match);
  },

  componentDidUpdate() {
    if (this.state && this.state._lastPathname === location.pathname) {
      return;
    }

    this.setState({
      _lastPathname: location.pathname
    });

    typeof this.fetchData === 'function' && this.fetchData(this.props.dispatch, this.props.match);
  }
};
