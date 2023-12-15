import { ButtonsObject } from './types';
import { getButtonStyle } from './utils';

const Buttons: ButtonsObject = {
    dark: getButtonStyle({
        background: {
            idle: `#363537`,
            active: `#565656`,
        },
        shadow: {
            hover: `rgba(0, 1, 0, .2)`,
            focus: `rgba(0, 0, 0, .5)`,
        },
        color: `#fff`,
    }),
    light: getButtonStyle({
        background: {
            idle: `#f2f2f2`,
            active: `#b2b1b1`,
        },
        shadow: {
            hover: `rgba(212, 212, 212, 0.2)`,
            focus: `rgba(177, 177, 177, 0.5)`,
        },
        color: `#000000`,
    }),
    success: getButtonStyle({
        background: {
            idle: `#2ecc71`,
            active: `#1e7e34`,
        },
        shadow: {
            hover: `rgba(40, 167, 69, 0.2)`,
            focus: `rgba(30, 126, 52, 0.5)`,
        },
        color: `#ffffff`,
    }),
    warning: getButtonStyle({
        background: {
            idle: `#ffc107`,
            active: `#e0a800`,
        },
        shadow: {
            hover: `rgba(255, 193, 7, 0.2)`,
            focus: `rgba(224, 168, 0, 0.5)`,
        },
        color: `#000000`,
    }),
    danger: getButtonStyle({
        background: {
            idle: `#ff6464`,
            active: `#db3232`,
        },
        shadow: {
            hover: `rgba(255, 100, 100, 0.2)`,
            focus: `rgba(219, 50, 50, 0.5)`,
        },
        color: `#ffffff`,
    }),
    info: getButtonStyle({
        background: {
            idle: `#5bc0de`,
            active: `#31b0d5`,
        },
        shadow: {
            hover: `rgba(91, 192, 222, 0.2)`,
            focus: `rgba(49, 176, 213, 0.5)`,
        },
        color: `#ffffff`,
    }),
};

export default Buttons;
