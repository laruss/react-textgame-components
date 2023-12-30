import { IGContext } from './types.ts';

const defaults: IGContext = {
    buttonVariant: 'dark',
    block: {
        buttonName: 'Show',
        loadOn: 'default',
        effect: 'bottomSpring',
    },
    imageLoaderText: 'Image is loading...',
    icon: {
        tooltipPlacement: 'right',
    },
    input: {
        errors: {
            onlyAlphabeticSymbols: 'Only alphabetic symbols are allowed',
            onlyNumbers: 'Only numbers are allowed',
            allowOnlyNextSymbols: 'Only next symbols are allowed',
            restrictWhiteSpaces: 'White spaces are restricted',
        },
    },
    link: {
        variant: 'default',
    },
    notification: {
        anchorOrigin: { horizontal: 'right', vertical: 'top' },
        closeTimeout: 3000,
        variant: 'success',
    },
    say: {
        variant: 'common',
        side: 'left',
    },
    video: {
        autoPlay: true,
        loop: true,
        muted: true,
        controls: false,
    },
};

export default defaults;
