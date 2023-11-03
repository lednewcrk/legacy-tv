enum FontWeightKey {
    Thin = 'thin',
    ExtraLight = 'extralight',
    Lighjt = 'light',
    Regular = 'regular',
    Medium = 'medium',
    SemiBold = 'semibold',
    Bold = 'bold',
    ExtraBold = 'extrabold',
    Black = 'black'
}

enum MyFonts {
    Poppins = 'poppins'
}

export const FontFamily: {
    [key in MyFonts]: {
        [key in FontWeightKey]: string
    }
} = {
    poppins: {
        thin: 'Poppins-Thin',
        extralight: 'Poppins-ExtraLight',
        light: 'Poppins-Light',
        regular: 'Poppins-Regular',
        medium: 'Poppins-Medium',
        semibold: 'Poppins-SemiBold',
        bold: 'Poppins-Bold',
        extrabold: 'Poppins-ExtraBold',
        black: 'Poppins-Black'
    }
}
