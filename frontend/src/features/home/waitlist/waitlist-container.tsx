import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import Waitlist from './waitlist';
import { postWaitlist, selectHome } from '../home-slice';

const WaitlistContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.title = 'Home - Scholar';
  }, []);

  const { postWaitlistStatus } = useAppSelector(selectHome);

  const handleJoin = (email: string) => {
    dispatch(postWaitlist({ email }));
  };

  return (
    <Waitlist onJoin={handleJoin} joinStatus={postWaitlistStatus} />
  );
};

export default WaitlistContainer;
