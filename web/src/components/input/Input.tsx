import React, { FunctionComponent } from 'react';

import { InputProps } from '../../types/ComponentTypes';

import './Input.css';

const Input: FunctionComponent<InputProps> = ({ label, name, ...rest }: InputProps) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>
                {label}
                <input type="text" name={name} id={name} {...rest} />
            </label>
        </div>
    );
};

export default Input;
