import * as React from 'react';
import { bindActionCreators } from 'redux';

// #TODO - props example need to be set
class Dashboard extends React.Component{
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return <div>Dashboard page</div>;  
  }
}

export default Dashboard;
