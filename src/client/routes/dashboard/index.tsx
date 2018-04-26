import * as React from 'react';
import { Wrapper } from 'client/components/Wrapper';
import { Button } from 'client/components/Button';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { actions } from './reducer';
// interface IState {
// }

interface IProps {
  dashboard: any;
  actions: any;
}

class Dashboard extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetch()
    // console.log(this.props.actions.fetch());
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <Wrapper>
        I am Dashboard
      </Wrapper>
    );
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
