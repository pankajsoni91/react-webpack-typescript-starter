import * as React from 'react';
import { Wrapper } from 'client/components/Wrapper';
// #TODO - props example need to be set
class Dashboard extends React.Component{
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return <Wrapper>Dashboard page</Wrapper>;  
  }
}

export default Dashboard;
