# react-textgame-components

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

[react-textgame-components](README.md) / Exports

## Table of contents

### Release notes

- [Release notes](./CHANGELOG.md)

### Type Aliases

- [ButtonVariants](modules.md#buttonvariants)
- [Effect](modules.md#effect)
- [LinkVariants](modules.md#linkvariants)
- [SaySideVariants](modules.md#saysidevariants)
- [SayVariants](modules.md#sayvariants)

### Variables

- [GContext](modules.md#gcontext)

### Functions

- [GBlock](modules.md#gblock)
- [GBlurText](modules.md#gblurtext)
- [GButton](modules.md#gbutton)
- [GIcon](modules.md#gicon)
- [GImage](modules.md#gimage)
- [GInput](modules.md#ginput)
- [GLink](modules.md#glink)
- [GMap](modules.md#gmap)
- [GMapHotspot](modules.md#gmaphotspot)
- [GNotificationContainer](modules.md#gnotificationcontainer)
- [GP](modules.md#gp)
- [GProvider](modules.md#gprovider)
- [GSay](modules.md#gsay)
- [GVideo](modules.md#gvideo)
- [useNotification](modules.md#usenotification)

## Type Aliases

### ButtonVariants

Ƭ **ButtonVariants**: ``"dark"`` \| ``"light"`` \| ``"success"`` \| ``"warning"`` \| ``"danger"`` \| ``"info"``

#### Defined in

[src/components/GButton/types.ts:16](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GButton/types.ts#L16)

___

### Effect

Ƭ **Effect**: ``"rightSpring"`` \| ``"leftSpring"`` \| ``"bottomSpring"`` \| ``"opacity"``

#### Defined in

[src/components/GBlock/types.ts:5](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GBlock/types.ts#L5)

___

### LinkVariants

Ƭ **LinkVariants**: ``"default"`` \| ``"light"`` \| ``"textLike"``

#### Defined in

[src/components/GLink/types.ts:4](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GLink/types.ts#L4)

___

### SaySideVariants

Ƭ **SaySideVariants**: ``"left"`` \| ``"right"``

#### Defined in

[src/components/GSay/types.ts:7](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GSay/types.ts#L7)

___

### SayVariants

Ƭ **SayVariants**: ``"common"`` \| ``"bigName"`` \| ``"messenger"``

#### Defined in

[src/components/GSay/types.ts:5](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GSay/types.ts#L5)

## Variables

### GContext

• `Const` **GContext**: `Context`\<[`IGContext`](interfaces/IGContext.md)\>

#### Defined in

[src/components/GContext/GContext.tsx:5](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GContext/GContext.tsx#L5)

## Functions

### GBlock

▸ **GBlock**(`props`): `Element`

GBlock component
is a container for content that can be shown on button click or other event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `GBlockProps` | GBlockProps |

#### Returns

`Element`

GBlock component

**`Example`**

```ts
<GBlock loadOn="button" buttonName="Show more">
    <div>Content</div>
</GBlock>
```

**`See`**

- GBlockProps
- GButton
- useIsShown
- GContext

#### Defined in

[src/components/GBlock/GBlock.tsx:25](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GBlock/GBlock.tsx#L25)

___

### GBlurText

▸ **GBlurText**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `GBlurTextProps` |

#### Returns

`Element`

#### Defined in

[src/components/GBlurText/GBlurText.tsx:5](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GBlurText/GBlurText.tsx#L5)

___

### GButton

▸ **GButton**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `GButtonProps` |

#### Returns

`Element`

#### Defined in

[src/components/GButton/GButton.tsx:5](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GButton/GButton.tsx#L5)

___

### GIcon

▸ **GIcon**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `IconInterface` |

#### Returns

`Element`

#### Defined in

[src/components/GIcon/GIcon.tsx:6](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GIcon/GIcon.tsx#L6)

___

### GImage

▸ **GImage**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `GameImageProps` |

#### Returns

`Element`

#### Defined in

[src/components/GImage/GImage.tsx:9](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GImage/GImage.tsx#L9)

___

### GInput

▸ **GInput**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `GInputProps` |

#### Returns

`Element`

#### Defined in

[src/components/GInput/GInput.tsx:11](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GInput/GInput.tsx#L11)

___

### GLink

▸ **GLink**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`LinkProps`](interfaces/LinkProps.md) |

#### Returns

`Element`

#### Defined in

[src/components/GLink/GLink.tsx:23](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GLink/GLink.tsx#L23)

___

### GMap

▸ **GMap**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `GMapProps` |

#### Returns

`Element`

#### Defined in

[src/components/GMap/GMap.tsx:13](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GMap/GMap.tsx#L13)

___

### GMapHotspot

▸ **GMapHotspot**\<`T`\>(`props`): `GMapHotspotType`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HotspotType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `GMapHotspotProps`\<`T`\> |

#### Returns

`GMapHotspotType`

#### Defined in

[src/components/GMap/GMapHotspot.tsx:6](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GMap/GMapHotspot.tsx#L6)

___

### GNotificationContainer

▸ **GNotificationContainer**(`props`): `Element`

GNotificationContainer component
is a container for notifications

DON'T FORGET TO IMPORT CSS FILE IN YOUR APP (react-textgame-components/dist/styles.css)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `ToastContainerProps` | ToastContainerProps |

#### Returns

`Element`

GNotificationContainer component

**`Example`**

```ts
<GNotificationContainer
   position="top-right"
   hideProgressBar={true}
   theme="dark"
   autoClose={5000}
/>
```

**`See`**

- ToastContainerProps
- GContext
- useNotification
- ToastContainer
- https://fkhadra.github.io/react-toastify/introduction/
- https://fkhadra.github.io/react-toastify/api/toastcontainer

#### Defined in

[src/components/GNotification/GNotificationContainer.tsx:29](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GNotification/GNotificationContainer.tsx#L29)

___

### GP

▸ **GP**(`props`, `context?`): `ReactNode`

game <p> tag

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `MUIStyledCommonProps`\<`Theme`\> & `ClassAttributes`\<`HTMLParagraphElement`\> & `HTMLAttributes`\<`HTMLParagraphElement`\> |
| `context?` | `any` |

#### Returns

`ReactNode`

#### Defined in

[src/components/GP.tsx:6](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GP.tsx#L6)

___

### GProvider

▸ **GProvider**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `GProviderProps` |

#### Returns

`Element`

#### Defined in

[src/components/GContext/GProvider.tsx:11](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GContext/GProvider.tsx#L11)

___

### GSay

▸ **GSay**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `GSayProps` |

#### Returns

`Element`

#### Defined in

[src/components/GSay/GSay.tsx:34](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GSay/GSay.tsx#L34)

___

### GVideo

▸ **GVideo**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `GVideoProps` |

#### Returns

`Element`

#### Defined in

[src/components/GVideo/GVideo.tsx:6](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GVideo/GVideo.tsx#L6)

___

### useNotification

▸ **useNotification**(`options?`): `Object`

Hook for showing notifications

DON'T FORGET TO IMPORT CSS FILE IN YOUR APP (react-textgame-components/dist/styles.css)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `ToastOptions`\<`unknown`\> | options for the notification |

#### Returns

`Object`

notify - function to show a notification

| Name | Type |
| :------ | :------ |
| `notify` | (`content`: `ReactNode`) => `void` |

**`Example`**

```ts
const { notify } = useNotification();
notify(<div>Hello, world!</div>);
```

**`Example`**

```ts
const { notify } = useNotification({ autoClose: 10000 });
notify('Hello, world!');
```

**`See`**

- https://fkhadra.github.io/react-toastify/introduction/
- https://fkhadra.github.io/react-toastify/api/toast

#### Defined in

[src/components/GNotification/useNotification.ts:21](https://github.com/laruss/react-textgame-components/blob/33d31b2/src/components/GNotification/useNotification.ts#L21)


[npm-url]: https://www.npmjs.com/package/react-textgame-components
[npm-image]: https://img.shields.io/npm/v/react-textgame-components
[github-license]: https://img.shields.io/github/license/laruss/react-textgame-components
[github-license-url]: https://github.com/laruss/react-textgame-components/blob/master/LICENSE
[github-build]: https://github.com/laruss/react-textgame-components/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/laruss/react-textgame-components/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-textgame-components
