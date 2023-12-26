import { IGContext } from '../GContext/types';
import { ReactNode } from 'react';
import GContext from './GContext';

type GProviderProps = {
    children: ReactNode;
    settings: IGContext;
};

const GProvider = ({ children, settings }: GProviderProps) => {
    return <GContext.Provider value={settings}>{children}</GContext.Provider>;
};

export default GProvider;
