import React from 'react';
import styled from 'styled-components';
import { contain } from '../../style/utils';

const Wrapper = styled.div`
  ${ contain('960px', '0', 'auto', '30px') }
`;

const About = () => (
  <Wrapper>
    <h1>About Page</h1>
    <p>Did you get here via Redux?</p>
  </Wrapper>
)

export default About
