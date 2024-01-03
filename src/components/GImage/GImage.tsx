import 'react-loading-skeleton/dist/skeleton.css';
import { useGContext } from '../GContext';
import { Container, Img, LoadingContainer } from './Elements';
import { GameImageProps } from './types';
import useLoading from './useLoading';
import NotFound from './NotFound';
import { CircularProgress } from '@mui/material';

const GImage = ({ src, sx = {}, imageRadius, className, imageStyles, imageClassName }: GameImageProps) => {
    const { imgSrc, isError, loaded } = useLoading({ src });
    const { imageLoaderText } = useGContext();

    return (
        <Container className={`g-image ${className || ''}`} sx={sx}>
            {isError ? (
                <NotFound />
            ) : (
                <Img
                    className={`g-image-img ${imageClassName || ''}`}
                    sx={imageStyles}
                    loaded={loaded}
                    imageRadius={imageRadius}
                    src={imgSrc}
                    alt={imgSrc}
                />
            )}
            {!loaded ? (
                <LoadingContainer className={`g-image-loading`}>
                    {imageLoaderText}
                    <CircularProgress sx={{ alignSelf: 'center' }} color='inherit' thickness={4} size={60} />
                </LoadingContainer>
            ) : null}
        </Container>
    );
};

export default GImage;
