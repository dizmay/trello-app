import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../selectors/authSelectors';
import HeroSection from './HeroSection';

const HeroSectionContainer = () => {
  const isLogged = useSelector(getIsLogged)
  return (
    <HeroSection isLogged={isLogged} />
  )
}

export default HeroSectionContainer;
