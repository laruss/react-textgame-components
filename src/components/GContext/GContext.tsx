import defaults from './defaults.ts';
import { IGContext } from './types';
import { createContext } from 'react';

const GContext = createContext<IGContext>(defaults);

export default GContext;
