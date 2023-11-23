/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
    stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        {
            name: "@storybook/addon-postcss",
            options: {
                postcssLoaderOptions: {
                    implementation: require("postcss"),
                },
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-vue-addon",
    ],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
