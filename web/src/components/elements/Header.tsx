import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/icons/back.svg';

import { headerBackgroundVariants, pageTransition } from '../../assets/animations';

import { HeaderProps } from '../../types/ComponentTypes';

import './Header.css';

const Header: FunctionComponent<HeaderProps> = ({ title, children }) => {
    return (
        <motion.header className="page-header" initial="out" animate="in" exit="out" variants={headerBackgroundVariants} transition={pageTransition}>
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
        </motion.header>
    );
}

export default Header;