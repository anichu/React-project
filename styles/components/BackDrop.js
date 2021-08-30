import React from 'react';
import styled from 'styled-components';

const BackDrop = ({ setShowCart }) => {
  return <StyledBackdrop onClick={() => setShowCart(false)}></StyledBackdrop>;
};

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 3;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

export default BackDrop;
