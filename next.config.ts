import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
};

module.exports = {
    extends: [
        "next",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
        ],
    },
};

export default nextConfig;
