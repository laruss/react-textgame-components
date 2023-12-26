import 'react-loading-skeleton/dist/skeleton.css';
import { useGContext } from '../GContext';
import { Container, Img, LoadingContainer } from './Elements';
import { GameImageProps } from './types';
import useLoading from './useLoading';
import NotFound from './NotFound';
import { CircularProgress } from '@mui/material';

const GImage = ({ src, sx = {}, imageRadius, className = '', imageStyles }: GameImageProps) => {
    const { imgSrc, isError, loaded } = useLoading({ src });
    const { imageLoaderText } = useGContext();

    return (
        <Container sx={sx} className={className}>
            {isError ? (
                <NotFound />
            ) : (
                <Img sx={imageStyles} loaded={loaded} imageRadius={imageRadius} src={imgSrc} alt={imgSrc} />
            )}
            {!loaded ? (
                <LoadingContainer>
                    {imageLoaderText}
                    <CircularProgress sx={{ alignSelf: 'center' }} color='inherit' thickness={4} size={60} />
                </LoadingContainer>
            ) : null}
        </Container>
    );
};

export default GImage;
