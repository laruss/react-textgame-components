import { styled } from '@mui/material';
import { useGContext } from '../GContext';

import Links from './Links';
import { LinkProps, LinkVariants } from './types.ts';

const LinkContainer = styled('span')<{ variant: LinkVariants }>`
    &:before {
        content: ' ';
        display: inline-block;
        left: -0.5em;
    }

    &:after {
        content: ' ';
        display: inline-block;
        right: -0.5em;
    }

    ${(props) => Links[props.variant]};
`;

const GLink = (props: LinkProps) => {
    const { link } = useGContext();
    const { className, onClick, children, variant = link?.variant, sx } = props;

    return (
        <LinkContainer
            className={`g-link ${className || ''}`}
            onClick={onClick}
            variant={variant as LinkVariants}
            sx={sx}
        >
            {children}
        </LinkContainer>
    );
};

export default GLink;
