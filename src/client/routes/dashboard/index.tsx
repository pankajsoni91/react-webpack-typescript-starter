import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { IAppState } from 'client/redux/reducers';
import { actions } from './reducer';

// #TODO - props example need to be set
class Dashboard extends React.Component{
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return <div>Dashboard page</div>;  
  }
}

const mapStateToProps = ({ dashboard }) => ({ dashboard });

// TODO - need to check whether any need to be remove or not
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: {
    fetch: bindActionCreators(actions.fetch, dispatch),
    success: bindActionCreators(actions.success, dispatch),
    error : bindActionCreators(actions.error, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
