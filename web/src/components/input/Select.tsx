import React, { FunctionComponent } from 'react';

import { SelectProps } from '../../types/ComponentTypes';

import './Select.css';

const Select: FunctionComponent<SelectProps> = ({ label, name, ...rest }: SelectProps) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>
                {label}
                <select name={name} id={name} {...rest} />
            </label>
        </div>
    );
};

export default Select;
