import React from 'react'
import styled from 'styled-components'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

interface Props{
    isNavOpen : boolean;
    toggleMenu : ()=> void;
}

const NavButton = ( {isNavOpen, toggleMenu} : Props) => {
  return (
    <Button onClick={ toggleMenu }>
        {
            isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />
        }
    </Button>
  )
}

export default NavButton

const Button = styled.button`
    width: 25px;
    heigth:20px;
    font-size: 30px;
    color:#000;
    
    @media(min-width: 768px){
        display: none;
    }
`;