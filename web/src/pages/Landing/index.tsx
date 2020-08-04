import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/icons/study.svg';
import giveClasses from '../../assets/icons/give-classes.svg';
import purpleHeart from '../../assets/icons/purple-heart.svg';

import { landingVariants } from '../../assets/animations';

import './styles.css'

const Landing: FunctionComponent = () => {
    return (
        <div id="page-landing">
            <motion.div id="page-landing-content" className="container" initial="out" animate="in" exit="out" variants={landingVariants}>
                <div className="logo-container">
                    <img src={logoImg} alt="Logo" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg} alt="Landing" className="illustration" />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Icone Estudar" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClasses} alt="Dar aulas" />
                        Dar Aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 130 conexões já realizadas <img src={purpleHeart} alt="Coração roxo" />
                </span>
            </motion.div>
        </div>
    );
}

export default Landing;