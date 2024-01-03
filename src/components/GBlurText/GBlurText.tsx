import { useCallback, useState } from 'react';
import { GBlurTextProps } from './types';
import StyledText from './StyledText';

const GBlurText = ({ text, showOnClick = false, sx, className }: GBlurTextProps) => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = useCallback(() => {
        showOnClick && setIsShown(true);
    }, [showOnClick]);

    return (
        <StyledText
            className={`blur-text ${className || ''}`}
            isShown={isShown}
            showOnClick={showOnClick}
            sx={sx}
            onClick={handleClick}
        >
            {text}
        </StyledText>
    );
};

export default GBlurText;
