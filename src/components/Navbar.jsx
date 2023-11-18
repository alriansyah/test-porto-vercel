import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Logo, Nav } from './styled/navbar.styled';

const Navbar = () => {
    return (
        <Header>
            <Logo>Al Riansyah</Logo>
            <Nav>
                <ul>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Experience</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </Nav>
        </Header>
    )
}

export default Navbar;