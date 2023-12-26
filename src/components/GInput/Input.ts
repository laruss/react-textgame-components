import { styled } from '@mui/material/styles';

const Input = styled('input')<{ ro: boolean }>`
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: inherit;
    background-color: ${(props) => (props.ro ? 'inherit' : '#fff')};
    color: inherit;
    cursor: ${(props) => (props.ro ? 'not-allowed' : 'inherit')};

    ::placeholder {
        color: rgba(0, 0, 0, 0.4);
    }
`;

export default Input;
