import React, { FunctionComponent } from 'react';

import { SelectProps } from '../../types/ComponentTypes';

import './Select.css';

const Select: FunctionComponent<SelectProps> = ({ label, name, options, ...rest }: SelectProps) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>
                {label}
                <select defaultValue="" name={name} id={name} {...rest}>
                    <option value="" disabled hidden>
                        Selecione um...
                    </option>
                    {options.map((option, index) => (
                        <option value={option.value} label={option.label} key={index}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default Select;
