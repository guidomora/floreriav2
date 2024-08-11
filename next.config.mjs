/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
import { hostname } from "os";

const nextConfig = {
    /* config options here */
    images: {
        remotePatterns:[
            {
                protocol:'https',
                hostname:'firebasestorage.googleapis.com',
                pathname: '/v0/b/floreria-morabito.appspot.com/**'
            }
        ]
    }
};

export default {
    ...nextConfig,
    ...withVideos(),
};


