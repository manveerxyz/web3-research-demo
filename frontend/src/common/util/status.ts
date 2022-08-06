import { ReduxStatus } from 'common/models/redux-status';

/**
 * Consolidate two statuses into one, if you have two potential requests
 * you could be listening to.
 * @param a must go before b (if sequential = true)
 * @returns status
 */
export const mergeStatuses = (
  a: ReduxStatus, b: ReduxStatus, sequential: boolean = false,
): ReduxStatus => {
  if (a === 'failed' || b === 'failed') {
    return 'failed';
  }
  if (a === 'pending' || b === 'pending') {
    return 'pending';
  }
  if (a === 'idle' && b === 'idle') {
    return 'idle';
  }
  if (sequential) {
    if (a === 'fulfilled' && b === 'idle') {
      return 'pending';
    }
  }
  return 'fulfilled';
};
