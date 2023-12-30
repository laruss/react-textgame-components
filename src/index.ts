import GBlock from './components/GBlock';
import GBlurText from './components/GBlurText';
import GButton from './components/GButton';
import { GContext } from './components/GContext';
import GImage from './components/GImage';
import GIcon from './components/GIcon';
import GInput from './components/GInput';
import GLink, { LinkProps, LinkVariants } from './components/GLink';
import GMap, { GMapHotspot } from './components/GMap';
import GNotification from './components/GNotification';
import GP from './components/GP';
import GSay, { SaySideVariants, SayVariants } from './components/GSay';
import GVideo from './components/GVideo';
import GProvider from './components/GContext';

import { ButtonVariants } from './components/GButton/types';
import { Effect } from './components/GBlock/types';
import { IGContext } from 'components/GContext/types.ts';

export {
    GContext,
    GProvider,
    GBlock,
    GBlurText,
    GButton,
    GImage,
    GIcon,
    GInput,
    GMap,
    GMapHotspot,
    GP,
    GSay,
    GVideo,
    GLink,
    GNotification,
};

export type { ButtonVariants, Effect, SayVariants, SaySideVariants, IGContext, LinkProps, LinkVariants };
