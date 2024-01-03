import { AlertColor, SnackbarOrigin, SxProps } from '@mui/material';
import { ReactNode } from 'react';

export interface NotificationType {
    anchorOrigin?: SnackbarOrigin;
    closeTimeout?: number;
    variant?: AlertColor;
}

export interface NotificationProps extends NotificationType {
    className?: string;
    children: ReactNode;
    open?: boolean;
    onClick?: () => void;
    sx?: SxProps;
}
