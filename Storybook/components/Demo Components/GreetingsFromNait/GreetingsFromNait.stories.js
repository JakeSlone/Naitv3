import GreetingsFromNait from "./GreetingsFromNait.vue";

export default {
    title: "Components/Demo Components/GreetingsFromNait",
    component: GreetingsFromNait,
};

const Template = (args) => ({
    components: { GreetingsFromNait },
    setup: () => ({ args }),
    template: '<GreetingsFromNait v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
