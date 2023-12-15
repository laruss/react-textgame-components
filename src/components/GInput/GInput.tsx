import React, { KeyboardEvent, useCallback, useState } from 'react';
import useHandleChange from './useHandleChange';
import Container from './Container';
import Input from './Input';
import { GInputProps } from './types';
import GButton from '../GButton';

const BUTTON_HEIGHT = `40px`;

const GInput = ({
    notify,
    allowOnlyNextSymbols,
    buttonCaption = 'Submit',
    buttonVariant = 'dark',
    callback,
    confirmOnEnter = true,
    disableAfterConfirm = false,
    onlyAlphabeticSymbols = false,
    onlyNumbers = false,
    placeholder = 'Input something 😊',
    readOnly = false,
    restrictWhiteSpaces = false,
    style = {},
    styleButton = {},
    type = '',
    initValue = '',
}: GInputProps) => {
    const [value, setValue] = useState(initValue);
    const [_readOnly, set_readOnly] = useState(false);

    const onClick = useCallback(() => {
        callback && callback(value);
        disableAfterConfirm && set_readOnly(true);
    }, [callback, disableAfterConfirm, value]);

    const handleKeyPress = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter' && confirmOnEnter) {
                e.preventDefault();
                onClick();
            }
        },
        [confirmOnEnter, onClick],
    );

    const handleChange = useHandleChange({
        allowOnlyNextSymbols,
        onlyAlphabeticSymbols,
        onlyNumbers,
        restrictWhiteSpaces,
        setValue,
        notify,
    });

    return (
        <Container>
            <Input
                className='game-input'
                value={value}
                type={type}
                placeholder={placeholder}
                ro={readOnly || _readOnly}
                readOnly={readOnly || _readOnly}
                onChange={handleChange}
                style={style}
                onKeyDown={handleKeyPress}
            />
            <GButton
                variant={buttonVariant}
                style={{ height: BUTTON_HEIGHT, ...styleButton }}
                isDisabled={readOnly || _readOnly}
                onClick={onClick}
            >
                {buttonCaption}
            </GButton>
        </Container>
    );
};

export default GInput;
