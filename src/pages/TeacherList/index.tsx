import React, { FunctionComponent } from 'react';

import { Header } from '../../components';

import './styles.css'

const TeacherList: FunctionComponent = () => {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Estes são os proffys disponívels." />
        </div>
    );
}

export default TeacherList;