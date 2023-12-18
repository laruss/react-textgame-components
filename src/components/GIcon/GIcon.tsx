import IconContainer, { DisabledIconContainer } from './IconContainer';
import { IconInterface } from './types';
import React from 'react';
import GTooltip from '../GTooltip';

const GIcon = ({ onClick, size, title, IconComponent, isDisabled, style = {} }: IconInterface) => {
    size = typeof size === 'number' ? `${size}px` : size;

    if (!IconComponent) return null;

    if (isDisabled)
        return (
            <DisabledIconContainer size={size}>
                <IconComponent fontSize='inherit' color='inherit' />
            </DisabledIconContainer>
        );

    return (
        <GTooltip title={title} placement={'right'}>
            <IconContainer style={style} size={size} hoverColor='#5b5b5b' clickedColor='#949494'>
                <IconComponent fontSize='inherit' color='inherit' onClick={onClick} />
            </IconContainer>
        </GTooltip>
    );
};

export default GIcon;
