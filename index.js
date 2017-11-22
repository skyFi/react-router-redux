import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

export default  (...connectParams) => {
  return (component) => {
    return withRouter(connect(connectParams)(component));
  }
};
