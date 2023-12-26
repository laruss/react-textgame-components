import { useCallback, useState } from 'react';
import { GBlurTextProps } from './types';
import StyledText from './StyledText';

const GBlurText = ({ text, showOnClick = false, sx = {} }: GBlurTextProps) => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = useCallback(() => {
        showOnClick && setIsShown(true);
    }, [showOnClick]);

    return (
        <StyledText isShown={isShown} showOnClick={showOnClick} sx={sx} onClick={handleClick}>
            {text}
        </StyledText>
    );
};

export default GBlurText;
