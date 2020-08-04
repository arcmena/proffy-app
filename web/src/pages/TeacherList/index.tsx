import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

import { Header, TeacherCard } from '../../components';

import { teacherVariants, pageTransition } from '../../assets/animations';

import './styles.css'

const TeacherList: FunctionComponent = () => {
    return (
        <motion.div id="page-teacher-list" className="container" initial="out" animate="in" exit="out" variants={teacherVariants} transition={pageTransition}>
            <Header title="Estes são os proffys disponíveis.">
                <form id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" name="subject" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" name="week_day" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" name="time" id="time" />
                    </div>
                </form>
            </Header>
            <main>
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
            </main>
        </motion.div>
    );
}

export default TeacherList;