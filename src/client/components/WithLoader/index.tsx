import * as React from 'react';

export default Component => props => {
  const { loading, ...rest } = props;
  return loading ? <div>Loading...</div> : <Component {...rest} />;
};
