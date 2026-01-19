import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Allow the build to succeed even if there are type errors in your code or deps
    typescript: {
        ignoreBuildErrors: true,
    },
    devIndicators: {
        buildActivity: false,
    },
    // …any other Next.js config options you already had
};

export default nextConfig;
