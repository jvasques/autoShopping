import React from 'react';
import styled from 'styled-components';
import { BsFillHeartFill } from 'react-icons/bs';

const FooterArea = styled.footer`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    margin-bottom: 0px;
    border-top: 3px solid red;

    div {
        display: flex;
    }

    p {
        color: white;
        font-size: 1.2rem;
    }

    span {
        color: crimson;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;

        &:hover {
            color: crimson;
        }
    }
`

export const Footer = () => {
    return (
        <FooterArea>
            <div>
                <p>Desenvolvido com <span><BsFillHeartFill /></span> por <a href="http://vasques.dev" target="_blank">João Paulo Vasques.</a></p>
            </div>
        </FooterArea>
    )
}