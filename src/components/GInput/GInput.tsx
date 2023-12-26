import { Box } from '@mui/material';
import { useGContext } from '../GContext';
import { KeyboardEvent, useCallback, useState } from 'react';
import useHandleChange from './useHandleChange';
import Input from './Input';
import { GInputProps } from './types';
import GButton from '../GButton';

const BUTTON_HEIGHT = `40px`;

const GInput = (props: GInputProps) => {
    const { buttonVariant: defaultBV } = useGContext();

    const {
        notify,
        allowOnlyNextSymbols,
        buttonCaption = 'Submit',
        buttonVariant = defaultBV,
        callback,
        confirmOnEnter = true,
        disableAfterConfirm = false,
        onlyAlphabeticSymbols = false,
        onlyNumbers = false,
        placeholder = 'Input something 😊',
        readOnly = false,
        restrictWhiteSpaces = false,
        sx = {},
        styleButton = {},
        type = '',
        initValue = '',
    } = props;

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

    const onChange = useHandleChange({
        allowOnlyNextSymbols,
        onlyAlphabeticSymbols,
        onlyNumbers,
        restrictWhiteSpaces,
        setValue,
        notify,
    });

    return (
        <Box sx={{ width: 'content-box' }}>
            <Input
                className='game-input'
                value={value}
                type={type}
                placeholder={placeholder}
                ro={readOnly || _readOnly}
                readOnly={readOnly || _readOnly}
                onChange={onChange}
                sx={sx}
                onKeyDown={handleKeyPress}
            />
            <GButton
                variant={buttonVariant}
                sx={{ height: BUTTON_HEIGHT, ...styleButton }}
                isDisabled={readOnly || _readOnly}
                onClick={onClick}
            >
                {buttonCaption}
            </GButton>
        </Box>
    );
};

export default GInput;
