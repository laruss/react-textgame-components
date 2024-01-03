import { styled } from '@mui/material/styles';
import { ButtonVariants } from './types';
import Buttons from './Buttons';

interface ButtonContainerProps {
    variant: ButtonVariants;
    isDisabled: boolean;
}

const ButtonContainer = styled('div')<ButtonContainerProps>(
    ({ variant, isDisabled }) => ({
        alignItems: 'center',
        backgroundColor: '#25292e',
        borderRadius: 8,
        borderWidth: 0,
        boxSizing: 'border-box',
        textTransform: 'uppercase',
        color: '#fff',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        flexDirection: 'column',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        height: 52,
        justifyContent: 'center',
        lineHeight: 1,
        margin: 0,
        outline: 'none',
        overflow: 'hidden',
        padding: '0 32px',
        textAlign: 'center',
        textDecoration: 'none',
        transform: 'translate3d(0, 0, 0)',
        transition: 'all 150ms',
        verticalAlign: 'baseline',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        '&:hover': {
            opacity: isDisabled ? 1 : 0.85,
        },
        '&:active': {
            outline: isDisabled ? 'none' : '0',
        },
        '@media (max-width: 420px)': {
            height: 48,
        },
        ...Buttons[variant],
        ...(isDisabled && {
            '&:hover, &:active, &:focus': {
                boxShadow: 'none',
                backgroundColor: 'inherit',
            },
        }),
    }),
);

export default ButtonContainer;
