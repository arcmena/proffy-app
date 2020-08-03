import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';

import backIcon from '../../assets/icons/back.svg';

import './styles.css'

const TeacherList: FunctionComponent = () => {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar" />
                    </Link>
                    <img src={logoImg} alt="Logo" />
                </div>

                <div className="header-content">
                    <strong>Estes são os proffys disponívels.</strong>
                </div>
            </header>
        </div>
    );
}

export default TeacherList;