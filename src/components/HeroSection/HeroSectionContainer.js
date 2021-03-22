import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLogged } from '../../selectors/authSelectors';
import HeroSection from './HeroSection';

const HeroSectionContainer = () => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <HeroSection isLogged={isLogged} />
  )
}

export default HeroSectionContainer;
