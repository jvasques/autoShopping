import React from 'react';
import { Link, useHistory  } from 'react-router-dom';
import styled from 'styled-components';

const HeaderArea = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding: 20px;
    margin-bottom: 70px;
    border-bottom: 3px solid red;

    @media(max-width: 520px) {
        flex-direction: column;
    }

    @media(max-width: 300px) {
        .links {
            font-size: 1.2rem;
        }
    }

    div {
        display: flex;
        gap: 50px;
    }

    h1 {
        color: white;
    }

    span{
        color: crimson;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1.6rem;

        &:hover {
            color: crimson;
        }
    }
    
    .active {
        color: crimson;
        transform: scale(1.1);
    }
`

export const Header = () => {
    const history = useHistory();
    const vitrineActive = history.location.pathname === "/";
    const cartActive = history.location.pathname === "/cart";

    return (
        <HeaderArea>
            <h1><span>AUTO</span> SHOPPING</h1>
            <div className='links'>
                <Link to="/" className={vitrineActive ? "active" : ""}>VITRINE</Link>
                <Link to="/cart" className={cartActive ? "active" : ""}>FAVORITOS</Link>
            </div>
        </HeaderArea>
    )
}