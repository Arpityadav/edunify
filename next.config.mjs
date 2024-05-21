/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                net: false,
                tls: false,
            };
        }
        return config;
    },

    env: {
        MYSQL_HOST: process.env.MYSQL_HOST && process.env.MYSQL_HOST.replace(/,$/g, ''),
        MYSQL_USER: process.env.MYSQL_USER && process.env.MYSQL_USER.replace(/,$/g, ''),
        MYSQL_PORT: process.env.MYSQL_PORT && process.env.MYSQL_PORT.replace(/,$/g, ''),
        MYSQL_PASSWORD: process.env.MYSQL_PASSWORD && process.env.MYSQL_PASSWORD.replace(/,$/g, ''),
        MYSQL_DATABASE: process.env.MYSQL_DATABASE && process.env.MYSQL_DATABASE.replace(/,$/g, ''),
        URL: process.env.URL && process.env.URL.replace(/,$/g, ''),
    },
};

export default nextConfig;
