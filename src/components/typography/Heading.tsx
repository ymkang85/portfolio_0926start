import React from 'react'
import styled from 'styled-components'
import HeadingInterface from '../../modules/HeadingInterface'

const Heading: React.FC<HeadingInterface> = ({
    children,
    variant,
    color
}) => {
    switch (variant) {
        case "h1":
            return (
                <StyledH1 variant={variant} color={color}>
                    {children}
                </StyledH1>
            )
            break;
        case "h2":
            <StyledH2 variant={variant} color={color}>
                {children}
            </StyledH2>
            break;
        default:
            <StyledH3 variant={variant} color={color}>
                {children}
            </StyledH3>
    }
}

const StyledH1 = styled.h1<HeadingInterface>`
    color:${(props) => props.theme.colors.primary.light};
    font-size: 2rem;
    font-weight: 400;
    line-height: 36px;

    @media(min-width: 768px) {
        font-size: 3rem;
        line-height: 3rem;
    }
`;
const StyledH2 = styled.h1<HeadingInterface>`
    color:${(props) => props.color === 'dark' ? props.theme.colors.primary.dark : props.theme.colors.primary.light};
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 5px;
    line-height: 26px;
    text-transform: uppercase;
`;
const StyledH3 = styled.h1<HeadingInterface>`
    color:${(props) => props.theme.colors.primary.dark};
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 5px;
    line-height: 26px;
    text-transform: uppercase;
`;

export default Heading