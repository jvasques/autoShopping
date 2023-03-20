import styled from 'styled-components';

export const ProductsArea = styled.div`
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: center;
    align-itens: center;
    margin-bottom: 70px;
    margin-top: 30px;
    padding: 20px;

    div {
        height: 320px;
        width: 230px;
        border: 1px solid rgb(194,193,193);
        border-radius: 6px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        &:hover {
            background-color: rgb(222,222,222);
            transform: scale(1.1);
            border: none;
        }
    }

    button {
        font-size: 1.5rem;
        background: transparent;
        border: none;
        color: crimson;
        cursor: pointer;

        &:hover {
            transform: scale(1.3);
        }
    }

    img {
        width: 150px;
    }
`