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
    return useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let result = e.target.value;
            const conditions = [
                { check: onlyAlphabeticSymbols, reg: /[^a-z]/gi, notification: 'Only alphabetic symbols are allowed' },
                { check: onlyNumbers, reg: /[^0-9]/gi, notification: 'Only numeric symbols are allowed' },
                {
                    check: allowOnlyNextSymbols,
                    reg: new RegExp(`[^${allowOnlyNextSymbols}]`, 'gi'),
                    notification: `Only next symbols are allowed: "${allowOnlyNextSymbols}"`,
                },
                { check: restrictWhiteSpaces, reg: /\s/gi, notification: 'Whitespaces are not allowed' },
            ];

            conditions.forEach(({ check, reg, notification }) => {
                if (check) {
                    const afterRegexp = result.replace(reg, '');
                    if (afterRegexp !== result) {
                        notify && notify(notification);
                        result = afterRegexp;
                    }
                }
            });

            setValue(result);
        },
        [allowOnlyNextSymbols, notify, onlyAlphabeticSymbols, onlyNumbers, restrictWhiteSpaces, setValue],
    );
};

export default useHandleChange;
