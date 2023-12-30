import { AlertProps, Snackbar } from '@mui/material';
import { Alert as MuiAlert } from '@mui/material';
import { useGContext } from '../GContext';
import { NotificationProps } from './types.ts';
import { forwardRef, useEffect, useState } from 'react';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const GNotification = (props: NotificationProps) => {
    const { notification } = useGContext();

    const {
        children,
        open,
        anchorOrigin = notification?.anchorOrigin,
        variant = notification?.variant,
        closeTimeout = notification?.closeTimeout,
        onClick,
    } = props;
    const [isOpen, setIsOpen] = useState(open ?? false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsOpen(false);
            }, closeTimeout);
            return () => clearTimeout(timer);
        }
    }, [isOpen, closeTimeout]);

    useEffect(() => {
        setIsOpen(open as boolean);
    }, [open]);

    return (
        <Snackbar onClick={onClick} open={isOpen} anchorOrigin={anchorOrigin} className={'g-notification'}>
            <Alert severity={variant}>{children}</Alert>
        </Snackbar>
    );
};

export default GNotification;
