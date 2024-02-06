import { useEffect, useState } from 'react';
import { LoadOn } from './types';

type UseIsShownProps = {
    loadOn: LoadOn;
};

/**
 * Hook to manage the visibility of the block
 * @param loadOn - when to show the block
 * @returns isShown - visibility state
 * @returns setIsShown - function to change the visibility state
 * @category Hooks
 * @example
 * const { isShown, setIsShown } = useIsShown({ loadOn: 'default' });
 * if (isShown) {
 *    return <div>Block content</div>;
 * }
 * @see GBlock
 * @see GBlockProps
 * @see LoadOn
 * @see Effect
 */
const useIsShown = ({ loadOn }: UseIsShownProps) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if (loadOn !== 'button') setIsShown(true);
    }, [loadOn]);

    return { isShown, setIsShown };
};

export default useIsShown;
