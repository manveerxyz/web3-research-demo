import React from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from './top-bar';

export type PropTypes = {
  showAccountAttrs?: boolean
}

const TopbarContainer = ({ showAccountAttrs = true }: PropTypes) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <Topbar
      onHome={handleHome}
    />
  );
};

export default TopbarContainer;
