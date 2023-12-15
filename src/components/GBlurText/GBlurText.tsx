import React, { useState } from 'react';
import { GBlurTextProps } from './types';
import StyledText from './StyledText';

const GBlurText = ({ text, showOnClick = false, style = {} }: GBlurTextProps) => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        showOnClick && setIsShown(true);
    };

    return (
        <StyledText isShown={isShown} showOnClick={showOnClick} style={style} onClick={handleClick}>
            {text}
        </StyledText>
    );
};

export default GBlurText;
