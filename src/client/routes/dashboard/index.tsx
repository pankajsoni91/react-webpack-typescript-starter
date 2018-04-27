import * as React from 'react';
import { Button } from 'components/Button';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Wrapper } from 'components/Wrapper';

import { actions, IState } from './reducer';

interface IProps {
  dashboard: IState;
  actions: any;
}

class Dashboard extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.reset();
  }

  updateCounter = () => {
    this.props.actions.update(this.props.dashboard.counter + 1);
  };

  resetCounter = () => {
    this.props.actions.reset();
  };

  render() {
    const { counter } = this.props.dashboard;
    return (
      <Wrapper>
        <div>{counter}</div>
        <Button onClick={this.updateCounter}>Update Counter</Button>
        <Button onClick={this.resetCounter} primary>
          Reset Counter
        </Button>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ dashboard }) => ({ dashboard });

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: {
    update: bindActionCreators(actions.update, dispatch),
    reset: bindActionCreators(actions.reset, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
