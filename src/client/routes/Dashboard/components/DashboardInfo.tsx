import * as React from 'react';
import { Wrapper } from 'components/Wrapper';

interface IProps {
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
