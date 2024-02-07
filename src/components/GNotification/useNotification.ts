import { ReactNode, useCallback } from 'react';
import { toast, ToastOptions } from 'react-toastify';

/**
 * Hook for showing notifications
 *
 * DON'T FORGET TO IMPORT CSS FILE IN YOUR APP (react-textgame-components/dist/styles.css)
 *
 * @param options - options for the notification
 * @returns notify - function to show a notification
 * @example
 * const { notify } = useNotification();
 * notify(<div>Hello, world!</div>);
 * @example
 * const { notify } = useNotification({ autoClose: 10000 });
 * notify('Hello, world!');
 *
 * @see https://fkhadra.github.io/react-toastify/introduction/
 * @see https://fkhadra.github.io/react-toastify/api/toast
 */
const useNotification = (options?: ToastOptions) => {
    const notify = useCallback(
        (content: ReactNode) => {
            toast(content, options);
        },
        [options],
    );

    return { notify };
};

export default useNotification;
