import { useGContext } from 'components/GContext';
import { ToastContainer, ToastContainerProps } from 'react-toastify';

/**
 * GNotificationContainer component
 * is a container for notifications
 *
 * DON'T FORGET TO IMPORT CSS FILE IN YOUR APP (react-textgame-components/dist/styles.css)
 *
 * @param props - ToastContainerProps
 * @constructor - returns GNotificationContainer component
 * @example
 * <GNotificationContainer
 *    position="top-right"
 *    hideProgressBar={true}
 *    theme="dark"
 *    autoClose={5000}
 * />
 * @returns GNotificationContainer component
 * @see ToastContainerProps
 * @see GContext
 * @see useNotification
 * @see ToastContainer
 * @see https://fkhadra.github.io/react-toastify/introduction/
 * @see https://fkhadra.github.io/react-toastify/api/toastcontainer
 *
 * @extends ToastContainer from react-toastify
 */
const GNotificationContainer = (props: ToastContainerProps) => {
    const { notification } = useGContext();

    const {
        position = notification?.position,
        hideProgressBar = notification?.hideProgressBar,
        theme = notification?.theme,
        ...toastifyProps
    } = props;

    return <ToastContainer position={position} hideProgressBar={hideProgressBar} theme={theme} {...toastifyProps} />;
};

export default GNotificationContainer;
