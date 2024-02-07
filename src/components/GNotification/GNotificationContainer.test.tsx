import '@testing-library/jest-dom';
import { render, screen, waitFor, renderHook, act } from '@testing-library/react';
import GNotificationContainer from './GNotificationContainer';
import useNotification from './useNotification';
import GProvider from '../GContext/GProvider';

describe('GNotificationContainer', () => {
    test('renders with default props', async () => {
        const { result } = renderHook(() => useNotification());
        const { notify } = result.current;

        render(
            <GProvider>
                <GNotificationContainer />
            </GProvider>,
        );

        act(() => {
            notify('Test notification');
        });

        await waitFor(() => {
            const toastContainer = screen.getByRole('alert');
            expect(toastContainer).toBeInTheDocument();
        });
    });

    test('renders with custom props', async () => {
        const { result } = renderHook(() => useNotification());
        const { notify } = result.current;

        render(
            <GProvider>
                <GNotificationContainer position='top-left' hideProgressBar={true} theme='light' autoClose={1000} />
            </GProvider>,
        );

        act(() => {
            notify('Test notification');
        });

        await waitFor(() => {
            const toastContainer = screen.getByRole('alert').closest('.Toastify__toast');
            expect(toastContainer).toHaveClass('Toastify__bounce-enter--top-left');
            expect(toastContainer).toHaveClass('Toastify__toast-theme--light');
            expect(toastContainer).not.toHaveClass('Toastify__toast--hide-progress-bar');
        });
    });

    test('renders with context props', async () => {
        const { result } = renderHook(() => useNotification());
        const { notify } = result.current;

        render(
            <GProvider settings={{ notification: { position: 'bottom-right', hideProgressBar: true, theme: 'dark' } }}>
                <GNotificationContainer />
            </GProvider>,
        );

        act(() => {
            notify('Test notification');
        });

        await waitFor(() => {
            const alert = screen.getByRole('alert');
            const toastContainer = alert.closest('.Toastify__toast');
            expect(toastContainer).toHaveClass('Toastify__bounce-enter--bottom-right');
            expect(toastContainer).toHaveClass('Toastify__toast-theme--dark');
        });
    });
});
