import { SxProps } from '@mui/material';
import React, { HTMLInputTypeAttribute } from 'react';
import { ButtonVariants } from '../GButton/types';

export interface BaseProps {
    allowOnlyNextSymbols?: string;
    notify?: (message: string) => void;
    onlyAlphabeticSymbols?: boolean;
    onlyNumbers?: boolean;
    restrictWhiteSpaces?: boolean;
}

export interface UseHandleChangeProps extends BaseProps {
    setValue: (value: string) => void;
}

export interface GInputProps extends BaseProps {
    buttonCaption?: string;
    buttonVariant?: ButtonVariants;
    callback: (value: any) => void;
    confirmOnEnter?: boolean;
    disableAfterConfirm?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    sx?: SxProps;
    styleButton?: React.CSSProperties;
    type?: HTMLInputTypeAttribute;
    initValue?: string;
}
