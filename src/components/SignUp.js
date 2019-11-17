import React from 'react';
import styled from 'styled-components';

const SignUp = () => (
  <StyledWrrapper class="ui form">
    <div class="field">
      <input type="text" placeholder="Name" />
    </div>
    <div class="field">
      <input type="text" placeholder="Surname" />
    </div>
    <div class="field">
      <input type="text" placeholder="Address" />
    </div>
    <div class="field">
      <input type="text" placeholder="Email" />
    </div>
    <div class="field">
      <input type="text" placeholder="Password" />
    </div>
    <button class="ui secondary button">Sign Up</button>
  </StyledWrrapper>

);

const StyledWrrapper = styled.div`
  background-color: #0d0d0d;
  margin: 20px;
  label {
    color: white;
  }
  `;

export default SignUp;
