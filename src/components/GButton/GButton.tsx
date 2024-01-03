import { useGContext } from '../GContext';
import { ButtonVariants, GButtonProps } from './types';
import ButtonContainer from './ButtonContainer';

const GButton = (props: GButtonProps) => {
    const { buttonVariant } = useGContext();
    const { isDisabled = false, children, variant = buttonVariant, onClick, sx, ...otherProps } = props;

    return (
        <ButtonContainer
            className={`g-button ${props.className || ''}`}
            variant={variant as ButtonVariants}
            isDisabled={isDisabled}
            sx={sx}
            {...otherProps}
            onClick={isDisabled ? () => null : onClick}
        >
            {children}
        </ButtonContainer>
    );
};

export default GButton;
