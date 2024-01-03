import { css } from '@mui/material';
import { GetBigNameProps, GetCommonProps, GetMessengerProps, GetSaysStylesProps } from './types';

const getCommon = ({
    backgroundColor = '#000',
    textColor = '#fff',
    nameColor = '#fff',
    characterPictureRadius = '50px',
    side,
}: GetCommonProps) => css`
    display: flex;
    justify-content: ${side};
    padding: 10px;
    margin-bottom: 1%;
    gap: 10px;
    border-radius: 20px;
    border: black solid;
    background-color: ${backgroundColor};
    overflow: hidden;
    .g-say-char-info-delimiter {
        border: ${backgroundColor} solid;
        filter: invert(100%);
        mix-blend-mode: difference;
    }
    .g-say-char-info-container {
        display: flex;
        flex-direction: column-reverse;
        font-weight: bold;
        font-size: 150%;
        text-align: center;
        align-items: center;
        justify-content: center;
        min-width: 130px;
        max-width: 180px;
        gap: 10px;
        color: ${nameColor};
    }
    img {
        border-radius: ${characterPictureRadius};
    }
    .g-say-text-container {
        padding: 10px;
        width: 100%;
        color: ${textColor};
    }
`;

const getBigName = ({
    backgroundColor = '#60f0b2',
    side,
    hasPicture,
    textColor = '#fff',
    nameColor = '#000',
    characterPictureRadius = '50px',
}: GetBigNameProps) => css`
    display: flex;
    justify-content: ${side};
    padding: 5px;
    gap: 10px;
    margin-top: 80px;
    position: relative;
    .g-say-char-info-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        max-width: 200px;
    }
    .g-say-char-info-name {
        position: absolute;
        font-size: 150%;
        color: ${nameColor};
        font-weight: bold;
        top: -50px;
        overflow: auto;
        border-bottom: black solid;
    }
    img {
        border-radius: ${characterPictureRadius};
        border: black solid;
    }
    .g-say-text-container {
        margin: ${hasPicture ? '50px' : 'auto'};
        border-radius: 15px;
        background: ${backgroundColor};
        color: ${textColor};
        padding: 20px;
        text-align: center;
        font-weight: 900;
        position: relative;
    }
    .g-say-text-container:before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        border-top: 15px solid ${backgroundColor};
        border-bottom: 15px solid transparent;
        top: 20px;
        ${side === 'left'
            ? css`
                  border-left: 15px solid transparent;
                  border-right: 15px solid ${backgroundColor};
                  left: -30px;
              `
            : css`
                  border-left: 15px solid ${backgroundColor};
                  border-right: 15px solid transparent;
                  right: -30px;
              `}
    }
`;

const getMessenger = ({
    backgroundColor = '#effdde',
    textColor = '#000',
    nameColor = '#000',
    characterPictureRadius = '50%',
    side,
}: GetMessengerProps) => css`
    display: flex;
    overflow: hidden;
    flex-direction: ${side === 'left' ? 'row' : 'row-reverse'};
    padding: 5px;
    gap: 10px;
    margin-top: 40px;
    position: relative;
    .g-say-char-info-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .g-say-char-info-name {
        position: absolute;
        color: ${nameColor};
        top: -35px;
        overflow: auto;
        border-bottom: black solid;
    }
    .g-say-char-info-image {
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: ${characterPictureRadius};
        border: black solid;
    }
    img {
        transform: scale(1g-say-55);
    }
    .g-say-text-container {
        max-width: 70%;
        min-width: 200px;
        min-height: 100px;
        border-radius: 15px;
        background: ${backgroundColor};
        color: ${textColor};
        padding: 10px 20px;
        z-index: 2;
        box-shadow: 0 2px 1px 0 rgba(93, 196, 82, 0g-say-5);
    }
    .g-say-text-container:before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        border-top: 15px solid ${backgroundColor};
        border-bottom: 15px solid transparent;
        top: 50px;
        ${side === 'left'
            ? css`
                  border-left: 15px solid transparent;
                  border-right: 15px solid ${backgroundColor};
                  left: 100px;
              `
            : css`
                  border-left: 15px solid ${backgroundColor};
                  border-right: 15px solid transparent;
                  right: 100px;
              `}
    }
`;

const getSaysStyles = (props: GetSaysStylesProps) => {
    const { variant, side, backgroundColor, textColor, nameColor, characterPictureRadius, hasPicture } = props;

    const common = getCommon({ backgroundColor, textColor, nameColor, characterPictureRadius, side });

    if (variant === 'common') return common;
    if (variant === 'bigName')
        return getBigName({ backgroundColor, textColor, nameColor, characterPictureRadius, side, hasPicture });
    if (variant === 'messenger')
        return getMessenger({ backgroundColor, textColor, nameColor, characterPictureRadius, side });

    return common;
};

export default getSaysStyles;
