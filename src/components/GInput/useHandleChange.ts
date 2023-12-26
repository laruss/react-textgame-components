import { useGContext } from '../GContext';
import React, { useCallback } from 'react';
import { UseHandleChangeProps } from './types';

const useHandleChange = ({
    allowOnlyNextSymbols,
    notify,
    onlyAlphabeticSymbols,
    onlyNumbers,
    restrictWhiteSpaces,
    setValue,
}: UseHandleChangeProps) => {
    const { input } = useGContext();

    return useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let result = e.target.value;
            const conditions = [
                { check: onlyAlphabeticSymbols, reg: /[^a-z]/gi, notification: input?.errors.onlyAlphabeticSymbols },
                { check: onlyNumbers, reg: /[^0-9]/gi, notification: input?.errors.onlyNumbers },
                {
                    check: allowOnlyNextSymbols,
                    reg: new RegExp(`[^${allowOnlyNextSymbols}]`, 'gi'),
                    notification: `${input?.errors.allowOnlyNextSymbols}: "${allowOnlyNextSymbols}"`,
                },
                { check: restrictWhiteSpaces, reg: /\s/gi, notification: input?.errors.restrictWhiteSpaces },
            ];

            conditions.forEach(({ check, reg, notification }) => {
                if (check) {
                    const afterRegexp = result.replace(reg, '');
                    if (afterRegexp !== result) {
                        notify && notify(notification as string);
                        result = afterRegexp;
                    }
                }
            });

            setValue(result);
        },
        [allowOnlyNextSymbols, notify, onlyAlphabeticSymbols, onlyNumbers, restrictWhiteSpaces, setValue, input],
    );
};

export default useHandleChange;
