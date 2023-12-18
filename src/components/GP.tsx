import { Box } from '@mui/material';
import React from 'react';
import { ReactNode } from 'react';

type GPProps = {
    children?: ReactNode;
    sx?: any;
};

/**
 * game <p> tag
 */
const GP = ({ children, sx }: GPProps) => {
    return <Box sx={sx}>{children}</Box>;
};

export default GP;
