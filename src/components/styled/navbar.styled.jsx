import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 14%;
    height: 10vh;
`;

export const Logo = styled.div`
    font-size: 2rem;
    font-weight: bold;
`;

export const Nav = styled.nav`

    ul {
        display: flex;
        gap: 30px;
        list-style: none;
        transition: all 0.3s;
    }

    li {
        margin-top: 3px;

        &::after {
            content: '';
            display: block;
            width: 0;
            height: 3px;
            background: red;
            border-radius: 3px;
            transition: width 0.3s ease;
        }

        &:hover::after {
            width: 100%;
        }
    }

    a {
        font-size: 1.3rem;
        color: #000000;
        text-decoration: none;
    }
`;