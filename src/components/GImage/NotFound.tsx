import React from 'react';
import iconSrc from './not-found.svg';
import { ReactSVG } from 'react-svg';

const style = {
    maxWidth: '1920px',
    maxHeight: '1080px',
    backgroundColor: '#b0b0b0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
};

const NotFound = () => {
    return (
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
            <div style={style}>
                <ReactSVG src={iconSrc} style={{ height: '50px', width: '50px' }} />
            </div>
        </div>
    );
};

export default NotFound;
