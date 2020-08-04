import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/icons/back.svg';

import { HeaderProps } from '../../types/ComponentTypes';

import './Header.css';

const Header: FunctionComponent<HeaderProps> = ({ title, children }) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Logo" />
            </div>

            <div className="header-content">
                <strong>{title}</strong>
                {children}
            </div>
        </header>
    );
}

export default Header;