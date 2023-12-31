import { SxProps } from '@mui/material';
import { ReactNode } from 'react';

export type LinkVariants = 'default' | 'light' | 'textLike';

export interface LinkProps {
    className?: string;
    onClick: () => void;
    children: ReactNode[] | ReactNode | string;
    variant?: LinkVariants;
    sx?: SxProps;
}
