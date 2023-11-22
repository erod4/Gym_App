const commonColor={
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    activeColor: '#DE5E69',
    deactiveColor: '#DE5E6950',
    boxActiveColor: '#DE5E6940',
}

const darkMode={
    themeColor: '#FFFFFF',
    white: '#000000',
    sky: '#DE5E69',
    gray: 'gray',
    ...commonColor,
}
const lightMode={
    themeColor: '#000000',
    white: '#FFFFFF',
    sky: '#831a23',
    gray: 'white',
    ...commonColor,
}

export default {commonColor, darkMode, lightMode}