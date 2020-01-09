import React from 'react';

const Layout: React.FunctionComponent<{}> = (props) => {
  const { children } = props;
  return (
    <div><h1>Layout</h1><div className="children">{children}</div></div>
  );
};

export default Layout;