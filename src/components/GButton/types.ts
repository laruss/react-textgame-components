import { SxProps } from '@mui/material';
import { MouseEventHandler, ReactNode } from 'react';

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
    [p in ButtonVariants]: object;
};

export type GButtonProps = {
    className?: string;
    children: ReactNode;
    id?: string;
    isDisabled?: boolean;
    onClick: MouseEventHandler<HTMLDivElement>;
    variant?: ButtonVariants;
    sx?: SxProps;

    [p: string]: any;
};
