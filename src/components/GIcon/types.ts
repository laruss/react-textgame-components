import React from 'react';

export interface IconInterface {
    onClick: () => void;
    size: string | number;
    title: string;
    IconComponent?: React.ComponentType<any>;
    isDisabled?: boolean;
    style?: React.CSSProperties;
}
