import React from 'react';
import { Effect } from '../GBlock/types';

export type SayVariants = 'common' | 'bigName' | 'messenger';

export type SideVariants = 'left' | 'right';

interface CommonProps {
    characterName: string | undefined;
    characterPicture: string | undefined;
    style: React.CSSProperties;
    variant: SayVariants;
    side?: SideVariants;
}

export interface GSayProps extends CommonProps {
    blockEffect?: Effect;
    children: (React.ComponentType<any> | JSX.Element | string)[] | (React.ComponentType<any> | JSX.Element | string);
    characterPictureRadius?: string;
    backgroundColor?: string;
    textColor?: string;
    nameColor?: string;
}

export interface CharInfoProps extends CommonProps {}

export interface GetCommonProps {
    backgroundColor?: string;
    textColor?: string;
    nameColor?: string;
    characterPictureRadius?: string;
    position: SideVariants;
}

export interface GetSaysStylesProps extends GetCommonProps {
    variant: string;
    hasPicture: boolean;
    hasName: boolean;
}

export interface GetMessengerProps extends GetCommonProps {}

export interface GetBigNameProps extends GetCommonProps {
    hasPicture: boolean;
}
