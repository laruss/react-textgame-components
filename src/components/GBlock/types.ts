import React, { ReactNode } from 'react';

export type LoadOn = 'default' | 'scroll' | 'button';
export type Effect = 'rightSpring' | 'leftSpring' | 'bottomSpring' | 'opacity';

export type GBlockProps = {
    children: ReactNode[] | ReactNode;
    loadOn?: LoadOn;
    effect?: Effect;
    buttonName?: string;
    style?: React.CSSProperties;
};
