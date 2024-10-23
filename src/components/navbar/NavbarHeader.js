import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';

const NavbarInfo = styled.div`
    padding: .6rem 0;
    background-color: ${props => props.bgColor || props.theme.color.sec1};

    ${down('sm')} {
        display: none;
    }

    p {
        font-weight: 300;
        text-align: center;
        color: ${props => props.fontColor || props.theme.color.font};

        span {
            font-weight: 700;
            color: ${props => props.spanColor || props.theme.color.base1};
        }
    }
`;

const NavbarHeader = (props) => {
    return (
        <NavbarInfo bgColor={props.bgColor}>
            <p>Czynne przez cały rok.<span> Zapraszamy!</span></p>
        </NavbarInfo>
    )
}
export default NavbarHeader