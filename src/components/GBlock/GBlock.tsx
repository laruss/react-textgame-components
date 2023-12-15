import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import GButton from '../GButton';
import { GBlockProps } from './types';
import { defaultProps, effects } from './utils';
import useIsShown from './useIsShown';

const GBlock = ({
    children,
    loadOn = 'default',
    buttonName = 'Show more',
    effect = 'bottomSpring',
    style = {},
}: GBlockProps) => {
    const { isShown, setIsShown } = useIsShown({ loadOn });

    const motionProps = useMemo(
        () => (loadOn === 'default' ? {} : { initial: effects[effect], ...defaultProps }),
        [loadOn, effect],
    );

    return (
        <div style={{ paddingBottom: 40, position: 'relative', ...style }}>
            {!isShown ? <GButton onClick={() => setIsShown(true)}>{buttonName}</GButton> : null}
            {isShown ? <motion.div {...motionProps}>{children}</motion.div> : null}
        </div>
    );
};

export default GBlock;
