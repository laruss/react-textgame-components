import defaults from 'components/GContext/defaults.ts';
import { IGContext } from '../GContext/types';
import { ReactNode, useMemo } from 'react';
import GContext from './GContext';

type GProviderProps = {
    children: ReactNode;
    settings?: IGContext;
};

const GProvider = ({ children, settings = {} }: GProviderProps) => {
    const provider = useMemo(() => ({ ...defaults, ...settings }), [settings]);

    return <GContext.Provider value={provider}>{children}</GContext.Provider>;
};

export default GProvider;
