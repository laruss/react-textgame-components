import { Box } from '@mui/material';
import { useGContext } from '../GContext';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import GButton from '../GButton';
import { Effect, GBlockProps, LoadOn } from './types';
import { defaultProps, effects } from './utils';
import useIsShown from './useIsShown';

const GBlock = (props: GBlockProps) => {
    const { block } = useGContext();

    const {
        children,
        buttonName = block?.buttonName as string,
        loadOn = block?.loadOn as LoadOn,
        effect = block?.effect as Effect,
        sx,
    } = props;
    const { isShown, setIsShown } = useIsShown({ loadOn });

    const motionProps = useMemo(
        () => (loadOn === 'default' ? {} : { initial: effects[effect], ...defaultProps }),
        [loadOn, effect],
    );

    return (
        <Box sx={{ paddingBottom: 40, position: 'relative', ...sx }}>
            {!isShown ? <GButton onClick={() => setIsShown(true)}>{buttonName}</GButton> : null}
            {isShown ? <motion.div {...motionProps}>{children}</motion.div> : null}
        </Box>
    );
};

export default GBlock;
