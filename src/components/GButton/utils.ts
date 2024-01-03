import { ButtonStyleProps } from './types';

export const getButtonStyle = ({ background, shadow, color }: ButtonStyleProps) => ({
    backgroundColor: background.idle,
    color,
    cursor: `pointer`,

    '&:hover': {
        boxShadow: `${shadow.hover} 0 2px 8px`,
    },

    '&:active': {
        backgroundColor: background.active,
    },

    '&:focus': {
        boxShadow: `${shadow.focus} 0 0 0 3px`,
    },
});
