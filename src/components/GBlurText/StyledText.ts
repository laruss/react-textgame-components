import { styled } from '@mui/material/styles';

const StyledText = styled('p', {
    shouldForwardProp: (prop) => prop !== 'isShown' && prop !== 'showOnClick',
})<{ isShown: boolean; showOnClick: boolean }>(({ theme, isShown, showOnClick }) => ({
    filter: isShown ? 'none' : 'blur(5px)',
    transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.short,
    }),
    cursor: showOnClick ? (isShown ? 'inherit' : 'pointer') : 'default',
}));

export default StyledText;
