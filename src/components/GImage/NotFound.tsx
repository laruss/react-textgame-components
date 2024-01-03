import { styled } from '@mui/material/styles';
import iconSrc from './not-found.svg';
import { ReactSVG } from 'react-svg';

const Container = styled('div')`
    position: relative;
    width: 100%;
    padding-top: 56.25%;
`;

const InnerContainer = styled('div')`
    max-width: 1920px;
    max-height: 1080px;
    background-color: #b0b0b0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const NotFound = ({ className }: { className?: string }) => {
    return (
        <Container className={`g-image-not-found ${className || ''}`}>
            <InnerContainer>
                <ReactSVG src={iconSrc} style={{ height: '50px', width: '50px' }} />
            </InnerContainer>
        </Container>
    );
};

export default NotFound;
