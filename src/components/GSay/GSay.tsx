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
        <Box className='char-info-container' sx={sx}>
            {characterName !== undefined && (
                <Box sx={{ [side as string]: 0 }} className='char-info-name'>
                    {characterName}
                </Box>
            )}
            {characterPicture !== undefined && <GImage className='char-info-image' src={characterPicture} />}
            {characterPicture === undefined && variant === 'messenger' && (
                <GImage
                    className='char-info-image'
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

    const styles = getSaysStyles({
        variant,
        side,
        backgroundColor,
        textColor,
        nameColor,
        characterPictureRadius,
        hasPicture: Boolean(characterPicture),
        hasName: Boolean(characterName),
    });

    const CharInfo_ = (
        <CharInfo
            variant={variant}
            sx={{ color: nameColor }}
            characterName={characterName}
            characterPicture={characterPicture}
            side={side}
        />
    );

    const Border = useMemo(() => <div className='char-info-delimiter' />, []);
    const effect = useMemo(
        () => (blockEffect ? blockEffect : side === 'left' ? 'leftSpring' : 'rightSpring'),
        [blockEffect, side],
    );

    return (
        <GBlock loadOn='scroll' effect={effect} sx={{ paddingBottom: 0 }}>
            <Container customStyle={styles} sx={sx}>
                {(side === 'left' || variant === 'messenger') && CharInfo_}
                {(side === 'left' || variant === 'messenger') && Border}
                <div className={'text-container'}>{children as ReactNode}</div>
                {side === 'right' && variant !== 'messenger' && Border}
                {side === 'right' && variant !== 'messenger' && CharInfo_}
            </Container>
        </GBlock>
    );
};

export default GSay;
