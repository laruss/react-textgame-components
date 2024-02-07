import { ReactNode } from 'react';
import { toast, ToastOptions } from 'react-toastify';

/**
 * Wrapper for react-toastify's toast function
 * @param content ReactNode
 * @param options ToastOptions
 * @returns void
 */
const notify = (content: ReactNode, options?: ToastOptions) => {
    return toast(content, options);
};

export default notify;
