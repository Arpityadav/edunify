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
        AWS_REGION: process.env.AWS_REGION && process.env.AWS_REGION.replace(/,$/g, ''),
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID && process.env.AWS_ACCESS_KEY_ID.replace(/,$/g, ''),
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY && process.env.AWS_SECRET_ACCESS_KEY.replace(/,$/g, ''),
        AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME && process.env.AWS_S3_BUCKET_NAME.replace(/,$/g, ''),

    },
};

export default nextConfig;
