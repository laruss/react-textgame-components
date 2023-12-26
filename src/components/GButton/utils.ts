import { css } from '@mui/material';
import { ButtonStyleProps } from './types';

export const getButtonStyle = ({ background, shadow, color }: ButtonStyleProps) => css`
    background-color: ${background.idle};
    color: ${color};

    &:hover {
        box-shadow: ${shadow.hover} 0 2px 8px;
    }

    &:active {
        background-color: ${background.active};
    }

    &:focus {
        box-shadow: ${shadow.focus} 0 0 0 3px;
    }
`;
