const FLEX_CENTER = {
    display: 'flex',
    alignItems: 'center'
};

export const ALIGN = {
    LEFT: {
        justifyContent: 'flex-start',
        ...FLEX_CENTER
    },
    CENTER: {
        justifyContent: 'center',
        ...FLEX_CENTER
    },
    RIGHT: {
        justifyContent: 'flex-end',
        ...FLEX_CENTER
    },
    BETWEEN: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    COLUMN: {
        display: 'flex',
        flexDirection: 'column'
    },
    IMAGE_CENTER: (image) => ({
        backgroundImage: image,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    })
};

export default ALIGN;
