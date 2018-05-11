import * as React from 'react';
import { Button } from 'components/Button';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { actions } from './reducer';
import WithLoader from 'components/WithLoader';
import DashboardInfo from './components/DashboardInfo';
const DashboardInfoWrapper = WithLoader(DashboardInfo);

interface IProps {
  dashboard: any;
  actions: any;
}

class Dashboard extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetch();
  }

  render() {
    const { loading, data } = this.props.dashboard;
    return <DashboardInfoWrapper loading={loading} data={data} />;
  }
}

const mapStateToProps = ({ dashboard }) => ({ dashboard });

// TODO - need to check whether any need to be remove or not
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: {
    fetch: bindActionCreators(actions.fetch, dispatch),
    success: bindActionCreators(actions.success, dispatch),
    error: bindActionCreators(actions.error, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
