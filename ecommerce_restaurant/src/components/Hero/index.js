import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../sidebar/Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroBtn,
  HeroH1,
  HeroItem,
  HeroP,
} from './HeroElements';
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItem>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItem>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
