import { Interpolation } from 'styled-components';
import React, { MouseEventHandler } from 'react';

export type ButtonStyleProps = {
    background: {
        idle: string;
        active: string;
    };
    shadow: {
        hover: string;
        focus: string;
    };
    color: string;
};

export type ButtonVariants = 'dark' | 'light' | 'success' | 'warning' | 'danger' | 'info';

export type ButtonsObject = {
    [p in ButtonVariants]: Interpolation<any>;
};

export type GButtonProps = {
    children: string | number | boolean;
    id?: string;
    isDisabled?: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
    variant?: ButtonVariants;
    style?: React.CSSProperties;

    [p: string]: any;
};
