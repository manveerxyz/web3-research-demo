import Routerlink from 'common/components/text/routerlink/routerlink';
import React from 'react';

export type PropTypes = {
  children?: string
}

const BackButton = ({ children }: PropTypes) => (
  <Routerlink to={-1} underlined={false} style={{ display: 'block', paddingBottom: '16px' }}>
    &lt; {children || 'Back'}
  </Routerlink>
);

export default BackButton;
