/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        config.resolve.alias['@'] = `${__dirname}/src`
        config.resolve.extensions.push('.ts', '.tsx')
        return config
    },
    images: {
        domains: ['localhost'],
    },
}

module.exports = nextConfig
