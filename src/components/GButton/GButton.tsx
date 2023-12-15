import React from 'react';
import { GButtonProps } from './types';
import ButtonContainer from './ButtonContainer';

const GButton = (props: GButtonProps) => {
    const caption = String(props.children);
    const style = props.style ? props.style : {};
    const isDisabled = props.isDisabled ? props.isDisabled : false;

    return (
        <ButtonContainer
            variant={props.variant ? props.variant : 'dark'} // FIXME: set global default variant
            isDisabled={isDisabled}
            style={style}
            {...props}
            onClick={isDisabled ? () => {} : props.onClick}
        >
            {caption}
        </ButtonContainer>
    );
};

export default GButton;
