import React, { FunctionComponent } from 'react';

import { Header } from '../../components';

import './styles.css'

const TeacherForm: FunctionComponent = () => {
    return (
        <div id="page-teacher-form" className="container">
            <Header title="Que incrível que você quer dar aulas." />
        </div>
    );
}

export default TeacherForm;