import React, { ReactNode } from 'react';

export type LinkVariants = 'default' | 'light' | 'textLike';

export interface LinkProps {
    onClick: () => void;
    children: ReactNode[] | ReactNode | string;
    variant?: LinkVariants;
    style?: React.CSSProperties;
}
