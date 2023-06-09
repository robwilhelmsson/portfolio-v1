import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import { Link } from 'react-scroll'
import { Link as GatsbyLink } from 'gatsby';

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--green);
  height: 100vh;
  position: absolute;
  padding-top: 110px;
  top: 0;
  right: 0;
  width: 65%;
  z-index: 10;
  transition: all 0.3s ease 0s;
  box-shadow: ${({ menuOpen }) => menuOpen ? '-20px 0px 80px 50px rgba(0,0,0,0.4)' : ''};
  transform: ${({ menuOpen }) => menuOpen ? 'translateX(0)' : 'translateX(100%)'};
  a {
    cursor: pointer;
    padding: 35px 0;
    color: var(--light-grey);
    font-family: var(--font-mono);
    font-size: var(--fs-sm);
    :hover {
      color: var(--orange);
      letter-spacing: 0.5px;
    }
    ::before, ::after {
      content: "—————";
      font-weight: 100;
      letter-spacing: -0.1px;
      color: var(--orange);
      margin: 0 10px;
    }

  }
  @media (max-width: 480px) {
    width: 100%;
  }
`

const Menu = ({ menuOpen, setMenuOpen }) => {

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <StyledMenu menuOpen={menuOpen}>
      <Link to='about' spy={true} smooth={true} offset={-50} duration={700} onClick={handleLinkClick}>About</Link>
      <Link to='skills' spy={true} smooth={true} offset={-50} duration={700} onClick={handleLinkClick}>Skills</Link>
      <Link to='projects' spy={true} smooth={true} offset={-50} duration={700} onClick={handleLinkClick}>Projects</Link>
      <Link to='contact' spy={true} smooth={true} offset={-50} duration={700} onClick={handleLinkClick}>Contact</Link>
      <GatsbyLink to='/cv' spy={true} smooth={true} offset={-50} duration={700} style={{ textDecoration: 'none' }} onClick={handleLinkClick}>CV</GatsbyLink>
    </StyledMenu>
  )
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired
}

export default Menu