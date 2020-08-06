import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

export interface HeaderProps {
    title: string;
    description?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}
