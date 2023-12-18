import { CharInfoProps, GSayProps } from './types';
import styled, { CSSProp } from 'styled-components';
import React, { ReactNode, useMemo } from 'react';
import GImage from '../GImage';
import getSaysStyles from './utils';
import GBlock from '../GBlock';

const Container = styled.div<{ css: CSSProp }>`
    ${(props) => props.css}
`;

const CharInfo = ({ characterName, characterPicture, style, side, variant }: CharInfoProps) => {
    return (
        <div className='char-info-container' style={style}>
            {characterName !== undefined && (
                <div style={{ [side as string]: 0 }} className='char-info-name'>
                    {characterName}
                </div>
            )}
            {characterPicture !== undefined && <GImage className='char-info-image' src={characterPicture} />}
            {characterPicture === undefined && variant === 'messenger' && (
                <GImage
                    className='char-info-image'
                    src={'1234'}
                    imageStyles={{ transform: 'scale 2', marginTop: '15%' }}
                />
            )}
        </div>
    );
};

const GSay = ({
    characterName,
    characterPicture,
    characterPictureRadius,
    side = 'left',
    style = {},
    variant,
    backgroundColor,
    textColor,
    nameColor,
    children,
    blockEffect,
}: GSayProps) => {
    variant = variant ? variant : 'common';

    const styles = getSaysStyles({
        variant,
        position: side,
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
            style={{ color: nameColor }}
            characterName={characterName}
            characterPicture={characterPicture}
            side={side}
        />
    );

    const Border = <div className='char-info-delimiter' />;
    const effect = useMemo(
        () => (blockEffect ? blockEffect : side === 'left' ? 'leftSpring' : 'rightSpring'),
        [blockEffect, side],
    );

    return (
        <GBlock loadOn='scroll' effect={effect} style={{ paddingBottom: 0 }}>
            <Container css={styles} style={style}>
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
