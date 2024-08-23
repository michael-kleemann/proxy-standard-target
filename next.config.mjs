/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/proxy-standard-target",
    async redirects() {
        return [
            {
                source: "/",
                destination: "/proxy-standard-target",
                permanent: false,
                basePath: false,
            },
        ];
    },
};

export default nextConfig;
