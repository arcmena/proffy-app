import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

import { Header, TeacherCard, Input } from '../../components';

import { mainVariants, pageTransition } from '../../assets/animations';

import './styles.css';

const TeacherList: FunctionComponent = () => {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week_day" label="Dia da semana" />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </Header>
            <motion.main initial="out" animate="in" exit="out" variants={mainVariants} transition={pageTransition}>
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
            </motion.main>
        </div>
    );
};

export default TeacherList;
