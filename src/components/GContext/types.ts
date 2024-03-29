import { TooltipProps } from '@mui/material/Tooltip';
import { ToastContainerProps } from 'react-toastify';
import { LinkVariants } from '../GLink/types.ts';
import { Effect, LoadOn } from '../GBlock/types.ts';
import { IGVideo } from '../GVideo/types';
import { ButtonVariants } from '../GButton/types';
import { SaySideVariants, SayVariants } from '../GSay';

export interface IGContext {
    buttonVariant?: ButtonVariants;
    block?: {
        loadOn?: LoadOn;
        effect?: Effect;
        buttonName?: string;
    };
    imageLoaderText?: string;
    icon?: {
        tooltipPlacement?: TooltipProps['placement'];
    };
    input?: {
        errors: {
            onlyAlphabeticSymbols?: string;
            onlyNumbers?: string;
            allowOnlyNextSymbols?: string;
            restrictWhiteSpaces?: string;
        };
    };
    link?: {
        variant?: LinkVariants;
    };
    map?: {
        logCoordinatesOnCLick?: boolean;
    };
    notification?: ToastContainerProps;
    say?: {
        variant?: SayVariants;
        side?: SaySideVariants;
    };
    video?: IGVideo;
}
