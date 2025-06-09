// /** @type {import('next').NextConfig} */
// const nextConfig = {

//     webpack(config) {
//         config.resolve.fallback = {

//             // if you miss it, all the other options in fallback, specified
//             // by next.js will be dropped.
//             ...config.resolve.fallback,

//             fs: false, // the solution
//         };

//         return config;
//     },
    
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    // ...
    webpack: (config, { webpack }) => {
        config.plugins.push(new webpack.IgnorePlugin({
            resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
        }))

        return config
    },
}

export default nextConfig
