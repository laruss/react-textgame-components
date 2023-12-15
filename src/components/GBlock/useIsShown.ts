import { useEffect, useState } from 'react';
import { LoadOn } from './types';

type UseIsShownProps = {
    loadOn: LoadOn;
};

const useIsShown = ({ loadOn }: UseIsShownProps) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if (loadOn !== 'button') setIsShown(true);
    }, [loadOn]);

    return { isShown, setIsShown };
};

export default useIsShown;
