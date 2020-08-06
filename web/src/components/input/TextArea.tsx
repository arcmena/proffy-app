import React, { FunctionComponent } from 'react';

import { TextAreaProps } from '../../types/ComponentTypes';

import './TextArea.css';

const Textarea: FunctionComponent<TextAreaProps> = ({ label, name, ...rest }: TextAreaProps) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>
                {label}
                <textarea name={name} id={name} {...rest} />
            </label>
        </div>
    );
};

export default Textarea;
