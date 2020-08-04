import React, { FunctionComponent } from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './TeacherCard.css';

const TeacherCard: FunctionComponent = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://imgur.com/Gj0Hiz1.jpg" alt="Proffy" />
                <div>
                    <strong>Jane Doe</strong>
                    <span>Literatura</span>
                </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aspernatur adipisci officiis sed minima quibusdam non veniam maiores animi reiciendis sequi ad rem vel similique eum, nostrum tempora? Officia, dolore eligendi. Consectetur, mollitia? Odit, nobis.</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 25,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherCard;