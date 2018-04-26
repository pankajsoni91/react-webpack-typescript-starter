import * as React from 'react';
import { Wrapper } from 'client/components/Wrapper';
import { Button } from 'client/components/Button';

interface IDashboardState {
  counter: number;
}

interface IDashboardProps {
  initCounter: number;
}

class Dashboard extends React.Component<IDashboardProps,IDashboardState>{
  constructor(props:IDashboardProps) {
    super(props);
    this.state = {
      counter : props.initCounter || 0,
    };  
  }
  
  incrementCounter = () => {
    this.setState((prevState:IDashboardState) => {
      return {
        counter : prevState.counter + 1,
      };
    });
  }

  render() {
    const { counter } = this.state; 
    return (
      <Wrapper>
        <Button 
          onClick={this.incrementCounter}
        >
          +1
        </Button>
        <span>{counter}</span>
      </Wrapper>
    );  
  }
}

export default Dashboard;
