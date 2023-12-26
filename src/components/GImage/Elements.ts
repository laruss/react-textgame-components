import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(
    () => `
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
`,
);

interface ImgProps {
    loaded: boolean;
    imageRadius?: string;
}

export const Img = styled('img')<ImgProps>`
    display: ${(props) => (props.loaded ? 'inherit' : 'none')};
    max-width: 100%;
    width: 100%;
    border-radius: ${(props) => (props.imageRadius ? props.imageRadius : 'auto')};
`;

export const LoadingContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 600px;
    background-color: #cecece;
`;
