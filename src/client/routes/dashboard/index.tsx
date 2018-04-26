import * as React from 'react';
import { Wrapper } from 'client/components/Wrapper';
import { Button } from 'client/components/Button';

interface IState {
  counter: number;
}

interface IProps {
  counter: number;
}

class Dashboard extends React.Component<IProps,IState>{
  constructor(props:IProps) {
    super(props);
    this.state = {
      counter : props.counter || 0,
    };  
  }
  
  incrementCounter = () => {
    this.setState((prevState:IState) => {
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
