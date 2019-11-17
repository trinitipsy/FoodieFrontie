import React from 'react';
import styled from 'styled-components';

const LogIn = () => (
  <StyledWrrapper class="ui form">
    <div class="field">
      <input type="text" placeholder="Name" />
    </div>
    <div class="field">
      <input type="text" placeholder="Password" />
    </div>
    <button class="ui secondary button">Log in</button>
  </StyledWrrapper>

);

const StyledWrrapper = styled.div`
  background-color: #0d0d0d;
  margin: 20px;
  label {
    color: white;
  }
  
  
  `;

export default LogIn;
