import React, {Component} from 'react';
import Documentation from '@/components/documentation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class Docs extends Component {
  state = {
  };
  componentWillUnmount() {
    const {initalLogo} = this.props;
    initalLogo();
  }
  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/docs/docs1');
  }
  render() {
    return (
      <div>
        <Documentation />
        <div onClick={this.handleBrowserChange}>go3</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Docs;
