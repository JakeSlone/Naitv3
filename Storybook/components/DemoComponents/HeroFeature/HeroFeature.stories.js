import HeroFeature from "./HeroFeature.vue";

export default {
    title: "Components/Demo Components/HeroFeature",
    component: HeroFeature,
    argTypes: {
        student: { control: "boolean" },
        staff: { control: "boolean" },
    },
};

const Template = (args) => ({
    components: { HeroFeature },
    setup: () => ({ args }),
    template: '<HeroFeature v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    readmore: "Item Title",
    teaser: "Item Teaser",
    primaryLink: "#",
    primaryCTA: "Link one",
    secondaryLink: "#",
    secondaryCTA: "Link two",
    featuredImg:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    featuredImgAlt: "Alt Text",
    student: true,
    staff: false,
    personalEmail: "email@email.ca",
    address: "124 road st",
};
