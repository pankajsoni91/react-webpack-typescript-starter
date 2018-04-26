import * as React from 'react';
import { Button } from 'client/components/Button';
import { Wrapper } from 'client/components/Wrapper';
const Home = () => {
  return (
    <Wrapper>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Wrapper>
  );
};

export default Home;
