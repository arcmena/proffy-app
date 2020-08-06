import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

import { Header, Input, TextArea } from '../../components';

import warningIcon from '../../assets/icons/warning.svg';

import { mainVariants, pageTransition } from '../../assets/animations';

import './styles.css';

const TeacherForm: FunctionComponent = () => {
    return (
        <div id="page-teacher-form" className="container">
            <Header
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <motion.main initial="out" animate="in" exit="out" variants={mainVariants} transition={pageTransition}>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <TextArea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Input name="subject" label="Matéria" />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </motion.main>
        </div>
    );
};

export default TeacherForm;
