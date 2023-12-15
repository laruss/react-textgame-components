import styled from 'styled-components';

const StyledText = styled.p<{ isShown: boolean; showOnClick: boolean }>`
    font-size: inherit;
    color: inherit;
    filter: ${(props) => (props.isShown ? 'none' : 'blur(5px)')};
    transition: all 0.2s ease-in-out;
    cursor: ${(props) => (props.showOnClick ? (props.isShown ? 'inherit' : 'pointer') : 'system')};
`;

export default StyledText;
