import * as React from 'react';
import { Wrapper } from 'components/Wrapper';
import { IReducerState as IDashboardReducerState } from 'routes/Dashboard/reducer';

export interface IProps extends IDashboardReducerState {
  data: {
    value: string;
  };
}

const DashboardInfo = (props: IProps) => {
  if (!props.data) {
    return null;
  }

  return <Wrapper>Response Value : {props.data.value}</Wrapper>;
};

export default DashboardInfo;
