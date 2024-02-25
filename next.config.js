module.exports = {
    webpack(config, options) {
        config.resolve.alias['@'] = `${__dirname}/src`
        config.resolve.extensions.push('.ts', '.tsx')
        return config
    },
    images: {
        domains: ['localhost'],
    },
}
