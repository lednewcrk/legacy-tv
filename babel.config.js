module.exports = {
    retainLines: true,
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['.'],
                alias: {
                    '@components': './src/components',
                    '@types': './src/types',
                    '@navigation': './src/navigation',
                    '@hooks': './src/hooks',
                    '@assets': './src/assets',
                    '@config': './src/config',
                    '@utils': './src/utils',
                    '@context': './src/context',
                    '@screens': './src/screens'
                }
            }
        ]
    ]
}
