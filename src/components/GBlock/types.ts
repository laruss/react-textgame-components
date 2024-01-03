import { BoxOwnProps } from '@mui/system/Box/Box';
import { ReactNode } from 'react';

export type LoadOn = 'default' | 'scroll' | 'button';
export type Effect = 'rightSpring' | 'leftSpring' | 'bottomSpring' | 'opacity';

export interface GBlockProps extends BoxOwnProps {
    className?: string;
    children: ReactNode[] | ReactNode;
    loadOn?: LoadOn;
    effect?: Effect;
    buttonName?: string;
}
