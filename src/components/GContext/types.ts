import { TooltipProps } from '@mui/material/Tooltip';
import { NotificationType } from 'components/GNotification/types.ts';
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
    notification?: NotificationType;
    say?: {
        variant?: SayVariants;
        side?: SaySideVariants;
    };
    video?: IGVideo;
}
