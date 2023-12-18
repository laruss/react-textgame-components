import styled from 'styled-components';

export const Container = styled.div`
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
`;

export const Img = styled.img<{ loaded: boolean; imageRadius: string | undefined }>`
    display: ${(props) => (props.loaded ? 'inherit' : 'none')};
    max-width: 100%;
    width: 100%;
    border-radius: ${(props) => (props.imageRadius ? props.imageRadius : 'auto')};
`;

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 600px;
    background-color: #cecece;
`;
