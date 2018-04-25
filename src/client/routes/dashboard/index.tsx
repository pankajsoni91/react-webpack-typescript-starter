import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { IAppState } from '../../redux/reducers';
import { actions } from './reducer';

class Dashboard extends React.Component<any,any>{
  
  componentWillMount(){
    this.props.actions.fetch();
  }

  render(){
    return <div>Dashboard page</div>;
  }
}

const mapStateToProps = (data: IAppState) => ({ data });

// TODO - need to check whether any need to be remove or not
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);