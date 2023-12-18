import 'react-loading-skeleton/dist/skeleton.css';
import { Container, Img, LoadingContainer } from './Elements';
import { GameImageProps } from './types';
import useLoading from './useLoading';
import NotFound from './NotFound';
import { CircularProgress } from '@mui/material';
import React from 'react';

const GImage = ({ src, style = {}, imageRadius, className = '', imageStyles }: GameImageProps) => {
    const { imgSrc, isError, loaded } = useLoading({ src });

    return (
        <Container style={style} className={className}>
            {isError ? (
                <NotFound />
            ) : (
                <Img style={imageStyles} loaded={loaded} imageRadius={imageRadius} src={imgSrc} alt={imgSrc} />
            )}
            {!loaded ? (
                <LoadingContainer>
                    Image is loading...
                    <CircularProgress style={{ alignSelf: 'center' }} color='inherit' thickness={4} size={60} />
                </LoadingContainer>
            ) : null}
        </Container>
    );
};

export default GImage;
