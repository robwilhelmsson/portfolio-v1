
import React from 'react'
import styled from 'styled-components'

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  z-index: 10;
`


const StyledEmailWrapper = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* width: 60px; */
  /* margin: 0 15px; */

  a {
    margin: 20px auto 0 auto;
    padding: 10px;
    font-family: sans-serif;
    font-size: 15px;
    /* line-height: var(--fz-lg); */
    letter-spacing: 0.1rem;
    writing-mode: vertical-rl;

    /* &:hover,
    &:focus {
      transform: translateY(-3px);
    } */
  }

  p {
    writing-mode: vertical-rl;
    letter-spacing: -0.4rem;
  }
`;



const EmailSide = () => {
  return (
    <StyledSideElement>
      <StyledEmailWrapper>
        <a href='{`mailto:rob.wilhelmsson@gmail.com`}'>rob.wilhelmsson@gmail.com</a><p>————————</p>
      </StyledEmailWrapper>
    </StyledSideElement>

  )
}

export default EmailSide