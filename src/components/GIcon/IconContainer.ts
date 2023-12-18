import styled from 'styled-components';

export const DisabledIconContainer = styled.div<{ size: string }>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    font-size: ${(props) => props.size};
    color: #949494;
    text-align: center;
    cursor: not-allowed;
`;

const IconContainer = styled.div<{ size: string; hoverColor: string; clickedColor: string }>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    font-size: ${(props) => props.size};
    color: inherit;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: ${(props) => props.hoverColor};
    }

    &:active {
        color: ${(props) => props.clickedColor};
        box-shadow: none;
    }

    &:focus,
    &:active:focus {
        color: ${(props) => props.clickedColor};
        outline: 5px auto rgba(0, 0, 0, 0.2);
    }

    &:visited {
        color: ${(props) => props.clickedColor};
    }
`;

export default IconContainer;
