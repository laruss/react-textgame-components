import React from 'react';
import { TooltipProps } from '@mui/material/Tooltip';

export interface TooltipInterface {
    children: React.ReactElement<any, any>;
    title: string | number;
    placement?: TooltipProps['placement'];
    style?: React.CSSProperties;
}
