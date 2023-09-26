import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LinkInterface from '../modules/Linkinterface';

const links: LinkInterface[] = [
   {
      text: "About me",
      href: "/about"
   },
   {
      text: "Locations",
      href: "/locations"
   },
   {
      text: "Contact",
      href: "/contact"
   }
];

type Props = {
    closeMenu: ()=>void;
}

const Navlinks = ({closeMenu}: Props) => {
  return (
    <StyleUl>
       {
          links.map((link: LinkInterface) => (
            <li key={link.text} onClick={closeMenu}>
                <NavLink key={link.text} to={link.href}>
                    {link.text}
                </NavLink>
            </li>
          ))
       }
    </StyleUl>
  )
}

export default Navlinks;

const StyleUl = styled.ul`
    color: ${(props) => props.theme.colors.primary.light};
    display:flex;
    flex-direction: column;
    font-size: 1.5rem;
    gap: 2rem;
    justify-content: space-between;
    letter-spacing: 2px;
    list-style: none;
    margin: 0;
    padding: 3rem 1.5rem;
    text-align:left;
    text-transform: uppercase;

    @media (min-width: 768px) {
        color: ${props => props.theme.colors.primary.dark};
        flex-direction: row;
        font-size: 0.875rem;
        padding:0;
        gap: 2.625rem;
    }
`;