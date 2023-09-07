import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, WrapperTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <WrapperTitle>{title}</WrapperTitle>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
