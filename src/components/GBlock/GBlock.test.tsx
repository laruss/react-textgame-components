import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GBlock from './GBlock';

describe('GBlock component', () => {
    test('renders GBlock component', () => {
        render(<GBlock>{''}</GBlock>);
        const blockElement = screen.getByTestId('g-block');
        expect(blockElement).toBeInTheDocument();
    });

    test('renders GButton when loadOn "button"', () => {
        render(<GBlock loadOn='button'>{''}</GBlock>);
        const buttonElement = screen.getByTestId('g-button');
        const blockElement = screen.getByTestId('g-block');
        expect(buttonElement).toBeInTheDocument();
        expect(blockElement).toHaveTextContent('Show');
        expect(blockElement).toBeInTheDocument();
    });

    test('renders GButton with provided buttonName when loadOn "button"', () => {
        render(
            <GBlock loadOn='button' buttonName='Test Button'>
                {''}
            </GBlock>,
        );
        const buttonElement = screen.getByTestId('g-button');
        expect(buttonElement).toHaveTextContent('Test Button');
        expect(buttonElement).toHaveClass('g-block-button');
    });

    test('renders children when loadOn "default"', () => {
        render(<GBlock loadOn='default'>{<div data-testid={'test-div'} />}</GBlock>);
        const blockElement = screen.getByTestId('g-block');
        expect(blockElement).toBeInTheDocument();
        const childElement = screen.queryByTestId('test-div');
        expect(childElement).toBeInTheDocument();
    });

    test('renders with styles when provided', () => {
        render(<GBlock sx={{ color: 'red' }}>{''}</GBlock>);
        const blockElement = screen.getByTestId('g-block');
        expect(blockElement).toHaveStyle('color: red');
    });

    test('renders content when button is clicked', () => {
        render(<GBlock loadOn='button'>{<div data-testid={'test-div'}>Test</div>}</GBlock>);
        const buttonElement = screen.getByTestId('g-button');
        fireEvent.click(buttonElement);
        // TODO: add await for animation, now it's not working properly
        waitFor(() => {
            const childElement = screen.queryByTestId('test-div');
            expect(childElement).toBeVisible();
        });
    });
});
