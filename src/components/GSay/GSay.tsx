import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useGContext } from '../GContext';
import { CharInfoProps, GSayProps, SaySideVariants, SayVariants } from './types';
import { ReactNode, useMemo } from 'react';
import GImage from '../GImage';
import getSaysStyles from './utils';
import GBlock from '../GBlock';

const Container = styled('div')<{ customStyle: object }>(({ customStyle }) => ({
    ...customStyle,
}));

const CharInfo = ({ characterName, characterPicture, sx, side, variant }: CharInfoProps) => {
    return (
        <Box className='g-say-char-info-container' sx={sx}>
            {characterName !== undefined && (
                <Box sx={{ [side as string]: 0 }} className='g-say-char-info-name'>
                    {characterName}
                </Box>
            )}
            {characterPicture !== undefined && <GImage className='g-say-char-info-image' src={characterPicture} />}
            {characterPicture === undefined && variant === 'messenger' && (
                <GImage
                    className='g-say-char-info-image'
                    src='null'
                    imageStyles={{ transform: 'scale 2', marginTop: '15%' }}
                />
            )}
        </Box>
    );
};

const GSay = (props: GSayProps) => {
    const { say } = useGContext();

    const {
        className,
        characterName,
        characterPicture,
        characterPictureRadius,
        side = say?.side as SaySideVariants,
        sx,
        variant = say?.variant as SayVariants,
        backgroundColor,
        textColor,
        nameColor,
        children,
        blockEffect,
    } = props;

    const styles = useMemo(
        () =>
            getSaysStyles({
                variant,
                side,
                backgroundColor,
                textColor,
                nameColor,
                characterPictureRadius,
                hasPicture: Boolean(characterPicture),
                hasName: Boolean(characterName),
            }),
        [backgroundColor, characterName, characterPicture, characterPictureRadius, nameColor, side, textColor, variant],
    );

    const CharInfo_ = (
        <CharInfo
            variant={variant}
            sx={{ color: nameColor }}
            characterName={characterName}
            characterPicture={characterPicture}
            side={side}
        />
    );

    const Border = useMemo(() => <div className='g-say-char-info-delimiter' />, []);
    const effect = useMemo(
        () => (blockEffect ? blockEffect : side === 'left' ? 'leftSpring' : 'rightSpring'),
        [blockEffect, side],
    );

    return (
        <GBlock className={'g-say-block'} loadOn='scroll' effect={effect} sx={{ paddingBottom: 0 }}>
            <Container className={`g-say-container ${className || ''}`} customStyle={styles} sx={sx}>
                {(side === 'left' || variant === 'messenger') && CharInfo_}
                {(side === 'left' || variant === 'messenger') && Border}
                <div className={'g-say-text-container'}>{children as ReactNode}</div>
                {side === 'right' && variant !== 'messenger' && Border}
                {side === 'right' && variant !== 'messenger' && CharInfo_}
            </Container>
        </GBlock>
    );
};

export default GSay;
