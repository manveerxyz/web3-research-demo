import { ReduxStatus } from 'common/models/redux-status';
import React, { ReactElement } from 'react';
import ErrorMessage from '../error-message/error-message';

export type PropTypes = {
  children: ReactElement
  errorMsg: string
  status: ReduxStatus
}

const HandleStatus = (
  { children, errorMsg, status }: PropTypes,
): ReactElement => {
  if (status === 'idle' || status === 'pending') {
    return <div />;
  }
  if (status === 'failed') {
    return <ErrorMessage>{errorMsg}</ErrorMessage>;
  }

  return children;
};

export default HandleStatus;
