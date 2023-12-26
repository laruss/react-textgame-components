import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { Effect } from '../GBlock/types';

export type SayVariants = 'common' | 'bigName' | 'messenger';

export type SaySideVariants = 'left' | 'right';

interface CommonProps {
    characterName?: string | undefined;
    characterPicture?: string | undefined;
    sx?: SxProps;
    variant?: SayVariants;
    side?: SaySideVariants;
}

export interface GSayProps extends CommonProps {
    blockEffect?: Effect;
    children: ReactNode;
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
    side: SaySideVariants;
}

export interface GetMessengerProps extends GetCommonProps {}

export interface GetBigNameProps extends GetCommonProps {
    hasPicture: boolean;
}

export interface GetSaysStylesProps extends GetBigNameProps {
    variant: SayVariants;
    hasName: boolean;
}
