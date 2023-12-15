import React from 'react';
import { Tooltip } from '@mui/material';
import { TooltipInterface } from './types';

const GTooltip = ({ children, title, placement, style = {} }: TooltipInterface) => {
    if (!children) return null;

    return title !== '' ? (
        <Tooltip
            title={<div style={{ fontSize: 20 }}>{title}</div>}
            style={{ fontFamily: 'inherit', ...style }}
            placement={placement}
            arrow
            disableInteractive
        >
            {children}
        </Tooltip>
    ) : (
        <div>{children}</div>
    );
};

export default GTooltip;
