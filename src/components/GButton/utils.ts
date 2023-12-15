import { ButtonStyleProps } from './types';
import { css } from 'styled-components';

export const getButtonStyle = (props: ButtonStyleProps) => css`
    background-color: ${props.background.idle};
    color: ${props.color};

    &:hover {
        box-shadow: ${props.shadow.hover} 0 2px 8px;
    }
    &:active {
        background-color: ${props.background.active};
    }

    &:focus {
        box-shadow: ${props.shadow.focus} 0 0 0 3px;
    }
`;
