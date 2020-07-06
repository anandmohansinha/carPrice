import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to="/">Home</Link>
            <Link to="/forms">Forms</Link>
            <Link to="/cars">Cars</Link>
        </header>
    )
}

export default Header;