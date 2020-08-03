import React, { FunctionComponent } from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/icons/study.svg';
import giveClasses from '../../assets/icons/give-classes.svg';
import purpleHeart from '../../assets/icons/purple-heart.svg';

import './styles.css'

const Landing: FunctionComponent = () => {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Logo Image" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg} alt="Landing Image" className="illustration" />
                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Icone Estudar" />
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={giveClasses} alt="Dar aulas" />
                        Dar Aulas
                    </a>
                </div>
                <span className="total-connections">
                    Total de 1342435 conexões já realizadas <img src={purpleHeart} alt="Coração roxo" />
                </span>
            </div>
        </div>
    );
}

export default Landing;