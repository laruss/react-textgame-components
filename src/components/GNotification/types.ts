import { AlertColor, SnackbarOrigin } from '@mui/material';
import { ReactNode } from 'react';

export interface NotificationType {
    anchorOrigin?: SnackbarOrigin;
    closeTimeout?: number;
    variant?: AlertColor;
}

export interface NotificationProps extends NotificationType {
    children: ReactNode;
    open?: boolean;
    onClick?: () => void;
}
