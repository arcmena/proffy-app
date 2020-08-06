import React, { FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';

import { Header, Input, TextArea, Select, Subjects, Days } from '../../components';

import warningIcon from '../../assets/icons/warning.svg';

import { mainVariants, pageTransition } from '../../assets/animations';

import './styles.css';

const TeacherForm: FunctionComponent = () => {
    const [schedule, setSchedule] = useState([{ week_day: 0, from: '', to: '' }]);

    const handleAddSchedule = () => {
        setSchedule([...schedule, { week_day: 0, from: '', to: '' }]);
    };

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
                    <Select name="subject" label="Matéria" options={Subjects} />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis{' '}
                        <button type="button" onClick={handleAddSchedule}>
                            {' '}
                            + Novo horário
                        </button>
                    </legend>
                    {schedule.map((item) => (
                        <div className="schedule-item" key={item.week_day}>
                            <Select name="week_day" label="Dia da semana" options={Days} />
                            <Input name="from" label="Das" type="time" />
                            <Input name="to" label="Até" type="time" />
                        </div>
                    ))}
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
