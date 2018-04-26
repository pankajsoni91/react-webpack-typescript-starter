import * as React from 'react';
import { Button } from 'components/Button';
import { Wrapper } from 'components/Wrapper';

const Home = () => {
  return (
    <Wrapper>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Wrapper>
  );
};

export default Home;
